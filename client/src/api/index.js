import axios from 'axios'

const base = 'http://localhost:3000'

const fetchTags = () => {
  return axios.get(`${base}/tags`).then(res => res.data)
}

const fetchPosts = () => {
  return axios.get(`${base}/posts`).then(res => res.data)
}

const fetchPostTags = () => {
  return axios.get(`${base}/post_tags`).then(res => res.data)
}

const addPost = (post) => {
  return axios.post(`${base}/posts`, post).then(res => res.data)
}

export default {
  fetchTags,
  addPost,
  fetchPosts,
  fetchPostTags
}
