# deprembilgi.js

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
