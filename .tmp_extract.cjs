const fs = require('fs');
const buf = fs.readFileSync('.tmp_pen.html', 'utf8');
const marker = '__item&quot;:&quot;';
const idx = buf.indexOf(marker);
const start = idx + marker.length;
let i = start, raw = '';
while (i < buf.length) {
  if (buf.substring(i, i + 6) === '&quot;') {
    if (i > 0 && buf[i - 1] === '\') { raw += '"'; i += 6; continue; }
    break;
  }
  if (buf.substring(i, i + 5) === '&amp;') { raw += '&'; i += 5; continue; }
  if (buf.substring(i, i + 5) === '&#39;') { raw += "'"; i += 5; continue; }
  if (buf[i] === '\' && buf.substring(i + 1, i + 7) === '&quot;') { i++; continue; }
  raw += buf[i]; i++;
}
const data = JSON.parse(raw);
console.log('html_pre_processor:', data.html_pre_processor);
console.log('css_pre_processor:', data.css_pre_processor);
console.log('js_pre_processor:', data.js_pre_processor);
console.log('resources:', JSON.stringify(data.resources));
console.log('---HTML---\n' + data.html);
console.log('---CSS---\n' + data.css);
console.log('---JS---\n' + data.js);
