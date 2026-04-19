const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - FUTURE TECH      ");
console.log("   Official Domain: awsandew.world.com   ");
console.log("   Targeting: 6G & AI Infrastructure      ");
console.log("==========================================");

// فحص سجلات IPv4 (A Records)
dns.resolve4('awsandew.world.com', (err, addresses) => {
  console.log('\n[IPv4 Status]: ' + (err ? 'Pending' : addresses.join(', ')));
});

// فحص سجلات IPv6 (AAAA Records) - بوابة الـ 6G
dns.resolve6('awsandew.world.com', (err, addresses) => {
  if (err) {
    console.log('\n[IPv6 Status]: Not Activated (Action Required for 6G)');
  } else {
    console.log('\n[IPv6 Status]: Active at ' + addresses.join(', '));
  }
});
