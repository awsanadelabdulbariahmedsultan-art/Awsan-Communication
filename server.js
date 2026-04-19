const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = 'awsandew.world.com';
  
  dns.resolveCname(domain, (errCname, cname) => {
    dns.resolveMx(domain, (errMx, mx) => {
      res.send(`
        <body style="font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; text-align: center; padding: 40px;">
          <div style="max-width: 850px; margin: auto; background: #1e293b; padding: 30px; border-radius: 15px; border-bottom: 5px solid #22d3ee; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
            <h1 style="color: #22d3ee; letter-spacing: 1px;">AWSAN INFRASTRUCTURE MONITOR</h1>
            <p style="color: #94a3b8;">Chief Engineer: <strong>Eng. Awsan Adel Sultan</strong></p>
            <hr style="border: 0.1px solid #334155; margin: 20px 0;">
            
            <div style="display: flex; justify-content: space-around; gap: 20px;">
              <div style="background: #0f172a; padding: 25px; border-radius: 12px; flex: 1;">
                <h3 style="color: #fb7185; margin-top: 0;">CNAME Records</h3>
                <p style="font-size: 0.9em; color: #cbd5e1;">${errCname ? 'No CNAME found (Direct IP Mode)' : 'Linked to: ' + cname}</p>
              </div>
              <div style="background: #0f172a; padding: 25px; border-radius: 12px; flex: 1;">
                <h3 style="color: #f472b6; margin-top: 0;">Mail Exchange (MX)</h3>
                <p style="font-size: 0.9em; color: #cbd5e1;">${errMx ? 'No MX records (Pending Setup)' : 'MX Active'}</p>
              </div>
            </div>

            <div style="margin-top: 30px; background: #334155; padding: 15px; border-radius: 8px; border-left: 4px solid #22d3ee;">
              <code style="color: #22d3ee;">[Status]: Monitoring awsandew.world.com for Cloud Aliasing & Mail Integrity.</code>
            </div>
            
            <footer style="margin-top: 40px; font-size: 0.8em; color: #64748b;">
              ID: 01010305468 | Yemen | 00967777852433<br>
              <span style="color: #22d3ee;">Auto-Synced via Eng. Awsan's Cloud Watcher</span>
            </footer>
          </div>
        </body>
      `);
    });
  });
});

app.listen(port, () => { console.log('Dashboard Updated: CNAME & MX Data Integrated.'); });
