const server = require('./server');

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`\n*** Swag! The server is listening on port ${port}! ***\n`))