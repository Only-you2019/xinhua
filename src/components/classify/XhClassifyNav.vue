<template>
  <ul class="nav-left">
    <li v-for="(nav,nId) in navList" :key="nId" @click="changeList(nId)" :class="num==nId?'tabColor':'beforeColor'">{{nav.current.name}}</li>
  </ul>
</template>

<script>
    export default {
      name: "XhClassifyNav",
      props:['navList'],
      data(){
        return{
          num:0
        }
      },
      methods:{
        changeList(index){
            this.$emit('changeList',index);
            this.num=index
        }
      }
    }
</script>

<style scoped>
  @import '../.././assets/css/classify.css';
</style>
