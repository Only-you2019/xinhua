<template>
  <div class="XhShoppingCart pageBody">
    <XhShoppingCartHeader :header="header" @manages="changeManage"></XhShoppingCartHeader>
    <main class="cart-mian">
      <XhShoppingCartProduct :product="product" @addf="addValue" @reducef="reduceValue" @allChecked="allchecked"></XhShoppingCartProduct>
      <XhShoppingCartIntroduce></XhShoppingCartIntroduce>
    </main>
    <XhShoppingCartSubmit v-if="manage==1"></XhShoppingCartSubmit>
    <XhShoppingCartDelete v-if="manage==0"></XhShoppingCartDelete>
    <!--底部-->
    <xh-footer></xh-footer>
  </div>
</template>

<script>
    import api from '../XinHuaApi'
    import XhShoppingCartHeader from "@/components/shoppingCart/XhShoppingCartHeader"
    import XhShoppingCartProduct from "@/components/shoppingCart/XhShoppingCartProduct"
    import XhShoppingCartIntroduce from "@/components/shoppingCart/XhShoppingCartIntroduce"
    import XhShoppingCartSubmit from "@/components/shoppingCart/XhShoppingCartSubmit"
    import XhShoppingCartDelete from "@/components/shoppingCart/XhShoppingCartDelete"
    import XhFooter from '../components/commons/XhFooter'
    export default {
        name: "XhShoppingCart",
        data(){
          return{
            header:"管理",
            manage:1,
            product:{
              checked:true,
              data:[
                {
                  id:1,
                  name:"第四只手",
                  price:"￥39.20",
                  img:"https://img2.xinhuashudian.com/bookbasepic/C/02448/3858400-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                  value:1,
                  checked:true,
                },
                {
                  id:1,
                  name:"第四只手",
                  price:"￥39.20",
                  img:"https://img2.xinhuashudian.com/bookbasepic/C/02448/3858400-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                  value:1,
                  checked:true,
                },
                {
                  id:1,
                  name:"第四只手",
                  price:"￥39.20",
                  img:"https://img2.xinhuashudian.com/bookbasepic/C/02448/3858400-fm.jpg?x-oss-process=image/resize,m_lfit,limit_0,w_200,h_200",
                  value:1,
                  checked:true,
                }
              ]
            }
          }
        },
        components:{
          XhShoppingCartHeader,
          XhShoppingCartProduct,
          XhShoppingCartIntroduce,
          XhShoppingCartSubmit,
          XhShoppingCartDelete,
          XhFooter
        },
        // created(){
        //   this.Logindata();
        // },
        // mounted(){
        //   this.loadingShoppingCartData()
        // },
        methods:{
          loadingShoppingCartData(){
            api.get('/api/xinhua/shopcar/get').then(data=>{
              console.log(data);
            })
          },
          Logindata(){
            api.post('/api/xinhua/login/account?mobile=18829042286&&pass=123456').then(data=>{
              console.log(data);
            })
          },
          changeManage(){
            console.log(1);
            if(this.manage==1){
              this.manage=0;
              this.header="取消"
            }else{
              this.manage=1;
              this.header="管理"
            }
          },
          addValue(index){
            this.product.data[index].value++
          },
          reduceValue(index){
            this.product.data[index].value--;
            if(this.product.data[index].value==1){
              this.product.data[index].value=1
            }
          },
          allchecked(){
            this.product.data.forEach(item=>{
              item.checked=this.product.checked
            })
          }

        }



    }
</script>

<style scoped>
  .cart-mian{
    flex: 1;
    overflow-y: auto;
  }
</style>
