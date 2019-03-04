<template>
  <div>
    <div>
      <h1>This page is for Admin Only! If you are not the creator of this website, kindly leave! #websecurity #buildawall #cyber #getout!</h1>
    </div>

    <!-- Post Editor -->
    <div style="padding: 30px;">
      <div>
        <label>Headline</label>
        <input v-model="headline"/>
      </div>
      <div>
        <label>Subheader</label>
        <input v-model="subheader"/>
      </div>
      <div>
        <label>Content</label>
        <VueEditor v-model="body"/>
      </div>
      <div style="max-width: 400px;">
        <Multiselect v-model="contentTag" :options="getTags" label="type"></Multiselect>
      </div>
      <div>
        <button @click="savePost" :disabled="!contentTag">Save Post</button>
      </div>
    </div>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import { Multiselect } from 'vue-Multiselect'
import { mapGetters } from 'vuex'

export default {
  components: {
    VueEditor,
    Multiselect
  },
  data () {
    return {
      headline: '',
      subheader: '',
      body: '',
      contentTag: null
    }
  },
  methods: {
    savePost () {
      let post = {
        post: {
          headline: this.headline,
          subheader: this.subheader,
          body: this.body
        },
        contentTag: this.contentTag
      }
      this.$store.dispatch('addPost', post)
    }
  },
  computed: {
    ...mapGetters(['getTags'])
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
