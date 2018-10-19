import 'whatwg-fetch';

let api;

const ONCHAIN_URL = process.env.SERVER_URL_ON;
const OFFCHAIN_URL = process.env.SERVER_URL_OFF;

function getAPIConnection(status) {
  if (api) {
    return api;
  }

  let API_URL;
  if (status.toLowerCase() === 'offchain') {
    API_URL = OFFCHAIN_URL;
  } else if (status.toLowerCase() === 'onchain') {
    API_URL = ONCHAIN_URL;
  }

  api = {
    get: (endpoint) => {
      return fetch(API_URL + endpoint, {
        method: 'GET'
      })
    },
    post: (endpoint, data) => {
      return fetch(API_URL + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
  }


  return api;
}

export default getAPIConnection;
