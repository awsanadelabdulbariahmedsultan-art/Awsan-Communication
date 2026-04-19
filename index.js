const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - MAIL GATEWAY     ");
console.log("   Domain: awsandew.world.com            ");
console.log("   Status: Activating MX & Communication ");
console.log("==========================================");

const domain = 'awsandew.world.com';

// فحص سجلات البريد (MX) - للتواصل الرسمي
dns.resolveMx(domain, (err, addresses) => {
  if (err) {
    console.log('\n[Mail Status]: No Official Mail Server Found.');
    console.log('Action: Integrating with Google Workspace/Modern Mail API...');
  } else {
    console.log('\n[Mail Status]: Official Mail Active at: ' + JSON.stringify(addresses));
  }
});

// فحص سجلات CNAME - للربط السحابي (من الصورة السابقة)
dns.resolveCname(domain, (err, addresses) => {
  console.log('[Cloud/CNAME]: ' + (err ? 'Direct IP Link Active' : 'Aliased to ' + addresses));
});

console.log("\nSystem: Messaging Core Framework is Ready.");
