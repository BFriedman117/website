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
    ...mapGetters(['getPostTags', 'getPosts', 'getTags']),
    computedPosts () {
      // Yeah the filtering should probably only happen once on the back end when posts are loaded
      return this.getPosts
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
