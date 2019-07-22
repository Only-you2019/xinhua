<template>
  <!--      优惠券~用户~出版-->
  <div>
      <!--     灰条条-->
      <div class="XhProductDetail"></div>
      <!--      优惠券~用户~出版-->
      <ul class="CouponProductDetail">
        <li v-if="detailData.coupon" >领劵
          <div class="CouponProductDetailspan">
            <span v-for="(item,index) in detailData.coupon" :key="index">{{item}}</span>
          </div>
          <span class="cProductDetail"> > </span>
        </li>

        <li v-for="(item,index) in detailData.otherAttributes" :key="index">
          <div>
              <span>
                {{item.attrKey}}
                <span class="cProductDetail"> {{item.attrVal}}</span>
              </span>
          </div>
        </li>
         <li class="addXhProductsList">
           <div>
            <span>送至</span>
               <div  class="haveliXhProductDetail">
                  <div>
                    <van-icon name="location" class="bricon"/>
                    <span style="color: rgb(153, 153, 153)">北京   北京市  朝阳市</span>
                  </div>
                    <p style="color: #c62f2e">有货</p>
                </div>
           </div>
           <span style="color: rgb(153, 153, 153);line-height: 1.6rem"> ></span>
          </li>
        <li>
          <router-link :to="path+'/'+itemId">
            用户评论
            <span class="cProductDetail" >></span>
          </router-link>
        </li>

      </ul>
      <!--      灰条条-->
      <div class="XhProductDetail"></div>
    </div>
</template>

<script>
    export default {
      name: "XhProductDetailCoupon",
      props:["detailData","itemId"],
      data(){
        return{
          show: false,
          value: 1,
          path:"/XhMyEvaluation"
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        },
        jump(itemId){
          this.$router.push({path:"/XhMyEvaluation",query:{aId:itemId}})
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductDetail.css";
  /*@import "../../assets/css/XhStyleOne.css";*/

</style>
