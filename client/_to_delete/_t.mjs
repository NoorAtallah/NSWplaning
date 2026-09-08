import postcss from 'postcss';
import tw from '@tailwindcss/postcss';
import fs from 'fs';
const css = fs.readFileSync('app/globals.css','utf8');
const r = await postcss([tw()]).process(css,{from:'app/globals.css'});
fs.writeFileSync('/tmp/out.css', r.css);
console.log('len', r.css.length);
for (const c of ['.bg-brand','.text-mint','.bg-ice','--color-brand']) console.log(c, r.css.includes(c));
