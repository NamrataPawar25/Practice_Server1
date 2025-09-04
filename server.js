const http= require("http")
const settings= require('./config/settings')
const os= require("os")

const PORT= settings.port || 10500

const app = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"})
    res.end("Hello user")
})

console.log(os.platform());
console.log(os.homedir());

const path= require('path')
const fs= require('fs')
console.log("---------------------------------");

fs.writeFileSync('temo.txt', 'This is first line')

let dt= fs.readFileSync('temo.txt','utf-8')
console.log(dt);
console.log("---------------new data added------------------");
fs.appendFileSync('temo.txt', '\nThis is second line')
dt= fs.readFileSync('temo.txt','utf-8')
console.log(dt);

app.listen(5000, ()=>{
    console.log("Server started");
    console.log("http://localhost:5000");
})

