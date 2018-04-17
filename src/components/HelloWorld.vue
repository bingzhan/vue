<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <Header title="我的 Vue 旅程" :str="msg" :count="2" :checked="checked" @check="other" />
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      checked: false
    }
  },
  methods: {
    other: function(e) {
      console.log(e);
      this.checked = e;
		}
  },
  components: {
    Header
  },
  beforeCreate: function() {
    console.group('beforeCreate 创建前状态===============》');
    console.log("%c%s", "color:blue" , "el     : " + this.$el); //undefined
    console.log("%c%s", "color:blue","data   : " + this.$data); //undefined 
    console.log("%c%s", "color:blue","checked: " + this.checked)//undefined 
  },
  created: function () {
    console.group('created 创建完毕状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el); //undefined
    console.log("%c%s", "color:blue","data   : " + this.$data); //已被初始化 
    console.log("%c%s", "color:blue","checked: " + this.checked); //已被初始化
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
    console.log("%c%s", "color:blue","el     : " + (this.$el)); //undefined
    console.log(this.$el); //undefined
    console.log("%c%s", "color:blue","data   : " + this.$data); //已被初始化  
    console.log("%c%s", "color:blue","checked: " + this.checked); //已被初始化  
  },
  mounted: function () {
    console.group('mounted 挂载结束状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el); //已被初始化
    console.log(this.$el); //已被初始化
    console.log("%c%s", "color:blue","data   : " + this.$data); //已被初始化
    console.log("%c%s", "color:blue","checked: " + this.checked); //已被初始化 
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el);
    console.log(this.$el);   
    console.log("%c%s", "color:blue","data   : " + this.$data); 
    console.log("%c%s", "color:blue","checked: " + this.checked); 
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el);
    console.log(this.$el); 
    console.log("%c%s", "color:blue","data   : " + this.$data); 
    console.log("%c%s", "color:blue","checked: " + this.checked); 
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el);
    console.log(this.$el);    
    console.log("%c%s", "color:blue","data   : " + this.$data); 
    console.log("%c%s", "color:blue","checked: " + this.checked); 
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
    console.log("%c%s", "color:blue","el     : " + this.$el);
    console.log(this.$el);  
    console.log("%c%s", "color:blue","data   : " + this.$data); 
    console.log("%c%s", "color:blue","checked: " + this.checked)
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
