const dbjs = require("deprembilgi.js")


setTimeout(async() => {
    let limit = 1
    const deprem = await dbjs.al(limit)

console.log(deprem)    
}, 100);
