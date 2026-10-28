const fs = require('fs');
const buf = fs.readFileSync('.tmp_pen.html','utf8');
const marker = '__item"":"';
const idx = buf.indexOf(marker);
console.log(idx);
