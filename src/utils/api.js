import axios from 'axios';
import Config from "config";

const defaultHeader = {
  "Accept": 'application/json',
  'Content-Type': 'application/json',
};
const instance = axios.create({
  // timeout: 10000,
  headers: defaultHeader,
  withCredentials: true,
  baseURL: Config.baseURL,
});

export default {
  get(options) {
    return new Promise((resolve, reject) => {
      instance.get(options.url, {
          params: options.params
        }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  },
  post(options) {
    return new Promise((resolve, reject) => {
      instance.post(options.url, options.data).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
    })
  }
}