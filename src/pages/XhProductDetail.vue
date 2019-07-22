<template>
    <div class="XhProductDetail" >
<!--      首部-->
      <xh-product-detail-top :itemId="itemId"></xh-product-detail-top>
      <!--      轮播图-->
      <xh-product-detail-top-swipe :RotaryPlantingMap="RotaryPlantingMap"></xh-product-detail-top-swipe>
      <!--     收藏-->
      <xh-product-detail-collection @jionCollection="jionCollection" @removeCollection="removeCollection" :detailData="detailData"></xh-product-detail-collection>
      <!--      优惠券~用户~出版-->
      <xh-product-detail-coupon :detailData="detailData" :itemId="itemId"></xh-product-detail-coupon>
      <!--      图片详情-->
      <xh-product-detail-picture-details></xh-product-detail-picture-details>
<!--尾部-->
      <xh-product-detail-footer :itemId="itemId" @jionCart="jionCart"></xh-product-detail-footer>
    </div>
</template>

<script>
  import api from '../XinHuaApi'
  import XhProductDetailtop from "../components/productDetail/XhProductDetailtop"
  import XhProductDetailtopswipe from "../components/productDetail/XhProductDetailtopswipe"
  import XhProductDetailCollection from "../components/productDetail/XhProductDetailCollection"
  import XhProductDetailCoupon from "../components/productDetail/XhProductDetailCoupon"
  import XhProductDetailPictureDetails from "../components/productDetail/XhProductDetailPictureDetails"
  import XhProductDetailfooter from "../components/productDetail/XhProductDetailfooter"
  export default {
    name: "XhProductDetail",
    data(){
      return{
        product:{},
        show: false,
        RotaryPlantingMap:[], //轮播图
        detailData:{
          lowPrice:"", //折后价
          originalPrice:"", //原价
          discount:"", //折扣
          title:"", //标题
          advertise:"",  //描述
          coupon:[],  //领劵
          otherAttributes:[], //作者、出版社
        },
        itemId:"",
        img:""
      }
    },
    created(){
      this.itemId=this.$route.params.goodsId;
      // console.log(this.itemId);
      api.get("/api/xinhua/product/"+this.itemId).then(data=>{
      // 判断http请求状态码,200为请求成功
      if(data.status===200){
        // 判断接口请求是否成功 0为成功
        if(data.data.status===0){
          // 成功时接收数据
          this.product=data.data.datas;
          //轮播图
          var itemDetail=this.product.fullItemDTO.itemDetail.images;
          var mainImage={
            url:""
          };
          if(itemDetail.length>1){
            this.RotaryPlantingMap=itemDetail;
          }else{
            mainImage.url=this.product.fullItemDTO.item.mainImage;
            this.RotaryPlantingMap.push(mainImage)
          }
          this.img=this.product.fullItemDTO.item.mainImage;
          //折后价格
          this.detailData.lowPrice=(this.product.fullItemDTO.skus[0].price/100).toFixed(2);
          //原价
          this.detailData.originalPrice=(this.product.fullItemDTO.skus[0].extraPrice.originalPrice/100).toFixed(2)
          //折扣率
          this.detailData.discount=(this.detailData.lowPrice/this.detailData.originalPrice*10).toFixed(1)+"折"
          // 标题
          this.detailData.title=this.product.fullItemDTO.item.name
          //描述
          this.detailData.advertise=this.product.fullItemDTO.item.advertise;
          //领劵
          for(var i=0;i<3;i++){
            this.detailData.coupon.push(this.product.activities.coupon[i].activity.label)
          }
          //作者、出版社
          var otherAttributes=this.product.fullItemDTO.item.otherAttributes[0].otherAttributes
          for(var i=0;i<otherAttributes.length;i++){
            this.detailData.otherAttributes.push(
              {
                attrKey:otherAttributes[i].attrKey,
                attrVal:otherAttributes[i].attrVal
              }
            )
          }
        }else{
          // 失败时打印错误信息
          console.log(data.data.err)
        }
      }
    }).catch(err=>{
      // 请求错误返回错误信息
      console.log(err)
    });
  },
    methods: {
      showPopup() {
        this.show = true;
      },
      //加入购物车
      jionCart(){
        var _this=this;
        var extentData={
          price:_this.detailData.lowPrice,
          img:_this.img,
          value:1,
          checked:true
        };
        api.post("/api/xinhua/shopcar/add",{
          goodsId:parseInt(_this.itemId),
          name:_this.detailData.title,
          extension:JSON.stringify(extentData)
        }).then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              console.log(_this.itemId);
              this.product=data.data.datas;
              console.log(data.data.err);
              // 成功时接收数据
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
      //加入收藏夹
      jionCollection(){
        var _this=this;
        var extentData={
          price:_this.detailData.lowPrice,
          img:_this.img,
          value:1,
          checked:true
        };
        api.post("/api/xinhua/collect",{
          goodsId:parseInt(_this.itemId),
          name:_this.detailData.title,
          extension:JSON.stringify(extentData)
        }).then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              console.log(_this.itemId);
              this.product=data.data.datas;
              console.log(data.data.err);
              // 成功时接收数据
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
      //移除收藏夹
      removeCollection(){
        var _this=this;
        api.del("/api/xinhua/collect/"+_this.itemId).then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              console.log(_this.itemId);
              this.product=data.data.datas;
              console.log(data.data.err);
              // 成功时接收数据
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
    components:{
      "xh-product-detail-top":XhProductDetailtop,
      "xh-product-detail-top-swipe":XhProductDetailtopswipe,
      "xh-product-detail-collection":XhProductDetailCollection,
      "xh-product-detail-coupon":XhProductDetailCoupon,
      "xh-product-detail-picture-details":XhProductDetailPictureDetails,
      "xh-product-detail-footer":XhProductDetailfooter
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    }
</script>

<style scoped>
@import "../assets/css/XhProductDetail.css";
/*@import "../assets/css/XhStyleOne.css";*/
</style>
