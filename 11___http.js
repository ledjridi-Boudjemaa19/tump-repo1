const http =  require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to home page')
    }
    if(req.url==='/about'){
        res.end('welcome to about page  ')

    }
    res.end(`<h1>Oopps</h1>
        <p>we cant seem to find the page you looking for </p>
        <a href='/'>back to home </a>
        `)

    
})

server.listen(5000);