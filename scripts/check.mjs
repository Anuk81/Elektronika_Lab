import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';
const files=fs.readdirSync('dist').filter(f=>/\.(mjs|js)$/.test(f));for(const file of files){const r=spawnSync(process.execPath,['--check',path.join('dist',file)],{encoding:'utf8'});if(r.status!==0)throw Error(r.stderr);}
const html=fs.readFileSync('dist/index.html','utf8');for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(/^(https?:|data:)/.test(m[1]))continue;const file=m[1].split('?')[0];if(!fs.existsSync(path.join('dist',file)))throw Error('Missing entry asset '+file);}
console.log('PASS: '+files.length+' modules and entry assets.');
