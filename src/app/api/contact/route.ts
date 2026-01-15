// import nodemailer from "nodemailer"
// import { NextResponse } from "next/server"

// export async function POST(req: Request) {
//   try {
//     const body = await req.json()
//     const { name, email, phoneNumber, budget, message } = body

//     // Configure SMTP transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_SERVER,
//       port: Number(process.env.EMAIL_PORT),
//       secure: true, // true for port 465
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     })

//     // Send email
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: "theabhishek96@gmail.com", // Your receiving email
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
// Name: ${name}
// Email: ${email}
// Phone: ${phoneNumber}
// Budget: ${budget}
// Message: ${message}
//       `,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phoneNumber}</p>
//         <p><strong>Budget:</strong> ${budget}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     })

//     return NextResponse.json({ success: true })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json(
//       { success: false, error: "Failed to send email" },
//       { status: 500 }
//     )
//   }
// }


import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, phoneNumber, budget, message } = await req.json()

    console.log("EMAIL USER:", process.env.EMAIL_USERNAME)
console.log("EMAIL PASS:", process.env.EMAIL_PASSWORD ? "Loaded" : "Missing")
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USERNAME}>`,
      replyTo: email,
      to: "abhinotshek14@gmail.com",
      subject: `New Lead from ${name}`,
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phoneNumber}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
