var http = require('http');
var httpProxy = require('http-proxy');

let amsProxy = new httpProxy();
let diasProxy = new httpProxy();

try {
    createProxy();
} catch (error) {
    if (amsProxy != null)
        amsProxy.close();

    if (diasProxy != null)
        diasProxy.close();

    createProxy();
}


function createProxy() {
    console.log('started');

    // microservice access
    let amsProxy = httpProxy.createProxyServer({
        target: 'http://192.168.30.82:58181',
        ws: true,
        timeout: 999999,
        proxyTimeout: 999999
    }).listen(58081).on('proxyReq-58081', (proxyreq, req, res, options) => {
        //console.log('proxyReq-58081');
    }).on('proxyReqWs-58081', (proxyreq, req, socket, options, head) => {
        //console.log('proxyReqWs-58081');
    }).on('proxyRes', (proxyreq, req, res) => {
        //console.log('proxyRes-58081');
    }).on('error', (err, req, res, target) => {
        //console.log('error-58081');
    }).on('close', (proxyres, socket, proxyhead) => {
        //console.log('close-58081');
    }).on('end', (req, res, proxyres) => {
        //console.log('end-58081');
    });

    // microservice dia
    diasProxy = httpProxy.createProxyServer({
        target: 'http://192.168.30.84:58188',
        ws: true,
        timeout: 999999,
        proxyTimeout: 999999
    }).listen(58088).on('proxyReq-58088', (proxyreq, req, res, options) => {
        //console.log('proxyReq-58088');
    }).on('proxyReqWs-58088', (proxyreq, req, socket, options, head) => {
        //console.log('proxyReqWs-58088');
    }).on('proxyRes', (proxyreq, req, res) => {
        //console.log('proxyRes-58088');
    }).on('error', (err, req, res, target) => {
        //console.log('error-58088');
    }).on('close', (proxyres, socket, proxyhead) => {
        //console.log('close-58088');
    }).on('end', (req, res, proxyres) => {
        //console.log('end-58088');
    });;
}