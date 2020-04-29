const API_HOST = 'http://localhost:3001';

const fetchResource = (resourceName,userOptions = {},  id) => {
  const defaultOptions = {
    mode: 'cors',
  };


  const defaultHeaders = {
    "Content-Type": 'application/json',
  };

  const options = {
    ...defaultOptions,
    ...userOptions,
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    }
  };

  let url = `${API_HOST}/${resourceName}`;

  if(id) {
    url = `${url}/${id}`;
  }

  if(options.body && typeof options.body === 'object'){
    options.body = JSON.stringify(options.body);
  }
  return fetch(url, options).then(responseObject => responseObject.json());
}

const getUsers = (userOptions) => {
  return fetchResource('users', userOptions);
}

const getUser = (id) => {
  return fetchResource('users', {}, id);
}

const createUser = (data) => {
  return fetchResource('users', {method: 'POST', body: data})
}

export default {fetchResource, getUsers, createUser, getUser} ;