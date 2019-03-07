import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

const loadIndicators = {
  POSTS: 'posts',
  TAGS: 'tags',
  POSTTAGS: 'postTags'
}

const store = new Vuex.Store({
  state: {
    tags: [],
    posts: [],
    organizedPosts: {},
    postTags: [],
    loaded: {
      tags: false,
      posts: false,
      postTags: false
    }
  },
  mutations: {
    setTags (state, tags) {
      state.tags = tags
    },
    setPostTags (state, postTags) {
      state.postTags = postTags
    },
    setPosts (state, posts) {
      state.posts = posts
    },
    setLoaded (state, field) {
      state.loaded[field] = true
    },
    setOrganizedPosts (state, posts) {
      state.organizedPosts = posts
    }
  },
  getters: {
    getTags (state) {
      let tags = {}
      state.tags.forEach(tag => {
        tags[tag.id] = tag
      })
      return tags
    },
    getPosts (state) {
      // Map an array to an object where we can use the key for faster reference
      let posts = {}
      state.posts.forEach(post => {
        posts[post.id] = post
      })
      return posts
    },
    getPostTags (state) {
      // Lets make this a little easier to cross reference by object-ifying the data
      let tags = {}
      state.postTags.forEach(tag => {
        tags[tag.PostId] = tag.TagId
      })
      return tags
    },
    tagsLoaded (state) {
      return state.loaded.tags
    },
    postsLoaded (state) {
      return state.loaded.posts
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
    fetchPostTags (context) {
      return api.fetchPostTags().then(postTags => {
        context.commit('setPostTags', postTags)
        context.commit('setLoaded', loadIndicators.POSTTAGS)
      })
    },
    loadInitialData (context) {
      // To Be Tested Later
      return Promise.all([
        context.dispatch('fetchTags'),
        context.dispatch('fetchPosts'),
        context.dispatch('fetchPostTags')
      ]).then(() => {
        context.dispatch('organizePosts')
      })
    },
    addPost (context, post) {
      return api.addPost(post).then(res => res)
    },
    organizePosts (context, getters) {
      let obj = {}
      for (let k in context.getters.getPostTags) {
        let postTag = context.getters.getPostTags[k]
        if (!obj[postTag]) obj[postTag] = []
        obj[postTag].push(k)
      }
      console.log('about to commit? ', obj)
      context.commit('setOrganizedPosts', obj)
    }
  }
})

export default store
