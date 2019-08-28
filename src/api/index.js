import axios from 'axios';
import url from '../constants/URL';

export default class apiBooks {
  static getBooks() {
    return axios.get(url);
  }

  static getBook(payload) {
    return axios.get(`${url}/${payload}`);
  }

  static postBook(payload) {
    return axios.post(url, payload);
  }

  static deleteBook(payload) {
    return axios.delete(`${url}/${payload}`);
  }

  static putBook(payload) {
    return axios.put(`${url}/${payload.id}`, payload);
  }
}
