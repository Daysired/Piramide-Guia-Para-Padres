import axios from 'axios';

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://piramide-guia-para-padres.herokuapp.com/' : 'quirky-newton-e62d77.netlify.app' 

const api = axios.create({
  baseURL: baseUrl
})

export default api;
