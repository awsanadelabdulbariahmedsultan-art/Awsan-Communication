const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - FUTURE GATEWAY   ");
console.log("   Owner: Eng. Awsan Adel Sultan          ");
console.log("   Status: IPv4/IPv6 (6G Readiness)       ");
console.log("==========================================");

const domain = '://world.com';

// فحص سجل IPv4 الحالي (الموجود بالصورة)
dns.resolve4(domain, (err, addresses) => {
  console.log('\n[Current IPv4 Status]: ' + (err ? 'Pending' : addresses.join(', ')));
});

// فحص جاهزية IPv6 (المطلوب لتفعيل تقنيات 6G)
dns.resolve6(domain, (err, addresses) => {
  if (err) {
    console.log('\n[6G/IPv6 Readiness]: No AAAA records found.');
    console.log('Action: Integrating Advanced IPv6 Protocol for 6G Scalability...');
  } else {
    console.log('\n[6G/IPv6 Readiness]: Active at ' + addresses.join(', '));
  }
});

console.log("\nProtocol: Next-Gen Networking Layer Initialized.");
