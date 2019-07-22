<template>
  <div class="pageBody">
    <div class="mine-content">
      <!-- XHheader -->
      <div class="XHheader">
        <div class="XHheader-one">
          <van-icon name="setting-o" @click="$router.push('/XhCountSetting')" class="XHheader-one-one"/>
          <van-icon name="comment-o" @click="$router.push('/XhMessage')" class="XHheader-one-one"/>
        </div>
        <div class="XHheader-tow">
          <div class="XHheader-tow-one">
            <router-link to="/XhPersonalMessage">
              <img :src="userMessage.img">
            </router-link>
          </div>
          <div class="XHheader-tow-tow">
            <router-link to="/XhPersonalMessage">
              <div class="XHheader-tow-tow-one">
                <span>{{userMessage.mobile}}</span>
              </div>
            </router-link>
            <router-link to="/XhMember">
              <div class="XHheader-tow-tow-tow">
                <img src="../../static/images/mine/xhimg/da93ada5-803a-48ab-9fd5-f7b0ad0c7108.png">
                <span>普通会员  0积分</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="XHheader-tree">
          <div class="XHheader-tree-one">
            <router-link to="/XhMyOrder/1">
              <span class="icon iconfont">&#xe607;</span>
              <span>待付款</span>
            </router-link>
            <router-link to="/XhMyOrder/2">
              <span class="icon iconfont">&#xe615;</span>
              <span>待发货</span>
            </router-link>
            <router-link to="/XhMyOrder/3">
              <span class="icon iconfont">&#xe620;</span>
              <span>待收货</span>
            </router-link>
          </div>
          <img src="../assets/xhimg/h.png"/>
          <div class="XHheader-tree-one">
            <router-link to="/XhEvaluationCentre">
              <span class="icon iconfont">&#xe630;</span>
              <span>待评价</span>
            </router-link>
            <router-link to="/XhAfterSale">
              <van-icon name="refund-o" class="Xheader-treen-one-one"/>
              <span style="margin-right: .4rem;">售    后</span>
            </router-link>
            <router-link to="/XhMyOrder/0">
              <span>全部订单</span>
              <span class="icon iconfont">&#xe62d;</span>
            </router-link>
          </div>
        </div>
      </div>
      <!-- XHnav -->
      <div class="XHnav">
        <router-link to="/XhDiscounts">
          <h6>0</h6>
          <h5>优惠卷</h5>
        </router-link>
        <img src="../../static/images/mine/xhimg/s.png"/>
        <router-link to="/XhGiftCards">
          <h6>0</h6>
          <h5>礼品卡</h5>
        </router-link>
        <img src="../../static/images/mine/xhimg/s.png"/>
        <router-link to="/XhCollection">
          <h6>{{num}}</h6>
          <h5>我的收藏</h5>
        </router-link>
        <img src="../../static/images/mine/xhimg/s.png"/>
        <router-link to="/XhHistory">
          <h6>0</h6>
          <h5>浏览历史</h5>
        </router-link>
      </div>
      <!-- XHseacter -->
      <router-link to="/XhMyStudy">
        <div class="XHseacter">
          <div class="XHseacter-tree">
            <span class="icon iconfont">&#xe678;</span>
          </div>
          <div class="XHseacter-one">
            <span>我的学习</span>
          </div>
          <div class="XHseacter-two">
            <span class="icon iconfont ">&#xe62d;</span>
          </div>
        </div>
      </router-link>
      <router-link to="/XhLibrary">
        <div class="XHseacter">
          <div class="XHseacter-tree">
            <span class="icon iconfont">&#xe67c;</span>
          </div>
          <div class="XHseacter-one">
            <span>我的家庭图书馆</span>
          </div>
          <div class="XHseacter-two">
            <span class="icon iconfont ">&#xe62d;</span>
          </div>
        </div>
      </router-link>
    </div>
    <!--底部-->
    <xh-footer></xh-footer>
  </div>
</template>

<script>
  import api from '../XinHuaApi'
  import XhFooter from '../components/commons/XhFooter'

  export default {
    name: "XHmine",
    components: {
      XhFooter
    },
    data() {
      return {
        userMessage: {},
        bookCollention:[],
        num:0
      }
    },
    methods: {
      getUser() {
        api.get('/api/xinhua/user').then(data => {
          if (data.status === 200) {
            if (data.data.status === 0) {
              this.userMessage = data.data.datas;
              sessionStorage.setItem('mobile', data.data.datas.mobile)
            } else {
              console.log(data.data.err)
            }
          }
        }).catch(err => {
          console.log(err)
        })
      },
      getCollection(){
        api.get('/api/xinhua/collect').then(data => {
          if (data.status === 200) {
            if (data.data.status === 0) {
              this.bookCollention = data.data.datas;
              console.log(this.bookCollention);
              this.num=this.bookCollention.length;
              console.log(this.num);

            } else {
              console.log(data.data.err)
            }
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created() {
      this.getUser();
      this.getCollection()
    }
  }
</script>

<style scoped>
  .mine-content {
    flex: 1;
    overflow-y: auto;
    background: #f7f7f7;
  }

  /* XHheader */
  .XHheader {
    width: 100%;
    height: 6.6rem;
    background: url(../../static/images/mine/xhimg/user-center.43d567e56c1eb804.png) no-repeat;
    background-size: 100%;
    border-top: 1px solid darkblue
  }

  .XHheader-one {
    width: 1.5rem;
    height: .72rem;
    float: right;
    margin-top: .2rem;
    display: flex;
    margin-right: .3rem;
  }

  .XHheader-one-one {
    font-size: 25px;
    color: white;
    margin-left: .25rem;

  }

  .XHheader-tow {
    width: 4.9rem;
    height: 1.68rem;
    margin-top: 1.5rem;
    margin-left: .5rem;
  }

  .XHheader-tow-one {
    width: 1.68rem;
    height: 1.68rem;
    float: left;
  }

  .XHheader-tow-one img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  .XHheader-tow-tow {
    width: 3rem;
    height: 1.68rem;
    float: right;
    margin-top: .15rem;
  }

  .XHheader-tow-tow-one {
    width: 3rem;
    height: .6rem;
    margin-top: .05rem;
    text-align: left;
  }

  .XHheader-tow-tow-one span {
    font-size: 20px;
    line-height: .6rem;
    letter-spacing: .02rem;
    color: white;

  }

  .XHheader-tow-tow-tow {
    width: 2.5rem;
    height: .4rem;
    background: #771b26;
    margin-top: .2rem;
    border-radius: 25px;
    display: flex;
  }

  .XHheader-tow-tow-tow img {
    width: .3rem;
    height: .3rem;
    margin-left: .1rem;
    vertical-align: middle;
  }

  .XHheader-tow-tow-tow span {
    font-size: 12px;
    color: white;
    vertical-align: middle;
    margin-left: .15rem;
    line-height: .4rem;
    font-weight: 100;
  }

  .XHheader-tree {
    width: 7rem;
    height: 2.88rem;
    background: #ffffff;
    margin-top: .5rem;
    margin-left: .25rem;
    border-radius: 10px;
  }

  .XHheader-tree-one {
    width: 7rem;
    height: 1.2rem;
    display: flex;
  }

  .XHheader-tree-one a {
    display: block;
    flex: 1;
  }

  .XHheader-tree-one span {
    font-size: 15px;
    color: #999999;
    line-height: 1.2rem;
    margin-right: .05rem;
    font-weight: 100;
    vertical-align: middle;
  }

  .Xheader-treen-one-one {
    font-size: 20px;
    color: #999999;
    line-height: 1.2rem;
    margin-left: .15rem;
    vertical-align: middle;
  }

  .XHheader-tree img {
    width: 6.5rem;
    height: .1rem;
    margin-top: .1rem;
    margin-bottom: .1rem;
  }

  /* XHnav */
  .XHnav {
    width: 7rem;
    height: 1.46rem;
    background: #ffffff;
    margin-top: .22rem;
    margin-left: .25rem;
    border-radius: 10px;
    display: flex;
  }

  .XHnav a {
    flex: 1;
  }

  .XHnav h6 {
    color: #c93434;
    font-size: 16px;
    line-height: .8rem;
    font-weight: 300;
  }

  .XHnav h5 {
    color: #747879;
    font-size: 15px;
    font-weight: 300;
  }

  .XHnav img {
    height: 1rem;
    margin-top: .25rem;
  }

  /* XHseacter */
  .XHseacter {
    width: 7rem;
    height: 1.4rem;
    background: #ffffff;
    margin-top: .22rem;
    margin-left: .25rem;
    border-radius: 10px;
    display: flex;
  }

  .XHseacter span {
    font-size: 15px;
    line-height: 1.4rem;
    color: #000;
    font-weight: 500;
  }

  .XHseacter-one {
    width: 6rem;
    height: 1.4rem;
    float: left;
    margin-right: 1rem;
    text-align: left;
    margin-left: .2rem;
  }

  .XHseacter-two {
    width: 1rem;
    height: 1.4rem;
    float: right;
    margin-left: 1.5rem;
  }

  .XHseacter-tree {
    width: .5rem;
    height: 1.4rem;
    float: left;
    margin-left: .3rem;
  }

</style>
