const http = require('http')
const fs = require('fs')

const HOST = 'localhost';
const PORT = 8000;
var count = 0

const requestHandler = (req, res) => {
    switch (req.url) {
        case '/image': {
            const image = fs.readFileSync(`${__dirname}/A-Cat.jpg`);
            res.setHeader('content-type', 'image/jpg');
            res.end(image);
            break;
        }
        case '/html': {
            const html = `
                <html>
                <head>
                    <title>Server is working</title>
                </head>
                <body>
                    <h1>Hello from server</h1>
                    <h2>Current time: ${new Date().toLocaleString()}</h2>
                </body>                
                </html>
            `;
            res.setHeader('content-type', 'text/html');
            res.end(html);
            break;
        }
        case '/count': {
            count += 1;
            const html = `
                <html>
                <head>
                    <title>Server is working</title>
                </head>
                <body>
                    <h1>Hello from server</h1>
                    <h2>Current time: ${new Date().toLocaleString()}</h2>
                    <h3>This was requested ${count} times</h3>
                </body>                
                </html>
            `;
            res.setHeader('content-type', 'text/html');
            res.end(html);
            break;
        }
        default: {
            res.setHeader('content-type', 'text/plain');
            res.end('hello from server');
        }
    }

}

const server = http.createServer(requestHandler)
server.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})