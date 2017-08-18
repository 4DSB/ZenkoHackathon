const http = require('http');
const aws4 = require('aws4');

// Input AWS access key, secret key, and session token.
const accessKeyId = 'accessKey1';
const secretAccessKey = 'verySecretKey1';
const token = '';
const bucketName = 'utapi-bucket';
// Get the start and end times for a range of one month.
const startTime = new Date(2017, 7, 1, 0, 0, 0, 0).getTime();
const endTime = new Date(2017, 9, 1, 0, 0, 0, 0).getTime() - 1;
const requestBody = JSON.stringify({
    buckets: [bucketName],
    timeRange: [startTime, endTime],
});
const header = {
    host: 'localhost',
    port: 8100,
    method: 'POST',
    service: 's3',
    path: '/buckets?Action=ListMetrics',
    signQuery: false,
    body: requestBody,
};
const credentials = { accessKeyId, secretAccessKey, token };
const options = aws4.sign(header, credentials);
const request = http.request(options, response => {
    const body = [];
    response.on('data', chunk => body.push(chunk));
    response.on('end', () => {
    const response = `${body.join('')}\n`;
    let storageUtilized;
    try {
        storageUtilized = JSON.parse(response)[0].storageUtilized;
    } catch (e) {
        process.stdout.write(`Could not parse JSON: ${e}\n`);
    }
    process.stdout.write(`[${storageUtilized[1]}]\n`);
});
});
request.on('error', e => process.stdout.write(`error: ${e.message}\n`));
request.write(requestBody);
request.end();
