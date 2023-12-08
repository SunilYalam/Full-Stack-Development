const http = require('http');

const menProducts = ["Raj", "Trilok", "Chirag Goel", "Pandey Sir"];
const womenProducts = ["Sita", "Gita", "Geeta Kumari"];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if(req.url == '/'){
        res.statusCode = 200;
        res.end(JSON.stringify({message: 'Man and women'}));
    } else if(req.url == '/men'){
        res.statusCode = 200;
        res.end(JSON.stringify({products: menProducts.slice(0, 10)}));
    } else if(req.url == '/women'){
        res.statusCode = 200;
        res.end(JSON.stringify({products: womenProducts.slice(0, 10)}));
    }else {
        res.statusCode = 404;
        res.end(JSON.stringify({Erro: '404'}));
    }
});

const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server is running');
});