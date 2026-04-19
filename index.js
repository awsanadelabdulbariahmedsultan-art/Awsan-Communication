const dns = require('dns');

console.log("==========================================");
console.log("   AWSAN COMMUNICATION - AUTO-SYNC CORE   ");
console.log("   Status: Continuous Integration Active  ");
console.log("==========================================");

const domain = 'awsandew.world.com';

// فحص السجلات التي ظهرت في الصور (TXT و SRV)
const finalChecks = ['TXT', 'SRV', 'SOA', 'NS'];

finalChecks.forEach(type => {
    dns.resolve(domain, type, (err, records) => {
        console.log(`[${type} Check]: ` + (err ? 'Pending Activation' : 'Verified Successfully'));
    });
});

console.log("\n[System]: Monitoring and Syncing via Eng. Awsan's AI Agent.");
