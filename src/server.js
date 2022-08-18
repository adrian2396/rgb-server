const express = require('express');
const path = require('path');
const config = require('config');
const http = require("http");
const WebSocket = require("ws");

// Initializations
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Settings
app.set('port', config.get('app.port') || 3000);
app.set('views', path.join(__dirname , 'views'));

// Middlewares
app.use(express.urlencoded({extended: false}));

// Global variables

// Routes
app.use('/', require('./routes/data.routes'));
app.use('/', require('./routes/users.routes'));

// Web Socket
wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message, isBinary) {
    console.log(message.toString(), isBinary);
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
});

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;