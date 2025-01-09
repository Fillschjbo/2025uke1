import http from "http";

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.appendHeader("Access-Control-Allow-Headers", "Content-Type")    

    if(req.method === "GET") {
        switch(req.url){
            case "/test":
                res.end ("this is test path");
                break;
            case "/about":
                res.end ("this is about")
                break;
            case "/json":
                res.setHeader("Content-Type", "application/json")
                res.end(JSON.stringify({first: "object"}))
                break;
            default:
                res.end("hello world")
                break;
        }
    }else if(req.method === "POST"){
        let body = "";
         req.on("data", (chunk) =>{
            body += chunk;
             console.log(chunk)
         })

        req.on("end", () => {
            const data = JSON.parse(body);
            data.test="data from backend";
            res.end(JSON.stringify(data))
            res.setHeader("content-type", "application/json")
            console.log(data)
        })

    }else if(req.method === "PUT"){
           res.appendHeader("Access-Control-Allow-Methods", "PUT");
           res.end("this is put");
    }else{
        res.end ("something went wrong")
    }

})

server.listen(port, ()=> {
    console.log("server started" , port)
})