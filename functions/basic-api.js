const items = require('../src/api/data');
/**
 ** const items = [{ name: 'susan' }, { name: 'john Doe' }]; Image in data storage
 ** Airtable The API is limited to 5 requests per second per base. If you exceed this rate,
 **  You will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.
 ** Serverless data in Netlify Build by netlify.toml in this config
 ** Use API in WEBSITE.COM//api/3-z-complete | Serverless Folder Build | Setting Netlify Function
 */
exports.handler = async (event, context) => ({
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: 200,
  body: JSON.stringify(items),
});
