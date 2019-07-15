<template>
    <div class="XhMessage">
      <div class="xinhua_header">
        <router-link to="">
          <i @click="$router.back()" class="iconfont icon-fanhui"></i>
        </router-link>
        <span>消息中心</span>
      </div>

      <div class="xinhua_main">
        <ul>
          <li>
            <router-link to="./XhMessagePages/0">
              <div class="xinhua_div">
                <img src="../../static/images/mine/message1.png" alt="">
                <div>
                  <p>交易物流</p>
                  <span>暂无新消息</span>
                </div>
              </div>
              <i class="iconfont icon-jiantouyou"></i>
            </router-link>
          </li>

          <li>
            <router-link to="./XhMessagePages/1">
            <div class="xinhua_div">
              <img src="../../static/images/mine/message2.png" alt="">
              <div>  <p>售后退换</p>
                <span>暂无新消息</span>
              </div>
            </div>
            <i class="iconfont icon-jiantouyou"></i>
          </router-link>
          </li>

          <li>
            <router-link to="./XhMessagePages/2">
              <div class="xinhua_div">
                <img src="../../static/images/mine/message3.png" alt="">
                <div>
                  <p>优惠促销</p>
                  <span>暂无新消息</span>
                </div>
              </div>
              <i class="iconfont icon-jiantouyou"></i>
            </router-link>
          </li>

          <li>
            <router-link to="./XhMessagePages/3">
              <div class="xinhua_div">
                <img src="../../static/images/mine/message4.png" alt="">
                <div>
                  <p>系统通知</p>
                  <span>暂无新消息</span>
                </div>
              </div>
              <i class="iconfont icon-jiantouyou"></i>
            </router-link>
          </li>

        </ul>
      </div>

      <section class="kefu">
        <ul>
          <li>
            <router-link to="/XhCustomerservice">
              <div class="kefu_img">
                <img src="../../static/images/mine/message5.png" alt="">
                <div>
                  <p>客服消息</p>
                  <span>点击查看您与客服的沟通记录</span>
                </div>
              </div>
              <i class="iconfont icon-jiantouyou"></i>
            </router-link>
          </li>
        </ul>
      </section>

    </div>
</template>

<script>
    export default {
        name: "XhMessage"
    }
</script>

<style scoped>
.XhMessage{
  background-color: #f7f7f7;
  height: 13.34rem;
  text-align: left;
}
.XhMessage .xinhua_header{
  width:100%;
  height: 0.9rem;
  background-color: #f7f7f7;
}
.XhMessage .xinhua_header a{
  display: inline-block;
  width: 15%;
  height: 100%;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.1rem;
  color: red;

}
.XhMessage .xinhua_header span:nth-child(2){
  display: inline-block;
  width: 70%;
  height: 100%;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.35rem;
  color: #5a5a5a;
}
.XhMessage .xinhua_main{
  width: 100%;
  height: 5.8rem;
  background-color: #ffffff;
  margin-bottom: 0.2rem;
}
.XhMessage .xinhua_main ul {
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.XhMessage .xinhua_main ul li{
  width: 100%;
  height: 25%;
  border-bottom: 1px solid #dddddd;
}
.XhMessage .xinhua_main ul li:last-child{
  border: none;
}
.XhMessage .xinhua_main ul li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.XhMessage .xinhua_main ul li img{
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
}
.XhMessage .xinhua_div{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0.2rem;
}
.xinhua_div div{
  margin-left: 0.2rem;
}
.XhMessage .xinhua_div div p{
  font-size: 14px;
  padding-bottom: 0.1rem;
  color: #000;
}
.XhMessage .xinhua_div div span{
  font-size: 14px;
  color: #999999;
}
.XhMessage .xinhua_main i{
  font-size: 20px;
  margin-right: 0.2rem;
}

.XhMessage .kefu{
  width: 100%;
  height: 10.87%;
  background-color: #FFFFFF;
}
.XhMessage .kefu ul{
  width: 100%;
  height: 100%;
}
.XhMessage .kefu ul li{
  width: 95%;
  height: 100%;
  margin:  0 auto;
}
.XhMessage .kefu ul li a{
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.XhMessage .kefu ul li a img{
  width: 0.95rem;
  height: 0.95rem;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
}
.XhMessage .kefu_img{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 0.2rem;
}
.kefu_img div{
  margin-left: 0.2rem;
}
.XhMessage .kefu_img div p{
  font-size: 14px;
  padding-bottom: 0.1rem;
  color: #000;
}
.XhMessage .kefu_img div span{
  font-size: 14px;
  color: #999999;
}
.XhMessage .kefu i {
  font-size: 20px;
  margin-right: 0.2rem;
}
</style>
