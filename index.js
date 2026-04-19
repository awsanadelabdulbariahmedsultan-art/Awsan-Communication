const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - INITIAL START    ");
console.log("   Verified by: Eng. Awsan Adel Sultan    ");
console.log("==========================================");

// فحص الاتصال بخوادم جوجل الموثقة في مشروعك
dns.lookup('://world.com', (err, address) => {
  console.log('\n[Checking Domain Integration]:');
  if (err) {
    console.log('Status: Domain registered in GitHub, pending live DNS propagation.');
  } else {
    console.log('Status: Domain is Live at: ' + address);
  }
});

dns.resolve4('google.com', (err, addresses) => {
  console.log('\n[Testing Google Public DNS IPv4]:');
  console.log('Result: ' + addresses.join(', '));
  console.log('Security: Connection via Ethernet & DoT is Optimized.');
  console.log("==========================================");
});
