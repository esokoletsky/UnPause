/* eslint-disable no-undef */

function register(user, cb) {
  return fetch('/signup', {
    accept: "application/json",
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function login(user, cb) {
  return fetch('/login', {
    accept: "application/json",
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(user)
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}
function getVideos(cb) {
  return fetch('/youtube', {
    accept: "application/json",
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function getQuotes(cb) {
  return fetch('/quotes', {
    accept: "application/json",
    method: 'get',
    headers: {'Content-Type':'application/json'}
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { register, login, getVideos, getQuotes };
export default Client;
