const express = require('express');
const path = require('path');
const config = require('config');

// Initializations
const app = express();

// Settings
app.set('port', config.get('app.port') || 3000);
app.set('views', path.join(__dirname , 'views'));

// Middlewares
app.use(express.urlencoded({extended: false}));

// Global variables

// Routes
app.use('/', require('./routes/data.routes'));
app.use('/', require('./routes/users.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;