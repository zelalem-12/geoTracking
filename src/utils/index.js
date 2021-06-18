import qs from 'qs';
import { encode } from 'base-64';

const apiCall = async (
  method,
  url,
  credential,
  queryParams = null,
  contentType = 'application/json',
) => {
  let theUrl = url;
  const headers = {
    'Content-Type': contentType,
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
    if (response.status === 200) {
      const locatoin_data = await response.json();
      return locatoin_data;
    } else {
      console.log({ response });
    }
  } catch (error) {
    throw error;
  }
};

export { apiCall };
