<template>
  <div class="postcard-container">
    <div class="postcard-image">
      An image?
    </div>
    <div class="postcard-title">
      <h1 class="postcard-header">Probably The Headline</h1>
      <h3 class="postcard-header">The sub-header I suppose</h3>
      <h4 class="postcard-header">By So and So</h4>
      <h5 class="postcard-header">1/2/13</h5>
    </div>
    <div class="post-text">

    </div>
  </div>
</template>
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
