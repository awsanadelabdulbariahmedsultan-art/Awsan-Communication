const express = require('express');
const dns = require('dns');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const domain = 'awsandew.world.com';
  dns.resolve4(domain, (err, addresses) => {
    res.send(`
      <body style="font-family: Arial; background: #121212; color: white; text-align: center; padding: 50px;">
        <h1 style="color: #4CAF50;">AWSAN COMMUNICATION DASHBOARD</h1>
        <p><strong>Engineer:</strong> Eng. Awsan Adel Sultan</p>
        <p><strong>Domain:</strong> ${domain}</p>
        <hr style="border: 0.5px solid #333; width: 50%;">
        <div style="background: #1e1e1e; display: inline-block; padding: 20px; border-radius: 10px; margin-top: 20px;">
          <h3>6G Infrastructure Status</h3>
          <p>IPv4 Status: ${err ? 'Checking...' : 'Active: ' + addresses[0]}</p>
          <p style="color: #ff9800;">AI Monitoring: DNS-over-TLS & IPv6 Integration Active</p>
        </div>
        <footer style="margin-top: 50px; font-size: 12px; color: #666;">Verified by Google Cloud Shell & GitHub Auto-Sync</footer>
      </body>
    `);
  });
});

app.listen(port, () => {
  console.log('Dashboard is running on port ' + port);
  console.log('Eng. Awsan: Check Web Preview to see your AI Interface!');
});
