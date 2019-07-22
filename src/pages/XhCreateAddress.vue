<template>
    <div class="XhCreateAddress-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">新建地址</span>
      </div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-search-result
        :search-result="searchResult"
        @save="onSave"
      />
    </div>
</template>

<script>
  import areaList from "../assets/js/三级联动"
  import api from '.././XinHuaApi'
    export default {

      name: "XhCreateAddress",
      data() {
        return {
          areaList,
          searchResult: [],
          information: {
            name: "",
            gender: "null",
            year: "",
            month: "",
            day: "",
            province: "",
            city: "",
            county: "",
            address: ""
          }
        }
      },
      methods: {
        onSave(content) {
          var information = content
          information.address = content.addressDetail
          // console.log(content);
          this.$router.push({path: "/XhAddressManagement", query: {information: information}})
          this.$toast('添加成功');
        }
      }
    }




</script>

<style scoped>
  .XhCreateAddress-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    padding: 0 0.3rem;
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  .XhCreateAddress-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .XhCreateAddress-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhCreateAddress-cs .header-cs .set-cs{
    margin-right: 0.16rem;

  }
</style>
