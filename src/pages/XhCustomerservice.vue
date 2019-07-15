<template>
	<div class="pageBody">
		<div class="XhService-header">
			<img src="../../static/images/mine/xhimg/jtz3.png" @click="$router.back(-1)">
			<a href=""><span>彤彤</span>
			<img src="../../static/images/mine/xhimg/y.png" class="XhService-header-img">
			</a>
		</div>
		<div class="XhService-Bigbox">
			<div class="test3">
				<div class="XhService-msg" ref="box">
					<div v-for="item in this.list" :class="[item.type,'msg-item']">
						<img src="../../static/cs/个人资料_03.png" alt="">
						<span>{{item.content}}</span>
					</div>
				</div>
			</div>	
		</div>
		<div class="XhService-footer">
				<input type="text" v-model="message" value="  输入消息..." />
				<span class="XhService-footer-a" @click="send">发送</span>
          <div class="XhService-footer-one">
				  <a href=""><img src="../../static/images/mine/xhimg/xy.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/yy.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xj.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xc.png" ></a>
				  <a href=""><img src="../../static/images/mine/xhimg/xz1.png" ></a>
			  </div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: "XHmine",
	  data(){
				return {
					socket:"",
					message:"",
					list:[]
				}
			},
			created(){ 
				if(typeof(WebSocket) == "undefined") {  
						console.log("您的浏览器不支持WebSocket");  
				}else{  
						console.log("您的浏览器支持WebSocket");  
							//实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接  
							this.socket = new WebSocket("ws://39.107.253.13:7777/websocket/xxx/20");  
							// this.socket = new WebSocket("ws://apiwebsocket/${cid}".replace("http","ws"));  
							//打开事件  
							this.socket.onopen = function() {  
									console.log("Socket 已打开");  
									//socket.send("这是来自客户端的消息" + location.href + new Date());  
							};  
							//获得消息事件  
							var _this=this
							this.socket.onmessage = function(msg) { 
									console.log(msg.data);  
									var msg=JSON.parse(msg.data)
									if(msg.status==0){
										_this.list.push({
											"type":"serve",
											"content":msg.datas.content
										})	
									}
									//发现消息进入    开始处理前端触发逻辑		
							};
							//关闭事件  
							this.socket.onclose = function() {  
									console.log("Socket已关闭");  
							};  	
							//发生了错误事件  
							this.socket.onerror = function() {  
									alert("Socket发生了错误");  
									//此时可以尝试刷新页面
							}  
					}		
			},
			methods:{
				send(){
					this.socket.send(this.message)
					this.list.push({
						"type":"client",
						"content":this.message
					})		
				}
			}
   	
	  }
</script>

<style scoped>
	.XhService-header{
		width: 100%;
		height: 1rem;
		background: #0093ff;
	}
	.XhService-header img{
		float: left;
		width: .3rem;
		height: .5rem;
		margin-top: .26rem;
		margin-left: .2rem;
	}
	.XhService-header span{
		float: left;
		font-size: 16px;
		color: white;
		margin-left: .6rem;
		line-height: 1rem;
	}
	.XhService-header-img{
		width: .3rem !important;
		height: .4rem !important;
		margin-top: .3rem !important;
	}
	.XhService-Bigbox{
			flex:1;
			overflow-y:auto;
			background: #fff;
		}
	.XhService-footer{
		background: #f7f7f7;
		border-top: 1px solid #dadada;
	}
	.XhService-footer input{
		width: 6rem;
		height: 1rem;
		font-size: 13px;
		color: #c3cdd4;
		border: none;
		background: #f7f7f7;
	}
	.XhService-footer-a{
		display: inline-block;
		width: 1rem;
		height: .6rem;
		background:#0093ff ;
		font-size: 15px;
		text-align: center;
		line-height: .6rem;
	}
	.XhService-footer-one{
		width: 100%;
		height: 1rem;
		display: flex;
	}
	.XhService-footer-one img{
		width: .5rem;
		height: .5rem;
		margin-top: .2rem;
		margin-left: .1rem;
	}
  .XhService-msg {
    width: 100%;
    height:100%;
    overflow: auto;
    padding-top: 5px;
    display: inline-block;
    margin-bottom: 6px;
		padding:0.2rem;
		}
    .msg-item {
      position: relative;
      overflow: hidden;
		}
    .msg-item  span {
        display: inline-block;
        border-radius: 4px;

        float: left;
        padding: 4px 12px;
        margin: 0 0 4px 0;
        max-width: 70%;
        text-align: left;
        box-sizing: border-box;
				vertical-align: middle;
      }
			.serve span{
				float:left;
				background: #eceff1;
				color: #000;
			}
			.client span{
				float:right;
				background: #0093ff;
				color:#fff;
			}
    .msg-item img{
			width: 0.5rem;
			height: 0.5rem;
			vertical-align: middle;
		}
			.serve img{
				float:left;
				margin-right:0.1rem;
			}
			.client img{
				float:right;
				margin-left:0.1rem;
			}
</style>
