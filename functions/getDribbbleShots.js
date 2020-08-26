const fetch = require('node-fetch').default;

const ACCESS_TOKEN = process.env.DRIBBBLE_ACCESS_TOKEN;
const API_ENDPOINT = `https://api.dribbble.com/v2/user/shots?access_token=${ACCESS_TOKEN}`;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data =>
      data.map(shot => ({
        description: shot.description.replace(/(<([^>]+)>)/gi, ''),
        image: shot.images.normal,
        link: shot.html_url
      }))
    )
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
