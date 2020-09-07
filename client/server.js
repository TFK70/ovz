const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('../ssl/private.key');
const certificate = fs.readFileSync('../ssl/main.crt');

const credentials = {key: privateKey, cert: certificate};
const express = require('express');
const secure = require('express-force-https');
const app = express();
const app2 = express();

app2.use(secure);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpServer = http.createServer(app2);
const httpsServer = https.createServer(credentials,app);

httpServer.listen(80);
httpsServer.listen(443);


