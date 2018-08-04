const http = require('http');
http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/JSON' });
        let salida = {
            nombre: 'Diego',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //   res.write('Hola!');
        res.end();
    })
    .listen(8080);
console.log('Escuchando puerto 8080');