<template>
  <div class="postcard-container">
    <div class="postcard-image">
      An image?
    </div>
    <div class="postcard-title">
      <h1 class="postcard-header">{{ post.headline }}</h1>
      <h3 class="postcard-header">{{ post.subheader }}</h3>
      <h4 class="postcard-header">By Staff</h4>
      <h5 class="postcard-header">{{ postDate }}</h5>
    </div>
    <div class="post-text">

    </div>
  </div>
</template>
<script>
export default {
  props: ['post'],
  computed: {
    postDate () {
      return this.post.createdAt.slice(0, this.post.createdAt.indexOf('T'))
    }
  }
}
</script>
<style>
.postcard-container {
  margin: 15px 40px;
  padding: 15px 30px;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  width: 800px;
}

.postcard-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.postcard-image {
  margin-right: 50px;
}

.postcard-header {
  margin: 0px;
}

.postcard-subheader {
  margin: 10px;
}
</style>
