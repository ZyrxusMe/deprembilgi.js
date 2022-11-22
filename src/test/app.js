const dbjs = require("deprembilgi.js")

let limit = 1
// Deprem Bilgi Al
setTimeout(async() => {
    const deprem = await dbjs.al(limit)

console.log(deprem)
}, 15000);

// Deprem Bilgi Sürüm

const sürüm = dbjs.sürüm()

console.log(sürüm)
