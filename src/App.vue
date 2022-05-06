<template>
  <div id="app">
    API : {{ api_data }}
    <button @click="FetchApi()">Click</button>


  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  data(){
    return{
        api_data : []
    }
  },
  methods:{
    async FetchApi(){
      await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
      .then(res => {
        console.log(res.data)
      })
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
