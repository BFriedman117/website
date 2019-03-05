<template>
  <div class="post">
    <Post v-if="postsLoaded"></Post>
    <div v-else>
      Hang On
    </div>
  </div>
</template>
<script>
import PostCard from './PostCard'
import Post from './Post'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostCard,
    Post
  },
  computed: {
    ...mapGetters(['postsLoaded'])
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
