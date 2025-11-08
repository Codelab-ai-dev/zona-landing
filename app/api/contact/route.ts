import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, organization, message } = body

    // Validación básica
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos requeridos deben ser completados" },
        { status: 400 }
      )
    }

    // Detectar el tipo de mensaje
    const isEmailPrioritario = message.startsWith("[Email prioritario]")
    const isVentas = message.startsWith("[Ventas]")
    
    // Determinar destinatario y tipo de mensaje
    let recipientEmail = "admin@zona-gol.com"
    let messageType = "Contacto General"
    let headerColor = "#667eea"
    let headerIcon = "⚽"
    
    if (isEmailPrioritario) {
      recipientEmail = "admin@zona-gol.com"
      messageType = "Email Prioritario"
      headerColor = "#ef4444"
      headerIcon = "🚨"
    } else if (isVentas) {
      recipientEmail = "admin@zona-gol.com"
      messageType = "Consulta de Ventas"
      headerColor = "#10b981"
      headerIcon = "💼"
    }

    // Limpiar el mensaje del prefijo
    const cleanMessage = message.replace(/^\[(Email prioritario|Ventas)\]\n\n/, "")
    const fullName = lastName ? `${firstName} ${lastName}` : firstName

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Zona Gol <admin@zona-gol.com>", // Cambiar por tu dominio verificado
      to: [recipientEmail],
      subject: `${messageType}: ${fullName}${organization ? ` - ${organization}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: ${headerColor};
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 8px;
                border-left: 4px solid ${headerColor};
              }
              .label {
                font-weight: 600;
                color: ${headerColor};
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .value {
                color: #1f2937;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #10b981;
                white-space: pre-wrap;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 24px;">${headerIcon} ${messageType} - Zona Gol</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre Completo</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: ${headerColor}; text-decoration: none;">${email}</a></div>
              </div>
              
              ${
                phone
                  ? `
              <div class="field">
                <div class="label">Teléfono</div>
                <div class="value"><a href="tel:${phone}" style="color: ${headerColor}; text-decoration: none;">${phone}</a></div>
              </div>
              `
                  : ""
              }
              
              ${
                organization
                  ? `
              <div class="field">
                <div class="label">Organización/Liga</div>
                <div class="value">${organization}</div>
              </div>
              `
                  : ""
              }
              
              <div class="field">
                <div class="label">Mensaje</div>
                <div class="message-box">${cleanMessage}</div>
              </div>
              
              <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de Zona Gol</p>
                <p style="margin: 5px 0;">Responde directamente a ${email} para contactar al cliente</p>
              </div>
            </div>
          </body>
        </html>
      `,
      // También enviar versión texto plano
      text: `
${messageType} desde Zona Gol

Nombre: ${fullName}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ""}
${organization ? `Organización: ${organization}` : ""}

Mensaje:
${cleanMessage}
      `,
    })

    if (error) {
      console.error("Error al enviar email:", error)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    return NextResponse.json(
      { success: true, message: "Email enviado correctamente", data },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error en el endpoint de contacto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
