import nodemailer from 'nodemailer';

export interface EmailPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface EmailResult {
  sent: boolean;
  messageId?: string;
  error?: string;
}

export async function sendContactNotification(payload: EmailPayload): Promise<EmailResult> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

  // Check if SMTP configuration is present
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return {
      sent: false,
      error: 'SMTP service is unconfigured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in .env.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const recipient = CONTACT_EMAIL || SMTP_USER;
    const mailSubject = payload.subject
      ? `[Portfolio Inquiry] ${payload.subject}`
      : `[Portfolio Inquiry] New message from ${payload.name}`;

    const info = await transporter.sendMail({
      from: `"${payload.name}" <${SMTP_USER}>`,
      replyTo: payload.email,
      to: recipient,
      subject: mailSubject,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject || 'N/A'}\n\nMessage:\n${payload.message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #efeeeb; border-radius: 8px;">
          <h2 style="color: #ac3400; margin-top: 0;">New Contact Inquiry</h2>
          <p><strong>From:</strong> ${payload.name} (&lt;${payload.email}&gt;)</p>
          <p><strong>Subject:</strong> ${payload.subject || 'Not specified'}</p>
          <div style="background-color: #faf9f6; padding: 15px; border-radius: 4px; border-left: 4px solid #ac3400; margin-top: 15px;">
            <p style="white-space: pre-wrap; margin: 0; color: #1a1c1a;">${payload.message}</p>
          </div>
          <p style="color: #77767b; font-size: 12px; margin-top: 20px;">Dispatched from Sana Hasan Developer Portfolio Transmittal Pipeline.</p>
        </div>
      `,
    });

    return {
      sent: true,
      messageId: info.messageId,
    };
  } catch (err: any) {
    return {
      sent: false,
      error: err?.message || 'SMTP dispatch failure',
    };
  }
}
