export function generateEmailTemplate({
  title,
  message,
  ctaText,
  ctaUrl,
  footerNote,
}: {
  title: string
  message: string
  ctaText?: string
  ctaUrl?: string
  footerNote?: string
}) {
  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;background:#f4f4f7;">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f7; color: #333333;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f4f4f7; padding: 40px 0;">
        <tr>
          <td align="center">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
              <tr>
                <td style="background-color: #4F46E5; padding: 24px 40px;">
                  <img src="https://yourdomain.com/logo.png" alt="BankApp Logo" height="40" style="display:block; margin: 0 auto;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 32px 40px;">
                  <h2 style="color: #111827; font-size: 22px; margin-bottom: 16px;">${title}</h2>
                  <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px; color: #4b5563;">
                    ${message}
                  </p>
                  ${
                    ctaText && ctaUrl
                      ? `
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="${ctaUrl}" style="padding: 12px 24px; background-color: #4F46E5; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 6px;">
                          ${ctaText}
                        </a>
                      </div>
                    `
                      : ""
                  }
                </td>
              </tr>
              <tr>
                <td style="padding: 0 40px 32px 40px;">
                  <p style="font-size: 13px; color: #9ca3af;">
                    ${footerNote || "If you did not request this, please ignore this email."}
                  </p>
                </td>
              </tr>
              <tr>
                <td style="text-align: center; font-size: 12px; color: #9ca3af; padding: 24px;">
                  &copy; ${new Date().getFullYear()} BankApp. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}
