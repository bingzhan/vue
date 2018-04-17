<template>
  <div class="">
    <h2>Ecosystem  {{title}} {{str}}</h2>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="check"
    >
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    {{normalizedSize}} <br/> {{name}} <br/> {{age}}
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Header',
  methods: {
    check: function (event) {
      this.$emit('check', event.target.checked);
    }
  },
  // props: ['title', 'str', 'count'],
  props: {
    checked: Boolean,
    title: String,
    str: [String, Number],
    count: {
      type: Number,
      required: true
    }
  },
  computed: {
    normalizedSize: function () {
      return this.title.trim().toLowerCase()
    },
    ...mapState(['name', 'age'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
