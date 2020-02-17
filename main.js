var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer({
    target: 'http://192.168.30.82:58181',
    ws: true,
    timeout:999999,
    proxyTimeout:999999
}).listen(58081); 

httpProxy.createProxyServer({
    target: 'http://192.168.30.84:58188',
    ws: true,
    timeout:999999,
    proxyTimeout:999999
}).listen(58088); 

