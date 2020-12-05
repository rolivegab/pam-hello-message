import ky from 'ky/umd';
import { Options } from 'ky';
import urljoin from 'url-join';

const API_URL = '/api';

const get = async (endpoint: string, options?: Options) => (
  ky.get(urljoin(API_URL, endpoint), options)
);
const post = async (endpoint: string, options?: Options) => (
  ky.post(urljoin(API_URL, endpoint), options)
);

export default {
  get,
  post,
};
