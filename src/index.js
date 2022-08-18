const app  = require('./server');
const config = require('config');

require('./database');

app.listen(config.get('app.port'), () => {
    console.log(`Server on port ${config.get('app.port')}`);
});