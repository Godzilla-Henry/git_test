<template>
  <div id="app">
    {{data}}
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      data: []
    }
  },
  methods:{
    loadHandler() {
      this.$store.dispatch('Get').then((res) => {
        res.data.forEach(el => {
          this.data.push(el);
        });
      })
    }
  },
  created(){
    this.loadHandler();
  },
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
