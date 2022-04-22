require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('apprg30DdBMUs9MbE')
  .table('products');

//# Retrieve Data on airtable-------------
exports.handler = async (event, context, cb) => {
  // GET single product--------------------------
  //---------------------------------------------
  //  const method = event.httpMethod
  // const {<someData>} JSON.parse(event.body)
  //---------------------------------------------

  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id:${id}`,
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      };
    }
  }
  // GET all product--------------------------
  try {
    const { records } = await airtable.list();
    const products = records.map((product) => {
      // eslint-disable-next-line no-shadow
      const { id } = product;
      const { name, image, price } = product.fields;
      const { url } = image[0];
      return {
        id,
        name,
        url,
        price,
      };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};
