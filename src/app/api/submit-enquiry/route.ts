import { NextRequest, NextResponse } from 'next/server'
import { appendToSheet } from '@/lib/googleSheets'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    await appendToSheet(body)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sheet error:', err)
    return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 })
  }
}
