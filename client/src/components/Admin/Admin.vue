<template>
  <div>
    <div>
      <h1>This page is for Admin Only! If you are not the creator of this website, kindly leave! #websecurity #buildawall #cyber #getout!</h1>
    </div>
    <div>
      <VueEditor />
    </div>
  </div>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {
      VueEditor
    },
    data () {
      return {
        text: ''
      }
    }
  }
</script>
<style>
  .text-box {
    width: 500px;
    height: 200px;
    margin: auto;
  }

  .text-area {
    min-width: 100%;
    min-height: 100%;
    font-size: 14px;
  }

  .text-control {
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 30px;
  }
</style>
