const fetch = require("node-fetch")

let version = require("../package.json")

/**
 * 
 * @returns Sürüm || null
 */

function sürüm() {
    if(version.version) {
        return version.version
    } else {
        return null
    }
}

/**
 * 
 * @param {*} limit
 * @returns {limit} kadar deprem gösterime sunuldu. 
 */
async function al(limit) {
    if(!limit) {
        return {
            status: 404,
            msg: "Limit belirtilmedi."
        }
    } 

    if(isNaN(limit)) {
        return {
            status: 404,
            msg: "Limit bir sayı değil."
        }
    }

    if(limit > 40) {
        return {
            status: 404,
            msg: "Limit 40 (kırk)'ın üzerinde olamaz!"
        }
    }

    try {
    const dbjs = await fetch(`http://152.70.188.193:25884/?limit=${limit}`)
    let api = await dbjs.json()

    return {
        status: 200,
        data: api
    }


    } catch(error) {
        console.log(`[DepremBilgi.JS] Son depremler alınırken bir hata oluştu :(`)
        return {
            status: 403,
            msg: "Hata oluştu.",
            err: error.message
        }
    }

}

module.exports = {sürüm, al}