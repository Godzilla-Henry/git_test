<template>
  <div id="app">
    {{test}}

    <button @click="changeHandler()"> 修改 </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{
    changeHandler() {
      this.$store.dispatch('updateTest','balabala')
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
