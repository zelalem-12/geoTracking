import qs from 'qs';
import { encode } from 'base-64';

const apiCall = async (method, url, credential, queryParams = undefined) => {
  let theUrl = url;
  const headers = {
    'Content-Type': 'application/json',
  };
  let queryString = null;
  if (queryParams && queryParams !== {}) {
    queryString = qs.stringify(queryParams);
    theUrl = `${url}?${queryString}`;
  }
  if (credential && Object.keys(credential).length === 2) {
    headers.Authorization = `Basic ${encode(
      `${credential.username}:${credential.password}`,
    )}`;
  }

  try {
    const response = await fetch(theUrl, {
      method,
      headers,
    });
    const locatoin_data = await response.json();
    return locatoin_data;
  } catch (error) {
    throw error;
  }
};

export { apiCall };
