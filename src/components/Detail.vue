<template>
  <div id="detail">
    <h2>Detail {{username}} {{$route.params.id}}</h2>
    <p>
      <router-link to="/detail/12/profile">Go to DetailProfile</router-link>
      <router-link to="/detail/12/posts">Go to DetailPosts</router-link>
      <b @click="back" href="#">返回</b>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  computed: {
    username() {
      console.log(123, this.$route);
      return window.history.length
    }
  },
  methods: {
    back: function() {
      this.$router.push({path: `/detail/12`});
    }
  }
}
</script>
