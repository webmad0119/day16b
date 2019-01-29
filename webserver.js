const port  = 3000

const http = require("http")

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" })
    
    if (req.url === "/") {
        res.write("<h1>Hola</h1>")
    }

    if (req.url === "/zenchy") {
        res.write("<h1>Hola zenchy!! viva el mar</h1>")
    }
    
    res.end()
})

server.listen(3000)

console.log(`Server is listening on port ${port}`)