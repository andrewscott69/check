export function generateReceiptHTML(tx: any) {
    return `
      <html>
        <body style="font-family: Arial">
          <h2>Transaction Receipt</h2>
          <p><strong>ID:</strong> ${tx.id}</p>
          <p><strong>Amount:</strong> $${tx.amount}</p>
          <p><strong>Date:</strong> ${new Date(tx.createdAt).toLocaleString()}</p>
          <p><strong>Status:</strong> ${tx.status}</p>
          <hr/>
          <p>Thank you for banking with Silver Crest Bank.</p>
        </body>
      </html>
    `
  }
  
