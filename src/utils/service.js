import queryString from 'query-string';
import fetch from 'isomorphic-fetch';
import formData from 'form-urlencoded';

function handleResponse(promise, url, method) {
  return promise
    .then(res => res.json())
    .then(({code, data, message}) => {
      if (code === 0) {
        return data;
      }
      throw Object({code, message, url, method});
    });
}

export default {
  get(api, params) {
    const url = params
      ? `${api}?${queryString.stringify(params)}`
      : api;

    return handleResponse(
      fetch(url, {
        credentials: 'include'
      }),
      url,
      'get'
    );
  },

  post(api, params) {
    return handleResponse(
      fetch(api, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData(params),
      }),
      api,
      'post'
    );
  },

  put(api, params) {
    return handleResponse(
      fetch(api, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData(params),
      }),
      api,
      'put'
    );
  },

  doDelete(api, params) {
    const url = params
      ? `${api}?${queryString.stringify(params)}`
      : api;
    return handleResponse(
      fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData(params),
      }),
      api,
      'put'
    );
  },

  postImage(api, param) {
    const data = new FormData();
    data.append('file', param);
    return handleResponse(
      fetch(api, {
        method: 'POST',
        credentials: 'include',
        body: data,
      }),
      api,
      'post'
    );
  },

  genUrl(api, params) {
    return params ?
      `${api}?${queryString.stringify(params)}`
      : api;
  },
};
