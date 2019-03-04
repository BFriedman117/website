import axios from 'axios'

const base = 'http://localhost:3000'

const getTags = () => {
  return axios.get(`${base}/tags`).then(res => res.data)
}

export default {
  getTags
}
