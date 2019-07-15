<template>
    <div class="XhNavPages">
        <!-- Header components中 index 复用 -->
        <Xh-nav-pages-header :title="title"></Xh-nav-pages-header>
        <div class="XhNavPages-main">
            <!-- 图书销量排行榜组件 -->
            <Xh-nav-pages-main :ImgUrls="picAll"></Xh-nav-pages-main>
        </div>
    </div>
</template>

<script>
import XhNavPagesHeader from '../components/index/XhNavPagesHeader'
import XhNavPagesMain from '../components/index/XhNavPagesMain'

import api from '.././XinHuaApi'
    export default {
        name: "XhNavPages",
        components: {
            XhNavPagesHeader,
            XhNavPagesMain
        },
        data(){
          return{
            title:"图书销量排行榜",
            ImgUrl:[],
            picAll:[]
          }
        },
        methods: {
          // 请求接口，返回分类列表详情
          RequestHotListData() {
            api.get('/api/xinhua/sellWell/ranking').then(data => {
               // 判断http请求状态码,200为请求成功
              if (data.status === 200) {
                // 判断接口请求是否成功 0为成功
                if (data.data.status === 0) {
                  // 成功时接收数据

                  var picAll=[]
                  this.ImgUrl=JSON.parse(data.data.datas.designData.body);
                  for(var i=1;i<this.ImgUrl.length;i++){
                    this.picAll.push(this.ImgUrl[i].config)
                  }
                } else {
                  // 失败时打印错误信息
                  console.log(data.data.err);
                }
              }
            }).catch(err => {
              // 请求错误返回错误信息
              console.log(err);
            });
          }
        },
        mounted() {
          this.RequestHotListData();
        }

    }
</script>

<style scoped>
    .XhNavPages-main{
        margin-top: .86rem;
    }
</style>
