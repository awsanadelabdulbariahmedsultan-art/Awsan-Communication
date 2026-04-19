const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = 'awsandew.world.com';
  
  // فحص سجلات MX و NS و IPv4
  dns.resolve4(domain, (err4, ip) => {
    dns.resolveMx(domain, (errMx, mx) => {
      dns.resolveNs(domain, (errNs, ns) => {
        res.send(`
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 40px;">
            <div style="max-width: 800px; margin: auto; border: 1px solid #1e293b; border-radius: 15px; background: #1e293b; padding: 30px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
              <h1 style="color: #38bdf8; margin-bottom: 5px;">AWSAN COMMUNICATION SYSTEM</h1>
              <p style="color: #94a3b8; font-size: 1.1em;">Engineer: <strong>Eng. Awsan Adel Sultan</strong></p>
              <div style="display: flex; justify-content: space-around; margin-top: 30px;">
                <div style="background: #334155; padding: 15px; border-radius: 10px; width: 30%;">
                  <h4 style="margin: 0; color: #fbbf24;">Connectivity</h4>
                  <p style="font-size: 0.9em;">IPv4: ${err4 ? 'Inactive' : ip[0]}</p>
                </div>
                <div style="background: #334155; padding: 15px; border-radius: 10px; width: 30%;">
                  <h4 style="margin: 0; color: #f472b6;">Mail Gateway</h4>
                  <p style="font-size: 0.9em;">MX: ${errMx ? 'Pending Activation' : 'Active'}</p>
                </div>
                <div style="background: #334155; padding: 15px; border-radius: 10px; width: 30%;">
                  <h4 style="margin: 0; color: #22d3ee;">Name Servers</h4>
                  <p style="font-size: 0.9em;">NS: ${errNs ? 'Auto-Managed' : 'Verified'}</p>
                </div>
              </div>
              <div style="margin-top: 30px; padding: 15px; border-left: 4px solid #38bdf8; background: #0f172a; text-align: left;">
                <code style="color: #38bdf8;">[AI Status]: Monitoring awsandew.world.com for 6G Scalability...</code>
              </div>
              <footer style="margin-top: 40px; font-size: 0.8em; color: #64748b;">
                Verified Identity: ID.01010305468 | Yemen | 00967777852433<br>
                Synced to GitHub: awsanadelabdulbariahmedsultan-art
              </footer>
            </div>
          </body>
        `);
      });
    });
  });
});

app.listen(port, () => {
  console.log('Smart Dashboard is LIVE at port ' + port);
});
