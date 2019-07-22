<template>
  <div class="XhCollection-cs">
    <div class="header-cs">
      <span @click="$router.back()" class="iconfont icon-fanhui"></span>
      <span class="set-cs">我的收藏</span>
    </div>
    <van-tabs class="collect-cs" type="card" v-model="active">
      <van-tab class="collect-product" title="商品收藏">
        <div class="XhCollection-Bigbox" >
          <div class="XhCollection-Bigbox-one-two" v-for="(item,index) in product" :key="index" >
            <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.extension.img)"/>
            <div class="XhCollection-Bigbox-one-two-span"><span>{{item.name}}</span></div>
            <div class="XhCollection-Bigbox-one-two-span">
              <span class="XhCollection-Bigbox-one-two-span-span1">￥{{item.extension.price}}</span>
            </div>
          </div>
        </div>
        <div v-if="!product">
          <img src="../../static/cs/收藏.png">
          <span>去添加点什么吧</span>
          <router-link to="/" > <button>随便逛逛</button></router-link>
        </div>
      </van-tab>

      <van-tab class="collect-product" title="图书管理">
        <img src="../../static/cs/收藏.png">
        <span>暂无图书馆收藏</span>
        <router-link to="/">
          <button>随便逛逛</button>
        </router-link>
      </van-tab>
      <van-tab class="collect-product" title="活动收藏">
        <img src="../../static/cs/收藏.png">
        <span>暂无活动收藏</span>
        <router-link to="/">
          <button>随便逛逛</button>
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import api from '../XinHuaApi'
  import {Dialog} from 'vant';

  export default {
    name: "XhCollection",
    data() {
      return {
        active: 0,
        product:[],
      }
    },
    created(){
      this.getGoods()
    },
    methods: {
      exitCs() {
        Dialog.confirm({
          title: '提示',
          message: '确定要删除所以商品收藏?',
          confirmButtonColor: "#c72f2e",
        }).then(() => {
          // on confirm
          this.$toast('删除成功');
        }).catch(() => {
          // on cancel
        });
      },
      getGoods() {
        api.get('/api/xinhua/collect').then(data => {
          if (data.status === 200) {
            if (data.data.status === 0) {
              this.product=data.data.datas;
              for(var i=0;i<this.product.length;i++){
                this.product[i].extension=JSON.parse(this.product[i].extension)
                // console.log(this.product[i].extension);
              }
            } else {
              console.log(data.data.err)
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      urlEncode(str){
        if(str.indexOf("https:")==-1){
          str="https:"+str
          return encodeURI(str)
        }else{
          return encodeURI(str)
        }
      }
    },
    components: {
      [Dialog.Component.name]: Dialog.Component
    },

  }
</script>

<style scoped>
  /*.XhMyOrder-header-one {*/
  /*  float: right;*/
  /*  width: 1rem;*/
  /*  height: 1rem;*/
  /*  margin-right: .2rem;*/
  /*}*/

  .XhMyOrder-header-one span {
    font-size: 16px !important;
    line-height: .7rem;
  }

  .XhCollection-cs{
    background-color: #f7f7f7;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
  }
  .XhCollection-cs .header-cs{
    position: relative;
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .XhCollection-cs .header-cs .icon-fanhui{
    position: absolute;
    left:0.2rem;
    color: red;
  }
  .XhCollection-cs .header-cs .set-cs{
    position: absolute;
    left:42%;
    font-size:0.3rem;

  }
  .XhCollection-cs .collect-cs{
    margin-top: 0.2rem;
    display: flex;
    flex-direction:column;
    height: 100%;
  }

  .XhCollection-cs .collect-cs .van-tabs__content{
    flex: 1;
    overflow-y: scroll;
  }
  .XhCollection-cs .collect-cs img{
    width: 2.4rem;
    height: 2.4rem;
  }
  .XhCollection-cs.collect-product{
    display: flex;
    flex-direction: column;
     height: 11rem;
    align-items: center;
    justify-content: center;
  }
  .XhCollection-cs .collect-product span{
    color: #cccccc;
    font-size: 14px;
  }
  .XhCollection-cs .collect-product button{
    width: 3rem;
    height: 0.8rem;
    border: none;
    background-color: #c72f2e;
    margin-top: 0.5rem;
    color: white;
  }

  .XhCollection-Bigbox{
    width: 100%;
    flex:1;
    overflow-y:auto;
    background: #f7f7f7;
    height: 100%;
  }

  .XhCollection-Bigbox-one-two {
    width: 100%;
    height: 2.5rem;
    background: white;
    margin-top: .3rem;
  }

  .XhCollection-Bigbox-one-two img {
    width: 2rem;
    height: 1.8rem;
    float: left;
    margin-top: .1rem;
  }

  .XhCollection-Bigbox-one-two-span {
    width: 4.5rem;
    height: 1.25rem;
    text-align: left;
    float: right;
  }
  .XhCollection-Bigbox-one-two-span span {
    float: left;
    font-size: 16px;
    margin-left: .2rem;
    line-height: .5rem;
  }
  .XhCollection-Bigbox-one-two-span-span1 {
    color: red !important;
    line-height: 1.25rem !important;
  }

</style>
