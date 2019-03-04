<template>
  <!-- Post Editor -->
  <div class="editor-container">

    <div class="form-group">
      <label>
        <strong>
          Headline:
        </strong>
      </label>
      <input v-model="headline" class="form-input"/>
    </div>

    <div class="form-group">
      <label>
        <strong>
          Subheader:
        </strong>
      </label>
      <input v-model="subheader" class="form-input"/>
    </div>

    <div class="form-group">
      <label>
        <strong>
          Content:
        </strong>
      </label>
      <VueEditor v-model="body" style="width: 100%;"/>
    </div>

    <div class="form-group">
      <label>
        <strong>
          Category:
        </strong>
      </label>
      <div style="width: 400px;">
        <Multiselect v-model="contentTag" :options="getTags" label="type"></Multiselect>
      </div>
    </div>
    <div>
      <button @click="savePost" :disabled="!contentTag">Save Post</button>
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
    clearContent () {
      let initialState = {
        headline: '',
        subheader: '',
        body: '',
        contentTag: null
      }
      for (let k in initialState) {
        this[k] = initialState[k]
      }
    },
    savePost () {
      let post = {
        post: {
          headline: this.headline,
          subheader: this.subheader,
          body: this.body
        },
        contentTag: this.contentTag
      }
      this.$store.dispatch('addPost', post).then(res => {
        this.clearContent()
      })
    }
  },
  computed: {
    ...mapGetters(['getTags'])
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }

  .form-input {
    width: 400px;
    font-size: 24px;
  }
</style>
