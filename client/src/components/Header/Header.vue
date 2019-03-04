<template>
  <div class="header">
    <Logo/>
    <div class="nav-container">
      <div class="nav">
        <div v-for="(tag, index) in getTags" :key="index" class="nav-item">
          <a>{{ tag.type.toUpperCase() }}</a>
        </div>
      </div>
    </div>
    <div class="header-end-container">
      <HeaderEnd/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import HeaderEnd from './HeaderEnd'

export default {
  components: {
    Logo,
    HeaderEnd
  },
  computed: {
    ...mapGetters(['getTags'])
  }
}
</script>
<style>
  .header {
    display: flex;
    flex-direction: row;
    padding: 15px 30px;
    position: absolute;
  }

  .nav {
    display: flex;
    flex-direction: row;
    font-size: 30px;
    margin-left: 30px;
  }

  .nav-item {
    padding: 15px;
    font-weight: bold;
    font-family: 'Lucida Grande';
    border-bottom: 4px solid black;
  }

  .nav-item:hover {
    border-bottom: none;
    border-top: 4px solid black;
    border-left: 4px solid black;
    border-right: 4px solid black;
  }

  .bottom-border {
    border-bottom: 4px solid black;
    margin-left: 45px;
    width: 200px;
  }

  .header-end-container {
    padding-top: 20px;
  }
</style>
