# Neumog Forms Integration Setup

This project uses a Next.js API Route (`/api/submit-form`) to handle form submissions. It integrates with Google Sheets (for the Experts form) and Nodemailer (for email notifications).

## 1. Environment Variables (Netlify)

You must configure the following environment variables in your Netlify Site Settings (Site configuration > Environment variables).

### Google Sheets Configuration
To write to Google Sheets, you need a Google Cloud Service Account.
1. Go to Google Cloud Console.
2. Create a new Project (or use existing).
3. Enable **Google Sheets API**.
4. Create a **Service Account**.
5. Create a JSON Key for that Service Account and download it.
6. **Share your target Google Sheet** with the `client_email` from your JSON key (gives it write access).

**Variables:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: The `client_email` from your JSON key.
- `GOOGLE_PRIVATE_KEY`: The `private_key` from your JSON key. (Copy the whole thing including `-----BEGIN PRIVATE KEY...`).
- `GOOGLE_SHEET_ID`: The ID of your spreadsheet (found in the URL: `docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit`).

### Email Configuration (Nodemailer)
Configure SMTP settings. For Gmail, you usually need an "App Password".
- `EMAIL_USER`: Your email address (e.g., `notifications@neumog.com`).
- `EMAIL_PASS`: Your email password or App Password.
- `EMAIL_TO`: The internal email address that receives the notifications.

## 2. Forms API Usage

Send a `POST` request to `/api/submit-form` with a JSON body.

### Required Field: `formType`
Must be one of:
- `'EXPERTS'` (Saves to Sheet + Email)
- `'START_PROJECT'` (Email only)
- `'CONTACT'` (Email only)

### Example Payload (Experts)
```json
{
  "formType": "EXPERTS",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "coreSkills": "React, Node.js",
  "availability": "Full-time",
  "portfolioLink": "https://jane.dev",
  "notes": "Looking forward to it."
}
```

## 3. Adding New Fields

To add a new field to the Experts form:

1. **Update Frontend**: Add the input field to your React form component.
2. **Update Backend (`src/app/api/submit-form/route.ts`)**:
   - In the `EXPERTS` case, add `data.yourNewField` to the `sheetRow` array.
   - **Important**: Ensure the order of the array matches the columns in your Google Sheet.
3. **Update Google Sheet**: Add a header column for the new field in your Sheet.

## 4. Troubleshooting

- **Check Logs**: The API logs all submissions and errors. Check Netlify Function Logs.
- **Google Auth Error**: Ensure `GOOGLE_PRIVATE_KEY` in Netlify includes the newlines correctly. The code attempts to fix this, but pasting exactly as provided in the JSON is best.
- **Permission Denied**: Did you share the Google Sheet with the Service Account email?
