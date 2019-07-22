<template>
  <div>
  <div class="XhProductsListonly-cs">
    <div @click="one" :class="{XhProductsListonly_cs_red:one_red==1}">仅看有货</div>
    <div @click="two" :class="{XhProductsListonly_cs_red:two_red==2}">{{two_title}}&nbsp{{two_ico?'∨':'∧'}}</div>
    <div @click="three" :class="{XhProductsListonly_cs_red:three_red==3}">{{three_title}}&nbsp{{three_ico?'∨':'∧'}}</div>
    <div @click="four" :class="{XhProductsListonly_cs_red:four_red==4}">{{four_title}}&nbsp{{four_ico?'∨':'∧'}}</div>
  </div>
    <div ref="two_reds" class="XhProductsListonly-two-cs" v-show="box_hidden==2">
      <div :class="{box_select_red:a.checked}" @click="twoPer(a,b)" v-for="(a,b) in ListTwo[0].nameAndCounts" :key="b"><span>{{a.name}}</span><span>√</span></div>
      <div>
        <div @click="twoReset" style="background-color: white;border: whitesmoke 1px solid">重置</div>
        <div @click="twoApi" style="background-color:#c72f2e;color: white;">确定</div>
      </div>
    </div>
    <div ref="three_reds" class="XhProductsListonly-two-cs" v-show="box_hidden==3">
      <div :class="{box_select_red:a.checked}" @click="threePer(a,b)" v-for="(a,b) in ListTwo[1].nameAndCounts" :key="b" v-if="ListTwo[1]"><span>{{a.name}}</span><span>√</span></div>
      <div>
        <div @click="threeReset" style="background-color: white;border: whitesmoke 1px solid">重置</div>
        <div @click="twoApi" style="background-color:#c72f2e;color: white;">确定</div>
      </div>
    </div>
    <div ref="four_reds" class="XhProductsListonly-two-cs" v-show="box_hidden==4">
      <div :class="{box_select_red:a.checked}" @click="fourPer(a,b)" v-for="(a,b) in ListTwo[2].nameAndCounts" :key="b" v-if="ListTwo[2]"><span>{{a.name}}</span><span>√</span></div>
      <div>
        <div @click="fourReset" style="background-color: white;border: whitesmoke 1px solid">重置</div>
        <div @click="twoApi" style="background-color:#c72f2e;color: white;">确定</div>
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
          two_title:this.ListTwo[0].group,
          three_title:this.ListTwo[1].group,
          four_title:this.ListTwo[2].group,
          one_red:0,
          two_red:0,
          three_red:0,
          four_red:0,
          option: [],
          two_ico:true,
          three_ico:true,
          four_ico:true,
          box_hidden:0, //动画盒子显隐
          two_lists:this.ListTwo[0].nameAndCounts,
          three_lists:this.ListTwo[1].nameAndCounts,
          four_lists:this.ListTwo[2].nameAndCounts

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
        one(){
          if(this.one_red ==1){
            this.one_red =0
          }else {
            this.one_red =1
            this.$emit("twoApi",{inStock:"1"})
          }
          this.box_hidden=0
        },
        two(){
          this.two_ico=!this.two_ico
         if( this.box_hidden==2){
           this.box_hidden=0
         }else {
           this.box_hidden=2
         }
        },
        three(){
          this.three_ico=!this.three_ico
          if( this.box_hidden==3){
            this.box_hidden=0
          }else {
            this.box_hidden=3
          }
        },
        four(){
          this.four_ico=!this.four_ico
          if( this.box_hidden==4){
            this.box_hidden=0
          }else {
            this.box_hidden=4
          }
        },
        //点击第二个盒子每一项内容高亮隐藏
        twoPer(item,index){
          if(!item.checked){
            item.checked=1
            this.$set(this.two_lists,index,item)
          }else {
            item.checked=0
            this.$set(this.two_lists,index,item)
          }
        },
        threePer(item,index){
          if(!item.checked){
            item.checked=1
            this.$set(this.three_lists,index,item)
          }else {
            item.checked=0
            this.$set(this.three_lists,index,item)
          }
        },
        fourPer(item,index){
          if(!item.checked){
            item.checked=1
            this.$set(this.four_lists,index,item)
          }else {
            item.checked=0
            this.$set(this.four_lists,index,item)
          }
        },
        //第二个盒子内容高亮全取消
        twoReset(){
          for (var i=0;i<this.two_lists.length;i++){
            this.two_lists[i].checked=0
            this.$set(this.two_lists,i,this.two_lists[i])
          }
        },
        threeReset(){
          for (var i=0;i<this.three_lists.length;i++){
            this.three_lists[i].checked=0
            this.$set(this.three_lists,i,this.three_lists[i])
          }
        },
        fourReset(){
          for (var i=0;i<this.four_lists.length;i++){
            this.four_lists[i].checked=0
            this.$set(this.four_lists,i,this.four_lists[i])
          }
        },
        twoApi(){
          this.box_hidden=0
          var two_all=[]
          var three_all=[]
          var four_all=[]
          var twoApiSelect = this.$refs.two_reds.getElementsByClassName("box_select_red")
          var threeApiSelect = this.$refs.three_reds.getElementsByClassName("box_select_red")
          var fourApiSelect = this.$refs.four_reds.getElementsByClassName("box_select_red")
          for (var i=0;i<twoApiSelect.length;i++){
            two_all.push(twoApiSelect[i].children[0].innerHTML)
          }
          for (var i=0;i<threeApiSelect.length;i++){
            three_all.push(threeApiSelect[i].children[0].innerHTML)
          }
          for (var i=0;i<fourApiSelect.length;i++){
            four_all.push(fourApiSelect[i].children[0].innerHTML)
          }
          var two_join = two_all.join("_")
          var three_join = three_all.join("_")
          var four_join = four_all.join("_")
          if(twoApiSelect.length){
            this.two_red=2
            this.two_title=two_join
          }else {
            this.two_red=0
            this.two_title=this.ListTwo[0].group
          }
          if(threeApiSelect.length){
            this.three_red=3
            this.three_title=three_join
          }else {
            this.three_red=0
            this.three_title=this.ListTwo[1].group
          }
          if(fourApiSelect.length){
            this.four_red=4
            this.four_title=four_join
          }else {
            this.four_red=0
            this.four_title=this.ListTwo[2].group
          }

          var two_join_all=this.ListTwo[0].group+":"+two_join
          var three_join_all=this.ListTwo[1].group+":"+three_join
          var four_join_all=this.ListTwo[2].group+":"+four_join
          var totall_join=two_join_all+","+three_join_all+","+four_join_all
          this.$emit("twoApi",{attributes:totall_join})
        }
      },
    }
</script>

<style>
  /*@import "../../assets/css/XhProductsList.css";*/


</style>
