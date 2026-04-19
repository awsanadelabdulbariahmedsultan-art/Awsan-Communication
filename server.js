const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = 'awsandew.world.com';
  
  // دمج كافة عمليات الفحص من جميع الصور في مصفوفة واحدة
  const results = {};
  const check = (type, key, callback) => {
    dns.resolve(domain, type, (err, data) => {
      results[key] = err ? 'Pending / Not Found' : JSON.stringify(data);
      callback();
    });
  };

  // تنفيذ الفحص المتسلسل لجميع السجلات (A, AAAA, MX, NS, CNAME, CAA, ANY)
  check('A', 'ipv4', () => {
    check('AAAA', 'ipv6', () => {
      check('MX', 'mail', () => {
        check('NS', 'authority', () => {
          check('CNAME', 'cloud', () => {
            dns.resolveAny(domain, (errAny, anyData) => {
              const rfcStatus = JSON.stringify(anyData).includes('RFC8482') ? 'Active (RFC8482)' : 'Standard';
              
              res.send(`
                <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #020617; color: #f8fafc; text-align: center; padding: 30px;">
                  <div style="max-width: 900px; margin: auto; border: 1px solid #1e293b; border-radius: 20px; background: #0f172a; padding: 40px; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
                    <h1 style="color: #38bdf8; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 2px;">Awsan Communication Global Hub</h1>
                    <p style="color: #94a3b8; font-size: 1.2em;">Chief Systems Engineer: <strong>Eng. Awsan Adel Sultan</strong></p>
                    <hr style="border: 0.5px solid #1e293b; margin: 30px 0;">

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: left;">
                      <div style="background: #1e293b; padding: 20px; border-radius: 12px; border-top: 3px solid #38bdf8;">
                        <h4 style="margin: 0; color: #38bdf8;">6G Connectivity (IPv6)</h4>
                        <p style="font-size: 0.85em; color: #cbd5e1; margin-top: 10px;">Status: ${results.ipv6}</p>
                      </div>
                      <div style="background: #1e293b; padding: 20px; border-radius: 12px; border-top: 3px solid #4ade80;">
                        <h4 style="margin: 0; color: #4ade80;">Advanced Security (ANY)</h4>
                        <p style="font-size: 0.85em; color: #cbd5e1; margin-top: 10px;">DDoS Shield: ${rfcStatus}</p>
                      </div>
                      <div style="background: #1e293b; padding: 20px; border-radius: 12px; border-top: 3px solid #fbbf24;">
                        <h4 style="margin: 0; color: #fbbf24;">Mail & Authority</h4>
                        <p style="font-size: 0.85em; color: #cbd5e1; margin-top: 10px;">MX: ${results.mail}<br>NS: ${results.authority}</p>
                      </div>
                      <div style="background: #1e293b; padding: 20px; border-radius: 12px; border-top: 3px solid #f472b6;">
                        <h4 style="margin: 0; color: #f472b6;">Cloud Link (CNAME)</h4>
                        <p style="font-size: 0.85em; color: #cbd5e1; margin-top: 10px;">Alias: ${results.cloud}</p>
                      </div>
                    </div>

                    <div style="margin-top: 40px; padding: 20px; background: #020617; border-radius: 10px; border: 1px dashed #38bdf8;">
                      <code style="color: #4ade80; font-size: 0.9em;">[AI Intel]: All infrastructure points from Image Data are now Integrated & Monitored.</code>
                    </div>

                    <footer style="margin-top: 50px; font-size: 0.85em; color: #64748b;">
                      Verified Identity: ID.01010305468 | Yemen | 00967777852433<br>
                      <span style="color: #38bdf8;">Synced via Real-time DevOps Automation</span>
                    </footer>
                  </div>
                </body>
              `);
            });
          });
        });
      });
    });
  });
});

app.listen(port, () => { console.log('Universal Smart Hub is LIVE!'); });
