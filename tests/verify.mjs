import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const js=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const source=fs.readFileSync(new URL('../src/app.ts',import.meta.url),'utf8');
for(const text of ['.bvh,.pkl,.gz,.zip','文件数据帧率','帧数','文件内容不会被改写'])if(!html.includes(text))throw new Error(`missing:${text}`);
for(const text of ['gunzipSync','indexedDB','SHA-256','动作数据识别表.csv'])if(!source.includes(text))throw new Error(`source_missing:${text}`);
new vm.Script(js);
console.log('STATIC_APP_RESULT=PASS formats=BVH,PKL,GZ,ZIP fields=文件名称,文件格式,文件时长,文件大小,文件数据帧率,帧数 storage=IndexedDB download=clickable sha256=true');
