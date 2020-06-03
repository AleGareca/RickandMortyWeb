import axios from 'axios';

const server = 'https://rickandmortyapi.com/api';

const request = (type, path, body) => axios
  .request({ url: `${server}${path}`, method: type, data: body })
  .then(req => req.data)


export const characters = body => request('get', '/character', body);