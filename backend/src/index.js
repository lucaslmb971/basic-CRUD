require('dotenv').config()

const app = require('./app');
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('server on 4000');
}

main()