const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content Type", 'text');
    const message = "I Am Happy To Learn Full Stack Web Development From Pw Skills!";
    res.end(message);
});

const port = 5001;

server.listen(port, () => {
    console.log('Server is running at htttp 5001');
});