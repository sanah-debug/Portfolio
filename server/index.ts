import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[API Server] Running on http://localhost:${PORT}`);
});

export default app;
