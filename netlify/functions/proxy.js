const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const url = event.queryStringParameters.url;
    if (!url) {
        return {
            statusCode: 400,
            body: 'URL is required',
        };
    }

    try {
        const response = await fetch(url);
        const body = await response.text();
        return {
            statusCode: 200,
            body,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error fetching the URL',
        };
    }
};
