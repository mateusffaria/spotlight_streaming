import axios from 'axios'

// const Api = axios.create({baseURL: 'http://localhost:3000/api/v1'})
const Api = axios.create({baseURL: '/api/v1'}); //procura no próprio domínio aonde se encontra

export default Api;