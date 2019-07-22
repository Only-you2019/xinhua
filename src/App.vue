<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      theme:true
    }
  },
  methods:{
    // 请求主题变化
    getCss1(){
      return require("./assets/css/XhStyleOne.css")
    },
    getCss2(){
      return require("./assets/css/XhStyleTwo.css")
    },
    changeTheme(){
      if(this.theme===true){
        this.getCss1()
      }else{
        this.getCss2()
      }
    }
  },
  created() {
    fetch("http://localhost:3000/xinhua/api/theme").then(res => {
      res.json().then(data => {
        console.log(data);
        this.theme = data.theme[0].theme;
        console.log(this.theme);
        this.changeTheme()

      });
    });
    // this.getCss1()
  }
}
</script>

<style>
   /* @import "assets/css/XhStyleOne.css"; */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
