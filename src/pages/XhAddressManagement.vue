<template>
    <div class="XhAddressManagement-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">管理收货地址</span>
      </div>
     <div class="XhAddressManagement-main">
       <div class="main-cs" v-if="peradds.length==0">
         <img src="../../static/cs/管理收货地址.png">
         <p>暂无地址信息</p>
         <button @click="$router.push('/XhCreateAddress')">新建地址</button>
       </div>
       <div v-else>
       <div class="per-adds" v-for="(p,i) in peradds" :key="i" >
         <div class="per-adds-up"><span>{{p.name}}</span><span>{{p.tel}}</span></div>
         <div class="per-adds-mid">{{p.province+p.city+p.county+p.address}}</div>
         <div class="per-adds-down">
           <div>
             <van-radio-group v-model="radio">
               <van-radio :name="i" checked-color="red">{{radio==i?"默认地址":"设为默认地址"}}</van-radio>
             </van-radio-group></div>
           <div @click="$router.push({path:'/XhEditAddress',query:{peradd:p,index:i}})"><van-icon size="22px" name="records" />&nbsp&nbsp<span>编辑</span></div>
           <div @click="del(p,i)" v-show="!radio==i"><van-icon size="22px" name="delete" />&nbsp&nbsp<span>删除</span></div>
         </div>
       </div>
         <button @click="$router.push('/XhCreateAddress')" class="per_btn">新建地址</button>
       </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: "XhAddressManagement",
      data(){
          return {
            radio:0,
            peradds:[]
          }
      },
     methods:{
       del(p,i){
         this.$dialog.confirm({
           title: '删除',
           message: '确定删除么?'
         }).then(() => {
           this.peradds.splice(i,1)
           localStorage.setItem("peradds",JSON.stringify(this.peradds))
           this.$toast('删除成功');
         }).catch(() => {
           // on cancel
         });

       },
     },
      created() {
        this.peradds=JSON.parse(localStorage.getItem("peradds") || "[]")
        if(this.$route.query.information && !this.$route.query.information.length){
          var perAdd = JSON.parse(localStorage.getItem("peradds") || "[]")
          perAdd.push(this.$route.query.information)
          this.peradds=perAdd
          localStorage.setItem("peradds",JSON.stringify(perAdd))
        }
        if(this.$route.query.peradd &&!this.$route.query.peradd.length){
          this.peradds.splice(this.$route.query.index,1,this.$route.query.peradd)
          localStorage.setItem("peradds",JSON.stringify(this.peradds))
        }

      }
    }
</script>

<style scoped>
  .XhAddressManagement-cs{
    height: 100%;
    background-color: #f7f7f7;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  .XhAddressManagement-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .XhAddressManagement-main{
    background-color: #f7f7f7;
    width: 100%;
    overflow-y: scroll;
  }
  .XhAddressManagement-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhAddressManagement-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
  .XhAddressManagement-cs .main-cs{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.92rem;
  }
  .XhAddressManagement-cs .main-cs img{
    width: 2rem;
    height: 2.44rem;
  }
  .XhAddressManagement-cs .main-cs p{
    margin: 0.76rem 0 0.54rem 0;
    color: #9a9a9a;
  }
  .XhAddressManagement-cs .main-cs button{
    width: 3.18rem;
    height: 0.9rem;
    border: none;
    background-color: #c72f2e;
    color: white;
  }
  .XhAddressManagement-cs .per-adds{
    width: 6.9rem;
    height: 2.66rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0.36rem 0.33rem 0.2rem 0.33rem;
    justify-content: space-between;
    margin-top: 0.3rem;
  }
  .XhAddressManagement-cs .per-adds .per-adds-up{
    width: 3.17rem;
    height: 0.61rem;
    display: flex;
    justify-content: space-between;
  }

  .XhAddressManagement-cs .per-adds .per-adds-mid{
        width: 100%;
    border-bottom: 1px solid #cccccc;
    text-align: start;
    height: 0.83rem;
    line-height: 0.4rem;
  }
  .XhAddressManagement-cs .per-adds .per-adds-down{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 0.52rem;
    line-height: 0.52rem;
    align-items: center;
  }
  .XhAddressManagement-cs .per-adds .per-adds-down > div{
    display: flex;
    align-items: center;
    height: 0.52rem;
    line-height: 0.52rem;
    padding-top: 0.1rem;
  }
  .XhAddressManagement-cs .per_btn{
    width: 6.9rem;
    background-color: red;
    border: none;
    position: fixed;
    bottom: 0.1rem;
    left: 0.3rem;
    height: 0.8rem;
    color: white;
  }
</style>
