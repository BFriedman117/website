import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const loadIndicators = {
  POSTS: 'posts',
  TAGS: 'tags'
}

const store = new Vuex.Store({
  state: {
    tags: [],
    posts: [],
    loaded: {
      tags: false,
      posts: false
    }
  },
  mutations: {
    setTags (state, tags) {
      state.tags = tags
    },
    setPosts (state, posts) {
      state.posts = posts
    },
    setLoaded (state, field) {
      state.loaded[field] = true
    }
  },
  getters: {
    getTags (state) {
      return state.tags
    }
  },
  actions: {
    fetchTags (context) {
      return api.fetchTags().then(tags => {
        context.commit('setTags', tags)
        context.commit('setLoaded', loadIndicators.TAGS)
      })
    },
    fetchPosts (context) {
      return api.fetchPosts().then(posts => {
        context.commit('setPosts', posts)
        context.commit('setLoaded', loadIndicators.POSTS)
      })
    },
    addPost (context, post) {
      return api.addPost(post).then(res => res)
    }
  }
})

export default store
