<template>
  <div class="index_class  sti">
    <van-tabs :ellipsis="isShow">
      <van-tab v-for="(index,item) in indexBookList_cs" :key="item"  :title="index.title" >
        <ul class="index-list-box flex">
          <li class="index-list-each"  v-for="(item,itemId) in index.indexListBrach" :key="itemId">
            <router-link :to="path+'/'+item.goodsId">
              <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.src)" alt="图片加载失败">
              <p>{{item.tltle}}</p>
              <span>￥{{item.price1}}</span>
            </router-link>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>

</template>

<script>
    export default {
        name: "XhIndexClass",
        props:['indexBookList_cs'],
        data(){
          return{
            path:"/XhProductDetail",
            isShow:false
          }
        },
        methods:{
          urlEncode(str){
            if(str.indexOf("https:")===-1){
              str="https:"+str
              return encodeURI(str)
            }else{
              return encodeURI(str)
            }
          },

        }
    }
</script>

<style scoped>
  /*@import '../../assets/css/index.css';*/

</style>
