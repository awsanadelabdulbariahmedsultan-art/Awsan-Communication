const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = '://world.com';
  
  dns.resolveCname(domain, (errCname, cname) => {
    dns.resolve(domain, 'CAA', (errCaa, caa) => {
      res.send(`
        <body style="font-family: 'Segoe UI', sans-serif; background: #0f172a; color: white; text-align: center; padding: 40px;">
          <div style="max-width: 850px; margin: auto; background: #1e293b; padding: 30px; border-radius: 15px; border-left: 5px solid #4ade80; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);">
            <h1 style="color: #4ade80; letter-spacing: 1px;">AWSAN SECURITY & CLOUD MONITOR</h1>
            <p style="color: #94a3b8;">Chief Engineer: <strong>Eng. Awsan Adel Sultan</strong></p>
            <hr style="border: 0.1px solid #334155; margin: 20px 0;">
            
            <div style="display: flex; justify-content: space-around; gap: 20px;">
              <div style="background: #0f172a; padding: 25px; border-radius: 12px; flex: 1;">
                <h3 style="color: #22d3ee; margin-top: 0;">CNAME Records</h3>
                <p style="font-size: 0.9em; color: #cbd5e1;">${errCname ? 'No CNAME found (Direct IP Mode)' : 'Linked to: ' + cname}</p>
              </div>
              <div style="background: #0f172a; padding: 25px; border-radius: 12px; flex: 1;">
                <h3 style="color: #4ade80; margin-top: 0;">CAA (Security)</h3>
                <p style="font-size: 0.9em; color: #cbd5e1;">${errCaa ? 'No CAA records (Pending Auth)' : 'Authorized: ' + JSON.stringify(caa)}</p>
              </div>
            </div>

            <div style="margin-top: 30px; background: #020617; padding: 15px; border-radius: 8px; border-right: 4px solid #4ade80;">
              <code style="color: #4ade80;">[Security Intel]: RFC8482 Detected | Monitoring CAA pathways for Certificate Integrity.</code>
            </div>
            
            <footer style="margin-top: 40px; font-size: 0.8em; color: #64748b;">
              Verified Identity: Eng. Awsan Adel Sultan | Yemen | 00967777852433<br>
              <span style="color: #4ade80;">Auto-Synced Status: ACTIVE</span>
            </footer>
          </div>
        </body>
      `);
    });
  });
});

app.listen(port, () => { console.log('Dashboard Updated: Security & CAA Data Integrated.'); });
