<template>
  <div>
    <div class="post-list" v-if="postsLoaded">
      <PostCard v-for="(post, index) in getPosts" :post="post" :key="index"></PostCard>
    </div>
    <div v-else>
      <h1>Hold Up</h1>
    </div>
  </div>
</template>
<script>
import PostCard from './PostCard'
import Post from './Post'
import { mapGetters } from 'vuex'

export default {
  props: ['posts'],
  components: {
    PostCard,
    Post
  },
  computed: {
    ...mapGetters(['postsLoaded', 'getPosts'])
  }
}
</script>
<style>
.post-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post {}
</style>
