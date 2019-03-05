<template>
  <div class="post-container">
    <div class="post-header">
      <h1 class="post-header-text">{{ post ? post.headline : 'Hang On' }}</h1>
      <h3 class="post-header-text">{{ post ? post.subheader : 'Hang On' }}</h3>
    </div>
    <div class="post">
      <p v-html="post.body"></p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      post: {}
    }
  },
  computed: {
    ...mapGetters(['getPosts'])
  },
  created () {
    this.post = this.getPosts[2]
  }
}
</script>
<style scoped>
p {
  text-align: left;
}
.post-container {
  padding: 30px 200px;
}
.post-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.post-header-text {
  margin: 5px;
}

.align-text-left {
  text-align: left;
}
</style>
