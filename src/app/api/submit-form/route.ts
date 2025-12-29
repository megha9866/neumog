import { NextResponse } from 'next/server';
import { sendNotificationEmail } from '@/lib/mailer';
import { appendToSheet } from '@/lib/sheets';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { formType, ...data } = body;
        const timestamp = new Date().toISOString();

        console.log(`Received ${formType} submission:`, data);

        if (!formType) {
            return NextResponse.json({ error: 'Missing formType' }, { status: 400 });
        }

        let emailSubject = '';
        let emailHtml = '';

        // Common Email Template
        const generateHtml = (title: string, fields: Record<string, any>) => `
      <h2>${title}</h2>
      <p><strong>Received at:</strong> ${timestamp}</p>
      <ul>
        ${Object.entries(fields).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('')}
      </ul>
    `;

        switch (formType) {
            case 'EXPERTS':
                emailSubject = 'New Expert Application';
                emailHtml = generateHtml('New Expert Application', data);

                // Prepare row for Google Sheet: 
                // timestamp, name, email, core skills, availability, portfolio link, notes, status
                const sheetRow = [
                    timestamp,
                    data.name || '',
                    data.email || '',
                    data.coreSkills || '',
                    data.availability || '',
                    data.portfolioLink || '',
                    data.notes || '',
                    'New' // Status
                ];

                await appendToSheet(sheetRow);
                break;

            case 'START_PROJECT':
                emailSubject = 'New Project Inquiry';
                emailHtml = generateHtml('New Project Inquiry', data);
                break;

            case 'CONTACT':
                emailSubject = 'New Contact Message';
                emailHtml = generateHtml('New Contact Message', data);
                break;

            default:
                return NextResponse.json({ error: 'Invalid formType' }, { status: 400 });
        }

        // Send Email Notification for all forms
        await sendNotificationEmail(emailSubject, emailHtml);

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });

    } catch (error: unknown) {
        console.error('API Error:', error);

        // Improve error serialization for JSON response
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        const errorStack = error instanceof Error ? error.stack : undefined;

        console.error('Stack trace:', errorStack);

        return NextResponse.json(
            { error: 'Internal Server Error', details: errorMessage },
            { status: 500 }
        );
    }
}
