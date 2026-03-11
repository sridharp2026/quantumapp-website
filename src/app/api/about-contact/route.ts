import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, role, message } = await req.json()

  if (!name || !email || !message) {
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
    to: process.env.CONTACT_EMAIL ?? 'sridhar.pugalselvan@quantumapps.ai',
    replyTo: email,
    subject: `About Page Inquiry: ${name}`,
    html: `
      <h2>New Inquiry from About Page</h2>
      <table cellpadding="8" style="border-collapse:collapse;">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Role</strong></td><td>${role || '—'}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;">${message}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
