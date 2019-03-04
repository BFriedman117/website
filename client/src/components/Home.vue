<template>
  <div class="app-container">
    <Header></Header>
    <PostList></PostList>
  </div>
</template>
<script>
import Header from './Header/Header'
import PostList from './Posts/PostList'

export default {
  components: {
    Header,
    PostList
  }
}
</script>
<style>
  .app-container {
    display: flex;
    flex-direction: column;
  }
</style>
