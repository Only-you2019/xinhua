<template>
  <div class="XhChat">
    <!--商城头部-->
    <header>
      <img src="https://pro-km.oss-cn-hangzhou.aliyuncs.com/Data/robot/robot_logo_default.png" alt="">
      <span>新华书店</span>
      <span class="goBack"  @click="$router.back()">返回</span>
    </header>
    <!--主体部分-->
    <main id="message">
      <div id="msgList">
        <h3 v-show="history">查看历史记录</h3>
        <section v-for="(item,index) in chatMessage" :key="index">
          <!--普通文本对话消息-->
          <div v-if="item.type==='robot'">
            <div class="theRobot" v-if="item.dataType==='text'">
              <h4>
                <span>{{item.name}}</span>
                <span>{{item.robotTime}}</span>
              </h4>
              <span class="robotSay">
                  {{item.content}}
              </span>
            </div>
            <!--新闻列表消息-->
            <div class="theRobot allNews" v-if="item.dataType==='news'">
              <h4>
                <span>{{item.name}}</span>
                <span>{{item.robotTime}}</span>
              </h4>
              <span class="robotSay newsData" v-for="con in item.content">
                 <a :href="con.detailurl" target="_blank" class="flex">
                     <p>{{con.name}}</p>
                     <img :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(con.icon)" alt="图片加载失败">
                 </a>
             </span>
            </div>
            <!--获取链接信息，如图片-->
            <div class="theRobot allUrl" v-if="item.dataType==='url'">
              <h4>
                <span>{{item.name}}</span>
                <span>{{item.robotTime}}</span>
              </h4>
              <span class="robotSay">
                <a :href="item.content"  target="_blank" class="urlData">{{item.content}}</a>
             </span>
            </div>
          </div>
          <!--用户发送的文本消息-->
          <div class="theUser" v-if="item.type==='user'">
            <h4>
              <span>{{item.name}}</span>
              <span>{{item.robotTime}}</span>
            </h4>
            <span class="userSay">
                {{item.content}}
            </span>
          </div>
        </section>
      </div>
    </main>
    <footer>
      <div>
        <form @submit.prevent action="javascript:return true">
          <input type="text" v-model="str" placeholder="很高兴为您服务，请描述您的问题" @keyup.enter="sending">
        </form>
        <button @click="sending">发送</button>
      </div>
    </footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: "chat",
    data() {
      return {
        str: "",
        // 历史记录
        history: false,
        //对话框中的内容
        chatMessage: [],
        socket: null,
        div: null,
        smallDiv: null
      }
    },
    methods: {
      getTime() {
        var d = new Date(),
          my_hours = d.getHours() < 10 ? '0' + d.getHours() : d.getHours(),
          my_minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes(),
          my_seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds();
        return my_hours + ":" + my_minutes + ":" + my_seconds
      },
      sending() {
        if (this.str !== '' && this.str !== null) {
          this.chatMessage.push(
            {
              type: 'user',
              name: '用户',
              robotTime: this.getTime(),
              content: this.str,
              dataType: ''
            }
          )
          this.socket.send(this.str);
          this.str = ''
        }
      },
      kindsOf(arr) {
        for (var i = 0; i < arr.length; i++) {
          switch (arr[i].resultType) {
            case 'text': {
              this.chatMessage.push(
                {
                  type: 'robot',
                  name: '新华书店',
                  robotTime: this.getTime(),
                  content: arr[i].values.text,
                  dataType: arr[i].resultType
                }
              )
            }
              break;
            case 'news': {
              this.chatMessage.push(
                {
                  type: 'robot',
                  name: '新华书店',
                  robotTime: this.getTime(),
                  content: arr[i].values.news,
                  dataType: arr[i].resultType
                }
              )
            }
              break;
            case 'url': {
              this.chatMessage.push(
                {
                  type: 'robot',
                  name: '新华书店',
                  robotTime: this.getTime(),
                  content: arr[i].values.url,
                  dataType: arr[i].resultType
                }
              )
            }
              break;
          }
        }
      },
      urlEncode(str) {
        if (str.indexOf("https:") == -1) {
          str = "https:" + str
          return encodeURI(str)
        } else {
          return encodeURI(str)
        }
      }
    },
    watch: {
      chatMessage() {
        var timer = setTimeout(() => {
          this.smallDiv.scrollTop = this.div.scrollHeight;
          clearTimeout(timer)
        }, 500)
      }
    },
    mounted() {
      this.div = document.getElementById('msgList');
      this.smallDiv = document.getElementById('message')
    },
    created() {
      if (typeof (WebSocket) == "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        //实例化WebSocket对象，指定要连接的服务器地址与端口  建立连接
        this.socket = new WebSocket("ws://39.107.253.13:7777/socket/user/15");
        //打开事件
        this.socket.onopen = function () {
          console.log("Socket 已打开");
          //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        //获得消息事件
        var _this = this;
        this.socket.onmessage = function (msg) {
          console.log(msg.data);
          var jsonStr = JSON.parse(msg.data);
          // console.log(typeof jsonStr);
          if (jsonStr.status === 0) {
            _this.kindsOf(jsonStr.content)
          }
          //发现消息进入    开始处理前端触发逻辑
        };
        //关闭事件
        this.socket.onclose = function () {
          console.log("Socket已关闭");
        };
        //发生了错误事件
        this.socket.onerror = function () {
          alert("Socket发生了错误");
          //此时可以尝试刷新页面
        }
      }
    }
  }
</script>

<style scoped>
  /*最外层大盒子*/
  .XhChat {
    display: flex;
    height: 100%;
    flex-direction: column;
    background-color: #F5F8FA;
    text-align: left;
  }

  /*头部设置固定高度*/
  .XhChat header {
    height: 1.24rem;
    line-height: 1.24rem;
    width: 100%;
    background-color: #307AE8;
  }

  .XhChat header img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    margin: 0 0.3rem;
    vertical-align: middle;
  }

  .XhChat header span {
    font-size: 0.3rem;
    color: #ffffff;
  }
  .XhChat header .goBack{
    display: inline-block;
    text-align: right;
    width: 4.4rem;
  }

  /*中间聊天部分*/
  .XhChat main {
    overflow-y: auto;
    flex: 1;
    padding: 0.1rem 0.3rem;
  }

  /*历史记录*/
  .XhChat main h3 {
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
  }

  .XhChat main .theRobot h4, .XhChat main .theUser h4 {
    color: #D0D4D7;
  }

  .XhChat main .theRobot h4 span, .XhChat main .theUser h4 span {
    margin: 0 0.1rem;
  }

  .XhChat main .theRobot .robotSay, .XhChat main .theUser .userSay {
    color: #6A7174;
    font-size: 0.3rem;
    font-weight: 700;
    border-radius: 0.2rem;
    background-color: #fff;
    padding: 0.2rem;
    display: inline-block;
    max-width: 5.6rem;
    margin-bottom: 0.2rem;
  }

  .XhChat main .theUser .userSay {
    background-color: #307AE8;
    color: #fff;
  }

  .XhChat main .theUser {
    text-align: right;
    margin-top: 0.2rem;
  }

  /*新闻布局*/
  .XhChat main .allNews {
    max-height: 8rem;
    overflow-y: hidden;
  }

  .XhChat main .newsData {
    width: 5.6rem;
    justify-content: space-around;
  }

  .XhChat main .urlData {
    text-decoration: underline;
    line-height: 0.4rem;
    height: 1rem;
    color: #1E9FFF;
  }

  .XhChat main .newsData p {
    width: 4rem;
    overflow: hidden;
    font-weight: 400;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .XhChat main .newsData img {
    width: 1rem;
    height: 1rem;
  }

  /*尾部发送部分*/
  .XhChat footer {
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
    padding: 0 0.2rem;
  }

  .XhChat footer div {
    display: flex;
    justify-content: space-between;
  }

  .XhChat footer div form {
    width: 80%;
  }

  .XhChat footer div input {
    outline: none;
    border: none;
    width: 100%;
    font-size: 0.28rem;
    color: #3D3D3D;
  }

  .XhChat footer div button {
    outline: none;
    border: none;
    width: 14%;
    height: 0.6rem;
    margin: 0.2rem 0;
    line-height: 0.6rem;
    background-color: #307AE8;
    color: #fff;
  }
</style>
