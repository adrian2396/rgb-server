const mongoose = require('mongoose');
const config = require('config');

const MONGODB_URI = 'mongodb://' + config.get('mongodb.host') + '/' + config.get('mongodb.database');

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err))