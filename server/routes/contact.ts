import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { contactRateLimiter } from '../middleware/rateLimiter';
import { sendContactNotification } from '../services/emailService';
import { saveMessage, getMessages } from '../services/storageService';

const router = Router();

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  email: z.string().trim().email('Invalid email address format').max(150, 'Email cannot exceed 150 characters'),
  subject: z.string().trim().max(150, 'Subject cannot exceed 150 characters').optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(3000, 'Message cannot exceed 3000 characters'),
});

// POST /api/contact
router.post('/', contactRateLimiter, async (req: Request, res: Response) => {
  try {
    const parseResult = contactSchema.safeParse(req.body);

    if (!parseResult.success) {
      const errors = parseResult.error.flatten().fieldErrors;
      const firstError = Object.values(errors)[0]?.[0] || 'Invalid input data.';
      return res.status(400).json({
        success: false,
        message: firstError,
        details: errors,
      });
    }

    const { name, email, subject, message } = parseResult.data;
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown';

    // 1. Attempt email dispatch
    const emailResult = await sendContactNotification({
      name,
      email,
      subject,
      message,
    });

    // 2. Persist record locally regardless of SMTP setup
    const saved = saveMessage({
      name,
      email,
      subject,
      message,
      ip: clientIp,
      emailDispatched: emailResult.sent,
      emailError: emailResult.error,
    });

    // 3. Return honest, descriptive response
    if (emailResult.sent) {
      return res.status(200).json({
        success: true,
        message: 'Your message was successfully transmitted and dispatched via email!',
        data: {
          id: saved.id,
          deliveredVia: 'email',
          timestamp: saved.timestamp,
        },
      });
    } else {
      return res.status(200).json({
        success: true,
        message: 'Your message has been safely received and preserved in the portfolio inquiry log.',
        data: {
          id: saved.id,
          deliveredVia: 'local_storage',
          timestamp: saved.timestamp,
          note: 'SMTP credentials are not yet configured in .env. Your message is safely stored in the server dossier.',
        },
      });
    }
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: 'An unexpected internal error occurred while processing your inquiry.',
    });
  }
});

// GET /api/contact/messages
router.get('/messages', (_req: Request, res: Response) => {
  const messages = getMessages();
  return res.status(200).json({
    success: true,
    count: messages.length,
    messages,
  });
});

export default router;
