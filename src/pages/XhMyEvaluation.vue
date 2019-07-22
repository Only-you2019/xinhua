<template>
    <div class="XhMyEvaluation pageBody">
<!--      头部-->
      <xh-my-evaluation-top></xh-my-evaluation-top>
<!--      中间评论-->
      <my-xh-my-evaluation-inner :evaluation="evaluation"></my-xh-my-evaluation-inner>
<!--      尾部-->
      <xh-product-detail-footer></xh-product-detail-footer>
    </div>
</template>

<script>
  import api from '../XinHuaApi'
  import XhProductDetailfooter from '../components/productDetail/XhProductDetailfooter'
  import XhMyEvaluationtop from '../components/MyEvaluation/XhMyEvaluationtop'
  import myXhMyEvaluationinner from '../components/MyEvaluation/myXhMyEvaluationinner'
    export default {
      name: "XhMyEvaluation",
     data() {
      return {
        itemId:"",
        evaluation:{
          userName:"",
          context:""
        }
      };
    },
      created(){
        this.itemId=this.$route.params.itemId;
         console.log(this.itemId);
        api.get("/api/xinhua/product/other/data/"+this.itemId).then(data=>{
          // 判断http请求状态码,200为请求成功
          if(data.status===200){
            // 判断接口请求是否成功 0为成功
            if(data.data.status===0){
              // 成功时接收数据
              var comment=data.data.datas.itemComments.commentList
              for(var i=0;i<comment.length;i++){
                this.evaluation.userName=comment[i].parent.userName
                this.evaluation.context=comment[i].parent.context
              }
              console.log(this.evaluation);
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
      components:{
        'xh-my-evaluation-top':XhMyEvaluationtop,
        'my-xh-my-evaluation-inner':myXhMyEvaluationinner,
        'xh-product-detail-footer':XhProductDetailfooter
      }
    }
</script>

<style scoped>
  @import "../assets/css/XhMyEvaluation.css";

</style>
