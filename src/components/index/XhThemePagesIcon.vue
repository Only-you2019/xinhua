<template>
  <div class="XhThemePagesIcon">
    <div class="XhThemePagesIcon-icons">
      <swiper>
        <swiper-slide>
          <div
            class="XhThemePagesIcon-icon" 
            v-for="item of iconList"
            :key="item.id"
          >
            <div class="XhThemePagesIcon-icon-img">
              <img class="XhThemePagesIcon-icon-img-content" :src="'http://api.hll666.xyz/api/xinhua/img?imgUrl='+urlEncode(item.imgUrl)">
            </div>
            <p class="XhThemePagesIcon-icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XhThemePagesIcon',
  data () {
    return {
      iconList: [
          {
            id: "0001",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/e6822971-4a3f-4dde-8128-5601d7519b71.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "畅销榜"
          },{
            id: "0002",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/19b5b4f8-36c9-42b0-9e2d-13ece9b01563.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "儿童文学"
          },{
            id: "0003",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/c1d1a56e-21aa-4421-a39d-9ca8a28c87fa.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "动漫绘本"
          },{
            id: "0004",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/122f5334-dd71-412b-9248-23fa9012cfdc.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "科普百科"
          },{
            id: "0005",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/edac76ba-ff1c-481f-bc10-b64ecb0aa49d.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "益智游戏"
          },{
            id: "0006",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/89b6743e-3fb3-43d6-a7a6-a1970814c3ed.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "低幼读物"
          },{
            id: "0007",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/d2bd129f-ef8e-4119-bf48-4e01ef97624a.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "语言培养"
          },{
            id: "0008",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/78da090a-f494-409e-9a77-4b96dde7bc07.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "外文童书"
          },{
            id: "0009",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/03fb0e2f-9962-4c0c-810c-de3ccb0d8c8a.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "品牌管"
          },{
            id: "00010",
            imgUrl: "https://img1.xinhuashudian.com/images/2019/05/30/a05a0788-e77e-48f9-b2ce-171e26fac7c5.png?x-oss-process=image/resize,m_lfit,limit_0,w_96,h_96",
            desc: "更多专题"
          }],
      swiperOption: {
        autoplay: false,
      }
    }
  },
  methods:{
    urlEncode(str){
      if(str.indexOf("https:")==-1){
        str="https:"+str
        return encodeURI(str)
      }else{
        return encodeURI(str)
      }
    },
  }
}
</script>

<style>
 .XhThemePagesIcon-icons .swiper-container{
    height: 0;
    padding-bottom: 50%;
  }
  .XhThemePagesIcon {
    background: #fff;
  }
  .XhThemePagesIcon-icons {
    padding-top: .05rem;
    border-bottom: 1px solid #eee;
  }
  .XhThemePagesIcon-icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 20%;
    height: 0;
    padding-bottom: 25%;
  }
  .XhThemePagesIcon-icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
    padding: .1rem;
    bottom: .44rem;
  }
  
  .XhThemePagesIcon-icon-img-content {
    display: block;
    margin: 0 auto;
    height: 100%;
  }
  .XhThemePagesIcon-icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
