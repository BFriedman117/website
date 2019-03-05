<template>
  <div class="post-container">
    <div class="post-header">
      <h1 class="post-header header">Testing How Long a Headline Can Get Before It Starts To Cause Problems With The Styling</h1>
      <h3 class="post-header subheader">{{ post ? post.subheader : 'Hang On' }}</h3>
    </div>
    <div class="post">
      <article class="post-body"  v-html="post.body"></article>
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
.post-body {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  max-width: 1020px;
  padding: 5px;
}
.post-container {
  padding: 30px 200px;
}
.post-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.post-header  {
  margin: 5px;
  padding: 0px;
  text-align: left;
}

.header {
  font-size: 3.75rem;
}

.subheader {
  font-size: 1.75rem;
}

.align-text-left {
  text-align: left;
}
</style>
