import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, location, message } = req.body as {
    name: string;
    email: string;
    phone: string;
    location: string;
    message: string;
  };

  if (!name?.trim()) {
    return res.status(400).json({ error: 'Name is required' });
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'gayanehakobyan93@gmail.com',
    replyTo: email || undefined,
    subject: `Portfolio inquiry from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
        <h2 style="color: #C9A93C; margin-bottom: 24px;">
          New message from your portfolio
        </h2>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
          <tr>
            <td style="padding: 8px 16px 8px 0; font-weight: 600; white-space: nowrap;">Name</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px 8px 0; font-weight: 600; white-space: nowrap;">Email</td>
            <td style="padding: 8px 0;">${email || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px 8px 0; font-weight: 600; white-space: nowrap;">Phone</td>
            <td style="padding: 8px 0;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px 8px 0; font-weight: 600; white-space: nowrap;">Location</td>
            <td style="padding: 8px 0;">${location || '—'}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin-bottom: 24px;" />
        <p style="font-weight: 600; margin-bottom: 8px;">Message</p>
        <p style="line-height: 1.7; white-space: pre-wrap;">${message || '—'}</p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }

  return res.status(200).json({ success: true });
}
