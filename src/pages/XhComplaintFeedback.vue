<template>
    <div class="XhComplaintFeedback-cs">
      <div class="header-cs">
        <span class="iconfont icon-fanhui" @click="$router.back()"></span>
        <span class="set-cs">意见反馈</span>
        <span @click="showToast">提交</span>
			
      </div>
      <div class="type-cs">
        <div>
          <span class="type-cs-a">*</span>
          <span class="type-cs-b">反馈问题类型:</span>
        </div>
        <div>
          <span @click="flag=1" :class="{'change-cs':flag==1}">新功能建议</span>
          <span @click="flag=2" :class="{'change-cs':flag==2}">体验问题</span>
          <span @click="flag=3" :class="{'change-cs':flag==3}">功能异常</span>
        </div>
      </div>
      <div class="describe-cs">
        <div>
          <span  class="describe-cs-1">*</span>
          <span  class="describe-cs-2">反馈描述:</span>
        </div>
       <div>
         <textarea class="textarea-cs" rows="10" placeholder="请输入您反馈的具体问题"></textarea>
       </div>
      </div>
      <div class="upload-pic">
        <p class="upload-pic-a">上传图片(最多3张)</p>
        <!-- <van-uploader :after-read="afterRead" /> -->
				<van-uploader v-model="fileList" multiple   :max-count="3"  :before-read="beforeRead" />
      </div>
      <div class="contact-way">
        <div>
          <span class="contact-way-a">*</span>
          <span>联系方式:</span>
        </div>
        <input type="text">
      </div>
    </div>
</template>

<script>
    export default {
        name: "XhComplaintFeedback",
         data() {
    return {
      fileList: []
    }
  },
	methods: {
		
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== 'image/png') {
        Toast('请上传 png 格式图片');
        return false;
      }
    
      return true;
    },
    // 返回 Promise
    asyncBeforeRead(file) {
      return new Promise((resolve, reject) => {
        if (file.type !== 'image/png') {
          Toast('请上传 png 格式图片');
          reject();
        } else {
          resolve();
        }
      });
    },
		showToast() {
		            this.$toast({
		                message: "提交成功",
		              })
									this.$router.push('/XhCountSetting')
		  },
  },
	
		

	
        }
      
    
</script>

<style scoped>
  .XhComplaintFeedback-cs .textarea-cs{
    width: 100%;
  }
  .contact-way-a{
    color: red
  }
  .upload-pic-a{
    margin-bottom: 0.14rem
  }
  .describe-cs-1{
    color: red
  }
  .describe-cs-2{
    color: #79797b
  }
  .XhComplaintFeedback-cs{
    background-color: #f7f7f7;
    height: 100%;
    width: 100%;
    text-align: center;
    /*padding: 0 0.3rem;*/
    font-size: 15px;
  }
  .XhComplaintFeedback-cs .header-cs{
    font-size: 16px;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 0.3rem;
  }
  .XhComplaintFeedback-cs .header-cs .icon-fanhui{
    float: left;
    color: red;
  }
  .XhComplaintFeedback-cs .header-cs .set-cs{
    /*margin-right: 0.16rem;*/
  }
  .XhComplaintFeedback-cs .header-cs span:last-child{
    float: right;
    color:#c72f2e ;
  }
  .XhComplaintFeedback-cs .type-cs{
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: white;
    height: 1.72rem;
    justify-content: center;
    padding: 0 0.3rem;
  }
  .XhComplaintFeedback-cs .type-cs div:nth-child(2){
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.14rem;
  }
  .XhComplaintFeedback-cs .type-cs .type-cs-a{
    color: red
  }
  .XhComplaintFeedback-cs .type-cs .type-cs-b{
    color: #79797b
  }
  .XhComplaintFeedback-cs .type-cs div:nth-child(2) span{
    display: inline-block;
    width:2rem ;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #eaebed;
  }
  .change-cs{
    border: 1px solid #c72f2e;
  }
  .XhComplaintFeedback-cs .describe-cs{
    width: 100%;
    height: 5rem;
    background-color: white;
    margin-top: 0.2rem;
    padding: 0.2rem 0.3rem;
    text-align: start;
  }
  .XhComplaintFeedback-cs .upload-pic{
    height: 2.68rem;
    width: 100%;
    background-color: white;
    text-align: start;
    padding:0.3rem;
    margin-top: 0.2rem;
  }
  .XhComplaintFeedback-cs .contact-way{
    height: 1.96rem;
    background-color: white;
    margin-top: 0.2rem;
    text-align: start;
    padding:0.3rem;
  }
  .XhComplaintFeedback-cs .contact-way input{
    width: 100%;
    height: 0.66rem;
    margin-top: 0.2rem;
    border: 1px solid #c0c0c0;
    padding:0 0.3rem;
  }
</style>
