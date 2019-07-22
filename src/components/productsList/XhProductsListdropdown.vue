<template>
<!--  综合-->
    <div style="position: relative">
      <div class="dropdownProductsList" >
        <div class="dropdown-menu">
            <p @click="zongHe()" :class="{cs_red:zonghe_change}">{{zonghe}}{{zonghe_change_up?'∨':'∧'}}</p>
            <div class="xiaoliangdropdownProductsList"   @click="sale">
              <p :class="{cs_red:sale_red}">销量</p><p class="dropdownProductsListxiaoliang"  ><span :class="{cs_red:sale_red_up}">∧</span><span   class="sureXhProductsListzz" :class="{cs_red:sale_red_down}">∨</span></p>
            </div>
          <div class="xiaoliangdropdownProductsList" @click="price">
            <p :class="{cs_red:price_red}">价格</p><p  class="dropdownProductsListxiaoliang"><span :class="{cs_red:price_red_up}">∧</span><span  class="sureXhProductsListzz" :class="{cs_red:price_red_down}">∨</span></p>
          </div>
        </div>
        <van-button type="primary" @click="showPopup"  class="buttonProductsList">
          筛选
        </van-button>
        <van-popup v-model="show"    position="right" class="popupXhProductsList">
          <ul class="screenXhProductsList">
            <li>
              <div class="popup_boxXhProductsList">
                <input type="text" placeholder="最低价" > &nbsp; —— &nbsp; <input type="text" placeholder="最高价" >
              </div>
              <h3>价格区间</h3>
            </li>
            <li>
              <h3>品牌</h3>
            </li>
            <li>
              <h3>类别</h3>
            </li>
            <li v-for="item in ListTwo">
              <div class="pXhProductsListshuang"  >
                <span v-for="i in item.nameAndCounts" >{{i.name}}</span>
              </div>
              <h3>{{item.group}}</h3>
            </li>
          </ul>
        </van-popup>
      </div>
      <div :class="{XhProductsListdropdown_zonghe_cs:zonghe_class_change,XhProductsListdropdown_zonghe_cs_change:!zonghe_class_change}" class="XhProductsListdropdown-zonghe-cs">
        <div :class="{cs_red:zonghe_change_new==1}" @click="zongHeUp('综合',1)"><span>综合排序</span><span v-show="zonghe_change_new==1">√</span></div>
        <div :class="{cs_red:zonghe_change_new==2}" @click="zongHeUp('新品',2)"><span>新品优先</span><span v-show="zonghe_change_new==2">√</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsListdropdown",
      props:["ListTwo"],
      data() {
        return {
        zonghe:"综合",
          zonghe_change:true,//综合颜色
          zonghe_change_up:true,//综合升降颜色
          zonghe_change_new:true,//综合和新品颜色
          zonghe_class_change:true,//综合动画变化类名
          sale_red:false,//销量变色
          sale_red_up:false,//销量升
          sale_red_down:false,//销量降
          price_red:false,//价格变色
          price_red_up:false,//价格升
          price_red_down:false,//价格降
          //
          toLearnList:[
            'html','css','javascript','java','php'   //进行显示的数据
          ],
          showAll:false,
          show: false,
          shows:true,
          value: 0,
          switch1: false,
          switch2: false,
          option: [],
          options: []
        }
      },
      methods: {
        showPopup() {
          this.show = true;
        },
        showCount(){
          this.shows = !this.shows;
        },
        onConfirm() {
          this.$refs.item.toggle();
        },
        //综合标题方法
        zongHe(){
          this.zonghe_change_up=!this.zonghe_change_up
          this.zonghe_class_change=!this.zonghe_class_change
        },
        //综合/新品选择
        zongHeUp(item,flag){
          this.price_red=0
          this.price_red_up=0
          this.price_red_down=0
          this.sale_red=0
          this.sale_red_up=0
          this.sale_red_down=0
          this.zonghe_change=1
          this.zonghe=item
          this.zonghe_change_new=flag
          this.zonghe_class_change=!this.zonghe_class_change
          this.zonghe_change_up = 1
          if(item=="新品"){
            this.$emit("xinPinApi",30)
          }else {
            this.$emit("xinPinApi","")
          }
        },
        //销量升降
        sale(){
          this.zonghe_change_new=0
          this.zonghe_change=0
          this.price_red=0
          this.price_red_up=0
          this.price_red_down=0
          this.sale_red=1
          if(this.sale_red_up){
            this.sale_red_up=0
            this.sale_red_down=1
            this.$emit("xinPinApi",10)
          }else {
            this.sale_red_up=1
            this.sale_red_down=0
            this.$emit("xinPinApi",11)
          }
        },
        //价格升降
        price(){
          this.zonghe_change_new=0
          this.zonghe_change=0
          this.sale_red=0
          this.sale_red_up=0
          this.sale_red_down=0
           this.price_red=1
          if(this.price_red_up){
            this.price_red_up=0
            this.price_red_down=1
            this.$emit("xinPinApi",40)
          }else {
            this.price_red_up=1
            this.price_red_down=0
            this.$emit("xinPinApi",41)
          }

        }
      },


    }
</script>

<style>
  /*@import "../../assets/css/XhProductsList.css";*/
  /*@import "../../assets/css/XhStyleOne.css";*/
</style>
