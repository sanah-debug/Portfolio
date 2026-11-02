import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import contactRouter from './routes/contact';

dotenv.config();

const app = express();
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';

// Security Headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// CORS
app.use(
  cors({
    origin: [CLIENT_ORIGIN, 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://localhost:3000'],
    credentials: true,
  })
);

// Parsers
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Health Check
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'sana-hasan-portfolio-api',
  });
});

// Contact Route
app.use('/api/contact', contactRouter);

// Global 404 for API
app.use('/api/*', (_req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found',
  });
});

// Global Error Handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({
    success: false,
    message: 'An internal server error occurred',
  });
});

export default app;
