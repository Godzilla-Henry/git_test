<template>
  <div id="app">
    {{test}}
    <input type="text" v-model="test_local">
    <button @click="changeHandler()"> 修改 </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      test_local:""
    }
  },
  methods:{
    changeHandler() {
      this.$store.dispatch('updateTest',test_local)
    }
  },
  computed: {
    test () {
      return this.$store.state.test
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
