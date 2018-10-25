import 'whatwg-fetch';

let api;

let ONCHAIN_URL = process.env.SERVER_URL_ON;
let OFFCHAIN_URL = process.env.SERVER_URL_OFF;

function getAPIConnection(status) {

  if (api) {
    return api;
  }


  let BASE_URL;
  if (status === 'offchain') {
    BASE_URL = OFFCHAIN_URL;
  } else if (status === 'onchain') {
    BASE_URL = ONCHAIN_URL;
  }

  api = {
    get: (endpoint) => {
      return fetch(BASE_URL + endpoint, {
        method: 'GET'
      })
    },
    post: (endpoint, data) => {
      return fetch(BASE_URL + endpoint, {
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
