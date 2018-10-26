import 'whatwg-fetch';

let api;

const ONCHAIN_URL = process.env.SERVER_URLON;
const OFFCHAIN_URL = process.env.SERVER_URLOFF;

function getAPIConnection(status) {

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
