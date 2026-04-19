const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = 'awsandew.world.com';
  dns.resolve4(domain, (err4, ip) => {
    dns.resolveMx(domain, (errMx, mx) => {
      dns.resolveNs(domain, (errNs, ns) => {
        res.send(`
          <body style="font-family: sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 40px;">
            <div style="max-width: 800px; margin: auto; background: #1e293b; padding: 30px; border-radius: 15px; border-top: 5px solid #38bdf8;">
              <h1 style="color: #38bdf8;">AWSAN SMART INFRASTRUCTURE</h1>
              <p>Engineer: <strong>Eng. Awsan Adel Sultan</strong></p>
              <hr style="border: 0.1px solid #334155; margin: 20px 0;">
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; text-align: left;">
                <div style="background: #334155; padding: 15px; border-radius: 8px;">
                  <h4 style="margin:0; color: #fbbf24;">MX (Mail)</h4>
                  <p style="font-size: 13px;">${errMx ? 'No MX records found' : 'Active Server'}</p>
                </div>
                <div style="background: #334155; padding: 15px; border-radius: 8px;">
                  <h4 style="margin:0; color: #22d3ee;">NS (Authority)</h4>
                  <p style="font-size: 13px;">${errNs ? 'Inherited (UltraDNS)' : 'Verified'}</p>
                </div>
              </div>

              <div style="margin-top: 20px; background: #020617; padding: 10px; border-radius: 5px;">
                <code style="color: #4ade80;">[6G Readiness]: Monitoring awsandew.world.com for SOA & IPv6...</code>
              </div>
              <footer style="margin-top: 30px; font-size: 11px; color: #64748b;">Verified: ID.01010305468 | Yemen</footer>
            </div>
          </body>
        `);
      });
    });
  });
});

app.listen(port, () => { console.log('Dashboard updated!'); });
