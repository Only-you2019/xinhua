<template>
  <div class="allList">
    <div v-for="(title,tId) in bookList" :key="tId">
      <h4>{{title.current.name}}</h4>
      <ul class="flex list">
        <li v-for="(list,lId) in title.children" :key="lId" :list="list">
          <a @click="ToList(list.current.id)">
<!--            图片反向代理-->
<!--            <img :src="'https://api.isoyu.com/img-Proxy.php?url='+list.current.logo" alt="bookPicture">-->
            <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(list.current.logo)" alt="bookPicture">
            <p>{{list.current.name}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XhClassifyList",
        props:['bookList'],
        methods:{
          urlEncode(str){
            return encodeURI(str)
          },
          ToList(id){
            this.$router.push({path: '/XhProductsList', query: {frontCategoryId: id}})
          }
        }
    }
</script>

<style scoped>
  @import '../.././assets/css/classify.css';
</style>
