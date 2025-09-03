const os= require("os")


console.log(os.platform());


const http= require("http")

const app = http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"})
    res.end("Hello user")
})

app.listen(5000, ()=>{
    console.log("Server started");
    console.log("http://localhost:5000");
})

