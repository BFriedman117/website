<template>
  <div class="app-container">
    <Header></Header>
    <PostList :posts="computedPosts"></PostList>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Header from './Header/Header'
import PostList from './Posts/PostList'

export default {
  components: {
    Header,
    PostList
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['getPostTags', 'getPosts', 'getTags', 'getTagTypes', 'getPostsByTag']),
    computedPosts () {
      let route = this.$route.params.tagType
      if (route) {
        let tagType = this.getTagTypes[route]
        if (tagType) {
          return this.getPostsByTag(this.getTagTypes[route])
        } else {
          return this.getPosts
        }
      } else {
        return this.getPosts
      }
    }
  }
}
</script>
<style>
  .app-container {
    display: flex;
    flex-direction: column;
  }
</style>
