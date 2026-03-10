import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, agency, phone, message } = await req.json()

  if (!name || !email || !agency || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"QNTM Apps Website" <${process.env.SMTP_USER}>`,
    to: 'sridhar.pugalselvan@quantumapps.ai',
    replyTo: email,
    subject: `New Contact: ${name} — ${agency}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Agency</strong></td><td>${agency}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || '—'}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;">${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
