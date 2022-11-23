# deprembilgi.js

<div>
    <a href="https://www.npmjs.com/package/deprembilgi.js"><img src="https://img.shields.io/npm/v/deprembilgi.js.svg?maxAge=3600" alt="sürüm" /></a>
        </div>
        <div>		<a href="https://www.npmjs.com/package/deprembilgi.js"><img src="https://img.shields.io/npm/dt/deprembilgi.js.svg?maxAge=3600" alt="sürüm" /></a>
</div>

# Bilgi
> deprembilgi.js sayesinde belirttiginiz limite kadarki depremleri görüntüleyebilirsiniz!<br>

# Modülü İndir
```js
npm install deprembilgi.js
yarn add deprembilgi.js
```

## Örnek Kullanım
```js

const dbjs = require("deprembilgi.js")

let limit = 1
    const deprem = await dbjs.al(limit)

console.log(deprem)

```

# Sınırlamalar/Limitler
> Maximum 40 Deprem Görüntüleyebilirsiniz.
