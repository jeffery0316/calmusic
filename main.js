var server,
    ip   = "127.0.0.1",
    port = 13370,
    http = require('http'),
    url  = require('url'),
    net  = require('net');
var proxy = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to the cmd music mode\n');
    console.log('guest: ' + req.url + 'has come in.');
}
    );

proxy.on('connect', function (req, cltSocket, head) {
  // connect to an origin server
    var srvUrl = url.parse('http://' + req.url);
    var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function () {
        cltSocket.write('HTTP/1.1 200 Connection Established\r\n' +
                    'Proxy-agent: Node-Proxy\r\n' +
                    '\r\n');
        srvSocket.write(head);
        srvSocket.pipe(cltSocket);
        cltSocket.pipe(srvSocket);
    });
});