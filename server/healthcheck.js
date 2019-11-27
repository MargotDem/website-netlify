const http = require('http');

const options = {
    host : '0.0.0.0',
    port : process.env.PORT || 8443,
    path: '/.well-known/apollo/server-health',
    timeout : 2000
};

const request = http.request(options, ({statusCode}) => process.exit(statusCode === 200 ? 0 : 1));

request.on('error', () => {
    process.exit(1);
});

request.end();