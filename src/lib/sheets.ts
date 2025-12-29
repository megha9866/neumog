import { google } from 'googleapis';

export const appendToSheet = async (values: string[]) => {
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SHEET_ID) {
        throw new Error('Google Sheets credentials are missing in environment variables.');
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'Sheet1!A:A', // Appends to the first sheet, assuming columns match
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [values],
            },
        });
        console.log('Sheet updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error appending to sheet:', error);
        throw error;
    }
};
