"use server";

import { google } from "googleapis";

export async function submitApplicationToGoogleSheets(formData: {
  parentName: string;
  phone: string;
  grade: string;
}) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      throw new Error("Google Sheets spreadsheet ID not configured");
    }

    const timestamp = new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, formData.parentName, formData.phone, formData.grade]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Google Sheets error:", error);
    return { success: false, error: "Failed to submit application" };
  }
}
