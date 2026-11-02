import assert from 'assert';
import http from 'http';
import app from '../app';
import { getMessages } from '../services/storageService';

let server: http.Server;
const TEST_PORT = 5099;
const BASE_URL = `http://localhost:${TEST_PORT}`;

async function request(path: string, options: { method?: string; body?: any } = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: options.method || 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const data = await res.json();
  return { status: res.status, data };
}

async function runTests() {
  console.log('--- Starting API Integration Tests ---');
  server = app.listen(TEST_PORT);

  try {
    // 1. Health check
    console.log('[Test 1] Health endpoint check...');
    const health = await request('/api/health');
    assert.strictEqual(health.status, 200);
    assert.strictEqual(health.data.status, 'ok');
    console.log('✓ Health check passed.');

    // 2. Contact validation: missing name
    console.log('[Test 2] Contact validation (missing name)...');
    const badName = await request('/api/contact', {
      method: 'POST',
      body: { name: '', email: 'valid@example.com', message: 'This is a valid long test message.' },
    });
    assert.strictEqual(badName.status, 400);
    assert.strictEqual(badName.data.success, false);
    console.log('✓ Missing name rejection passed.');

    // 3. Contact validation: invalid email
    console.log('[Test 3] Contact validation (invalid email)...');
    const badEmail = await request('/api/contact', {
      method: 'POST',
      body: { name: 'Elena', email: 'not-an-email', message: 'This is a valid long test message.' },
    });
    assert.strictEqual(badEmail.status, 400);
    assert.strictEqual(badEmail.data.success, false);
    console.log('✓ Invalid email rejection passed.');

    // 4. Contact validation: too short message
    console.log('[Test 4] Contact validation (short message)...');
    const badMsg = await request('/api/contact', {
      method: 'POST',
      body: { name: 'Elena', email: 'valid@example.com', message: 'short' },
    });
    assert.strictEqual(badMsg.status, 400);
    assert.strictEqual(badMsg.data.success, false);
    console.log('✓ Short message rejection passed.');

    // 5. Contact submission: valid payload
    console.log('[Test 5] Valid contact submission...');
    const valid = await request('/api/contact', {
      method: 'POST',
      body: {
        name: 'Elena Rostova',
        email: 'elena@organization.com',
        subject: 'Engineering Internship Inquiry',
        message: 'Hello Sana, I reviewed your portfolio and would like to discuss an opportunity.',
      },
    });
    assert.strictEqual(valid.status, 200);
    assert.strictEqual(valid.data.success, true);
    assert.ok(valid.data.data?.id, 'Expected an assigned message ID');
    console.log('✓ Valid contact submission succeeded with ID:', valid.data.data.id);

    // 6. Persistence check: retrieve messages
    console.log('[Test 6] Verification of message persistence...');
    const inbox = await request('/api/contact/messages');
    assert.strictEqual(inbox.status, 200);
    assert.ok(inbox.data.count > 0, 'Expected at least 1 recorded message');
    const recorded = inbox.data.messages.find((m: any) => m.email === 'elena@organization.com');
    assert.ok(recorded, 'Expected submitted message in inbox');
    console.log('✓ Persistence verification passed. Total messages in dossier:', inbox.data.count);

    console.log('--- ALL BACKEND INTEGRATION TESTS PASSED SUCCESSFULLY! ---');
    server.close(() => {
      process.exit(0);
    });
  } finally {
    if (server) server.close();
  }
}

runTests().catch((err) => {
  console.error('Test failure:', err);
  if (server) server.close();
  process.exit(1);
});
