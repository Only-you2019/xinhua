	<template>
  <div class="XhSearch">
    <xh-search-header @changeTitle="changeTitle"></xh-search-header>
    <xh-search-list :pendingData="pendingData" :title="title" @changeTitle="Clear"></xh-search-list>
    <div class="XhSearchFooter" v-if="!title">
      <xh-search-lately></xh-search-lately>
      <xh-search-popular :searchBefore="searchBefore"></xh-search-popular>
    </div>
  </div>
</template>

<script>
  import api from '../XinHuaApi'
  import XhSearchHeader from "../components/index/XhSearchHeader";
  import XhSearchList from "../components/index/XhSearchList";
  import XhSearchLately from "../components/index/XhSearchLately";
  import XhSearchPopular from "../components/index/XhSearchPopular";
  export default {
    name: "XhSearch",
    components: {
      XhSearchHeader,
      XhSearchList,
      XhSearchLately,
      XhSearchPopular

    },
    data() {
      return {
        title:"",
        flag:2,
        defaultKey:"",
        searchBefore: [],
        pendingData:[]
      }
    },
    created(){
      this.SearchBefore();
    },
    watch:{
      title(){
        this.SearchPending()
      }
    },
    methods:{
      Clear(){
        this.title=""
      },
      changeTitle(title){
        this.title=title
      },
      SearchBefore(){
        api.get('/api/xinhua/search/find/words').then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              // 成功时接收数据
              //     console.log(data.data.datas)
              this.defaultKey=data.data.datas.defaultWord
              this.searchBefore=data.data.datas.hotWords
							console.log(data.data.datas.hotWords)
							console.log(data.data.datas.defaultWord)
            }else{
              // 失败时打印错误信息
              console.log(data.data.err)
            }
          }
        }).catch(err=>{
          // 请求错误返回错误信息
          console.log(err)
        })
      },
      SearchPending(){
        // var a=this;
        if(this.title){
          api.get('/api/xinhua/search/prompt',{keyword:this.title}).then(data=>{
            // 判断http请求状态码,200为请求成功
            if(data.status===200){
              // 判断接口请求是否成功 0为成功
              if(data.data.status===0){
                // 成功时接收数据
                // console.log(data.data.datas)
                this.pendingData=data.data.datas
              }else{
                // 失败时打印错误信息
                console.log(data.data.err)
              }
            }
          }).catch(err=>{
            // 请求错误返回错误信息
            console.log(err)
          })
        }

      },
    },
  }
</script>

<style scoped>
  /*@import "../assets/css/XhStyleOne.css";*/

  .XhSearch{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
  }
  .XhSearch .XhSearchFooter{
    padding:0 0.2rem;
  }
</style>
