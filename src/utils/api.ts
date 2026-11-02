export interface ContactFormPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  details?: Record<string, string>;
}

export async function submitContactMessage(payload: ContactFormPayload): Promise<ApiResponse> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  } catch (err: any) {
    return {
      success: false,
      message: 'Network or connectivity error while connecting to the server.',
      error: err?.message || 'Unknown network error',
    };
  }
}

export async function checkServerHealth(): Promise<boolean> {
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    return data.status === 'ok';
  } catch {
    return false;
  }
}
