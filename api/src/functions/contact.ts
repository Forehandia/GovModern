import { app, HttpRequest, HttpResponseInit, InvocationContext } from '@azure/functions';
import sgMail from '@sendgrid/mail';

interface ContactPayload {
  name: string;
  agency: string;
  email: string;
  phone?: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.http('contact', {
  methods: ['POST'],
  authLevel: 'anonymous',
  handler: async (req: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
    // CORS headers for local dev
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': process.env.ALLOWED_ORIGIN ?? 'https://govmodern.com',
    };

    let body: ContactPayload;
    try {
      body = (await req.json()) as ContactPayload;
    } catch {
      return { status: 400, headers, jsonBody: { error: 'Invalid JSON body' } };
    }

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim() || !body.agency?.trim()) {
      return { status: 400, headers, jsonBody: { error: 'Missing required fields: name, agency, email, message' } };
    }

    if (!isValidEmail(body.email)) {
      return { status: 400, headers, jsonBody: { error: 'Invalid email address' } };
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !toEmail) {
      context.error('SENDGRID_API_KEY or CONTACT_EMAIL not configured');
      return { status: 500, headers, jsonBody: { error: 'Server configuration error' } };
    }

    sgMail.setApiKey(apiKey);

    const subject = `New Contact Form: ${body.name} — ${body.agency}`;
    const text = [
      `Name:    ${body.name}`,
      `Agency:  ${body.agency}`,
      `Email:   ${body.email}`,
      `Phone:   ${body.phone ?? 'Not provided'}`,
      '',
      'Message:',
      body.message,
    ].join('\n');

    try {
      await sgMail.send({
        to: toEmail,
        from: 'noreply@govmodern.com',
        replyTo: body.email,
        subject,
        text,
      });

      context.log(`Contact form submitted by ${body.email} from ${body.agency}`);
      return { status: 200, headers, jsonBody: { success: true } };
    } catch (err) {
      context.error('SendGrid error:', err);
      return { status: 502, headers, jsonBody: { error: 'Failed to send message. Please try again.' } };
    }
  },
});
