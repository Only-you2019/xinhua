<template>
<!--  综合-->
    <div>
      <div class="dropdownProductsList">
        <div class="dropdown-menu">
          <van-dropdown-menu active-color="#c62f2e" class="aaaXhProductsList">
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu >
          <van-dropdown-menu active-color="#c62f2e" class="aaaXhProductsList">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
          <van-dropdown-menu active-color="#c62f2e" class="aaaXhProductsList">
            <van-dropdown-item v-model="value3" :options="option3" />
          </van-dropdown-menu>
        </div>
        <van-button type="primary" @click="showPopup"  class="buttonProductsList">
          筛选
        </van-button>
        <van-popup v-model="show"    position="right" class="popupXhProductsList">
          <ul class="screenXhProductsList">
            <li>
              <h3>价格区间</h3>
              <div class="popup_boxXhProductsList">
                <input type="text" placeholder="最低价" > &nbsp; —— &nbsp; <input type="text" placeholder="最高价" >
              </div>
            </li>
            <li>
              <h3>品牌</h3>
            </li>
            <li>
              <h3>类别</h3>
            </li>
            <li v-for="item in ListTwo">
              <h3>{{item.group}}</h3>
              <div>
                <p v-for="i in item.nameAndCounts">{{i.name}}</p>
              </div>
            </li>
<!--            <li >-->
<!--              <h3>{{ListTwo[1].group}}</h3>-->
<!--              <div class="timeXhProductsList">-->
<!--                <p v-for="i in ListTwo[1].nameAndCounts">{{i.name}}</p>-->
<!--              </div>-->
<!--            </li>-->
<!--            <li>-->
<!--              <h3>{{ListTwo[2].group}}</h3>-->
<!--              <p v-for="i in ListTwo[2].nameAndCounts">{{i.name}}</p>-->
<!--            </li>-->
<!--            <li >-->
<!--              <h3>{{ListTwo[3].group}}</h3>-->
<!--              <div class="timeXhProductsList">-->
<!--                <p v-for="i in ListTwo[3].nameAndCounts">{{i.name}}</p>-->
<!--              </div>-->
<!--            </li>-->
          </ul>
        </van-popup>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsListdropdown",
      props:["ListTwo"],
      data() {
        return {
          value1: 0,
          value2: 0,
          value3: 0,
          option1: [
            { text: '综合', value: 0 },
            { text: '新品优先', value: 1 },
          ],
          option2: [
            { text: '销量', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          option3: [
            { text: '价格', value: 0 },
            { text: '从低到高', value: 1 },
            { text: '从高到低', value: 2 },
          ],
          show: false,
          shows:true,
          value: 0,
          switch1: false,
          switch2: false,
          option: [
            { text: '出版..', value: 0 },
            { text: '2018-01', value: 1 },
            { text: '2017-01', value: 2 },
            { text: '2016-04', value: 3 },
            { text: '2019-01', value: 4 },
            { text: '2017-05', value: 5 },
            { text: '2019-03', value: 6 },
            { text: '2018-07', value: 7 },
            { text: '2015-01', value: 8 },
            { text: '2016-06', value: 9 },
            { text: '2013-01', value: 10 },
          ],
          options: [
            { text: '仅看有货', value: 0 },
          ]
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
        }
      },
    }
</script>

<style scoped>
  @import "../../assets/css/XhProductsList.css";

</style>
