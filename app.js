const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('here is a dick go fuck yourself with it')
    }
    res.end(`
    <h1>ooops fuck you</h1>
<p>guess what asshole ?? fuck you</p>
<a href="/"> fuck off to home</a>
    `)
}) 


server.listen(5000)