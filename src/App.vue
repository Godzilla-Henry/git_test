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
      let time_start = new Date(); 
      await axios.get("https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json")
      .then(res => {
        let time_end = new Date();
        let api_time = time_end - time_start ; // api cost
        let max_time = Math.max(api_time, 2000);
        let waiting_time = max_time - api_time;
        setTimeout(() => {
            this.api_data = res.data
        }, waiting_time);
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
