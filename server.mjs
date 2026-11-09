import http from "node:http";
import {readFile,stat} from "node:fs/promises";
import path from "node:path";
const root=process.cwd(),port=Number(process.env.PORT||4182),types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".json":"application/json"};
http.createServer(async(req,res)=>{try{const pathname=decodeURIComponent(new URL(req.url,"http://localhost").pathname),file=path.resolve(root,"."+pathname);if(!file.startsWith(root+path.sep)&&file!==root)throw new Error("Invalid path");const info=await stat(file),target=info.isDirectory()?path.join(file,"index.html"):file;res.writeHead(200,{"content-type":types[path.extname(target)]||"application/octet-stream","cache-control":"no-store"});res.end(await readFile(target));}catch{res.writeHead(404,{"content-type":"text/plain"});res.end("Not found");}}).listen(port,()=>console.log(`Campaign Link Studio running at http://localhost:${port}`));
