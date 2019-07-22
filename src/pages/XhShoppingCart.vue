<template>
  <div class="XhShoppingCart pageBody">
    <XhShoppingCartHeader :header="header" @manages="changeManage"></XhShoppingCartHeader>
    <main class="cart-mian">
      <XhShoppingCartProduct :product="product" @addf="addValue" @reducef="reduceValue" @allChecked="allchecke" @onechecked="oneChecked"></XhShoppingCartProduct>
      <XhShoppingCartIntroduce></XhShoppingCartIntroduce>
    </main>
    <XhShoppingCartSubmit v-if="manage==1" :product="product" @allChecked="allchecke" @allsubmit="allSubmit" :allNumber="allNumber" :allPrice="allPrice"></XhShoppingCartSubmit>
    <XhShoppingCartDelete v-if="manage==0" :product="product" @allChecked="allchecke" @allDelete="allDeleteData"></XhShoppingCartDelete>
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
              data:[]
            }
          }
        },

        computed:{
          allNumber:function () {
            var num=0;
            this.product.data.forEach(item=>{
              if(item.checked===true){
                  num=num+item.num
                }
              }
            );
            return num;
          },
          allPrice:function () {
            var total=0;
            this.product.data.forEach(item=>{
                if(item.checked===true){
                  total=total+item.num*JSON.parse(item.extension).price;
                }
              }
            );
            return total.toFixed(2);
          },
        },
        components:{
          XhShoppingCartHeader,
          XhShoppingCartProduct,
          XhShoppingCartIntroduce,
          XhShoppingCartSubmit,
          XhShoppingCartDelete,
          XhFooter
        },
        created(){
          this.loadingShoppingCartData()
        },
        methods:{
          loadingShoppingCartData(){
            api.get('/api/xinhua/shopcar/get').then(data=>{
              data.data.datas.forEach(item=>{
                item.checked=true
              });
              this.product.data=data.data.datas

            });
            setTimeout(()=>{console.log(this.product.data);},100)
    },
          changeManage(){
            if(this.manage==1){
              this.manage=0;
              this.header="取消"
            }else{
              this.manage=1;
              this.header="管理"
            }
          },
          addValue(index){
            this.product.data[index].num++;
            api.put("/api/xinhua/shopcar/update",{
              goodsId:Number.parseInt(this.product.data[index].goodsId),
              num:this.product.data[index].num,
            })
          },
          reduceValue(index){
            this.product.data[index].num--;
            if(this.product.data[index].num<1){
              this.product.data[index].num=1
            }
            api.put("/api/xinhua/shopcar/update",{
              goodsId:parseInt(this.product.data[index].goodsId),
              num:this.product.data[index].num,
            })
          },
          allchecke(){
            this.product.data.forEach(item=>{
              item.checked=(!this.product.checked)
            })
          },
          oneChecked(){
            setTimeout(()=>{
              var count=0;
              this.product.data.forEach(item=>{
                if(item.checked===true){
                  count++
                }
              });
              if(count===this.product.data.length){
                this.product.checked=true
              }else{
                this.product.checked=false
              }
            },100)

          },
          allDeleteData(){
            this.product.data.forEach((item,index)=>{
              if(item.checked===true){
                api.del("/api/xinhua/shopcar/delete",{
                  goodsId:parseInt(this.product.data[index].goodsId)
                });
                this.product.data.splice(index,1);
              }
            });
          },
          allSubmit(){
            var buy=[];
            this.product.data.forEach((item)=>{
              if(item.checked===true){
                buy.push(item);
              }
            });
            let product=JSON.stringify(buy)
            console.log(product);
            this.$router.push({
              path: '/XhFirmOrder',
              query: {
                product:product,
                allNumber:this.allNumber,
                allPrice:this.allPrice,
              }
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
