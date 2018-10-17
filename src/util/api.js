import 'whatwg-fetch';

let api;

const BASE_URL = process.env.SERVER_URL;

function getAPIConnection() {
  if (api) {
    return api;
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
