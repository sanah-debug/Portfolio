import fs from 'fs';
import path from 'path';

export interface StoredMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
  ip?: string;
  emailDispatched: boolean;
  emailError?: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const INBOX_FILE = path.join(DATA_DIR, 'inbox.json');

// Ensure data directory and file exist
function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(INBOX_FILE)) {
    fs.writeFileSync(INBOX_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function saveMessage(msg: Omit<StoredMessage, 'id' | 'timestamp'>): StoredMessage {
  ensureStorage();
  const raw = fs.readFileSync(INBOX_FILE, 'utf-8');
  let messages: StoredMessage[] = [];
  try {
    messages = JSON.parse(raw);
  } catch {
    messages = [];
  }

  const record: StoredMessage = {
    ...msg,
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
  };

  messages.unshift(record);
  fs.writeFileSync(INBOX_FILE, JSON.stringify(messages, null, 2), 'utf-8');
  return record;
}

export function getMessages(): StoredMessage[] {
  ensureStorage();
  try {
    const raw = fs.readFileSync(INBOX_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
