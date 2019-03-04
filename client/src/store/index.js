import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tags: [],
    loaded: {
      tags: false
    }
  },
  mutations: {
    setTags (state, tags) {
      state.tags = tags
    },
    setLoaded (state, field) {
      if (state.loaded[field]) {
        state.loaded[field] = true
      }
    }
  },
  getters: {
    getTags (state) {
      return state.tags
    }
  },
  actions: {
    fetchTags (context) {
      return api.getTags().then(tags => {
        context.commit('setTags', tags)
        context.commit('setLoaded', 'tags')
      })
    },
    addPost (context, post) {
      return api.addPost(post).then(res => {
        console.log('? ', res)
      })
    }
  }
})

export default store
