<template>
  <!--      仅看有货-->
  <div>
      <div class="onlyProductsList">
        <!--        <p>仅看有货</p>-->
        <div class="InstockssonlyProductsList">
           <p>仅看有货</p>
        </div>
        <!--        <p>语种  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item :title="ListTwo[0].group" ref="item" >
              <van-switch-cell v-model="switch1"  v-for="i in ListTwo[0].nameAndCounts" :title="i.name" />
              <div class="onlyProductsListchian"  >
                <van-button block type="info" @click="onConfirm"  class="ResetsonlyProductsList" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="ResetonlyProductsList">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
        <!--        <p>出版  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
        </div>
        <!--        <p>语言  v</p>-->
        <div class="InstocksonlyProductsList">
          <van-dropdown-menu active-color="#c62f2e" class="InstockonlyProductsList">
            <van-dropdown-item :title="ListTwo[2].group" ref="item" >
              <van-switch-cell v-model="switch2" v-for="i in ListTwo[2].nameAndCounts" :title="i.name" />
              <div  class="onlyProductsListchian">
                <van-button block type="info" @click="onConfirm"  class="ResetsonlyProductsList" >重置</van-button>
                <van-button block type="info" @click="onConfirm" class="ResetonlyProductsList">确认</van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhProductsListonly",
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
          option: [],
          // options: [
          //   { text: '仅看有货', value: 0 },
          // ]
        }
      },
      created(){
          var per ={}
          per.text=this.ListTwo[1].group
          per.value=0
        this.option.push(per)
        this.ListTwo[1].nameAndCounts.forEach((i,index)=>{
          var per1 ={}
          per1.text=i.name
          per1.value=index+1
          this.option.push(per1)
        })
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
