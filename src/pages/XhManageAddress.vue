<template>
    <div class="XhManageAddress">
        <div class="XhManageAddress_header">
          <router-link to="">
            <i @click="$router.back()" class="iconfont icon-fanhui"></i>
             <span>选择地址</span>
            <span>完成</span>
          </router-link>
        </div>

        <div  v-for="i in information " class="XhManageAddress_main">
            <ul>
              <li>
                <div class="XhManageAddress_main_name">
                  <span>{{i.name}}</span>
                  <span>{{i.number}}</span>
                  <div class="XhManageAddress_main_name_dizhi">
                    <p>{{i.address}}</p>
                  </div>
                </div>
              </li>
              <li class="XhManageAddress_main_name_li">
                <van-checkbox class="edit" v-model="i.checked" checked-color="#c62f2e">
                  <span>默认地址</span>
                </van-checkbox>

                <router-link to="/XhCreateAddress">
                  <i class="iconfont icon-pan_icon">
                    编辑
                  </i>
                </router-link>
              </li>
            </ul>
        </div>

        <div class="XhManageAddress_footer">
            <router-link to="/XhCreateAddress">
              <button>新建地址</button>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
        name: "XhManageAddress",
      data(){
        return {
          information:[
            {
              checked: true,
              id:'1',
              name:"张轶博",
              number:"88888888888",
              address:"陕西省西安市雁塔区丽人科技园C座4楼"
            },
            {
              checked: false,
              id:'2',
              name:"党月",
              number:"9999999999",
              address:"山西省太原市雁塔区丽人科技园A座1楼"
            },
            {
              checked: false,
              id:'3',
              name:"刘遥",
              number:"7777777777",
              address:"河北省石家庄市雁塔区丽人科技园A座1楼"
            },

          ]
        };
      }

    }
</script>

<style scoped>
@import "../assets/css/XhManageAddress.css";
/*@import '../assets/css/XhStyleOne.css';*/

</style>
