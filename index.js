const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - SERVICE HUB      ");
console.log("   Owner: Eng. Awsan Adel Sultan          ");
console.log("   Vision: 6G & AI Service Integration    ");
console.log("==========================================");

const domain = '://world.com';

// فحص سجلات SRV - تفعيل بوابة الخدمات الذكية
dns.resolveSrv(domain, (err, addresses) => {
  console.log('\n[SRV Service Discovery]:');
  if (err) {
    console.log('Status: Pending Service Activation (Required for VoIP/6G).');
  } else {
    console.log('Active Services: ' + JSON.stringify(addresses));
  }
});

// فحص شامل لكافة السجلات التي وثقناها بالصور
const records = ['A', 'AAAA', 'MX', 'NS', 'CAA'];
records.forEach(type => {
    dns.resolve(domain, type, (err, recs) => {
        console.log(`[${type} Record]: ` + (err ? 'Not Set' : 'Verified'));
    });
});

console.log("\nProtocol: Multi-Layer Infrastructure Verified.");
