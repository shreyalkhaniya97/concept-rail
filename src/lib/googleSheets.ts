import { google } from 'googleapis'
import { EnquiryFormData } from '@/types'

export async function appendToSheet(data: EnquiryFormData) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  const row = [
    new Date().toISOString(),
    data.fullName,
    data.company,
    data.email,
    data.phone,
    data.city,
    data.projectType,
    data.applications.join(', '),
    data.approxLength,
    data.glassThickness,
    data.products.join(', '),
    data.finish,
    data.profileType,
    data.timeline,
    data.message,
  ]

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${process.env.GOOGLE_SHEET_TAB}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}
