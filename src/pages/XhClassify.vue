<template>
  <div class="classify pageBody">
    <header>
      <xh-classify-header :defaultKey="defaultKey"/>
    </header>
      <main  >
        <div  class="flex" v-if="navList.length">
          <classify-nav :navList="navList" @changeList="changeList" />
          <div class="nav-right">
            <classify-list :bookList="bookList"/>
          </div>
        </div>
        <van-loading v-if="!navList.length" size="54px" color="#C62F2E" style="position: fixed;top:50%;left:50%;margin-left: -0.88rem">加载中...</van-loading>
      </main>

    <xh-footer />
  </div>
</template>

<script>
  //引入api
  import api from '.././XinHuaApi'
  //引入子组件
  import ClassifyNav from '.././components/classify/XhClassifyNav'
  import ClassifyList from '.././components/classify/XhClassifyList'
  //引入公共组件
  import XhClassifyHeader from '../components/classify/XhClassifyHeader'
  import XhFooter from '../components/commons/XhFooter'
  export default {
    name: "XhClassify",
    components:{
      'xh-classify-header':XhClassifyHeader,
      'classify-nav':ClassifyNav,
      'classify-list':ClassifyList,
      'xh-footer':XhFooter
    },
    data(){
      return{
          navList:[],
          bookList:[],
          num:0,
          defaultKey:""
      }
    },
    methods: {
      // 请求接口，返回分类列表详情
      loadingClassifyData() {
        api.get('/api/xinhua/classification').then(data => {
          // 判断http请求状态码,200为请求成功
          if (data.status === 200) {
            // 判断接口请求是否成功 0为成功
            if (data.data.status === 0) {
              // 成功时接收数据
              // console.log(data.data.datas);
              this.navList=data.data.datas.serviceData.body_2._DATA_;
                  //默认请求第一个
                  this.changeList('0')
            } else {
              // 失败时打印错误信息
              console.log(data.data.err);
            }
          }
        }).catch(err => {
          // 请求错误返回错误信息
          console.log(err);
        });
      },
      // 点击实现数据的切换
      changeList(index){
        this.bookList=this.navList[index].children;
      },
      //搜索框默认值
      SearchBefore(){
        api.get('/api/xinhua/search/find/words').then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              // 成功时接收数据
              //     console.log(data.data.datas)
              this.defaultKey=data.data.datas.defaultWord
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
    },
    created() {
      this.loadingClassifyData();
      this.SearchBefore()
    }
  }
</script>

<style scoped>
 /*@import '.././assets/css/XhStyleOne.css';*/
  @import '../assets/css/classify.css';
</style>
