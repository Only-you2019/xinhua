<template>
    <div class="XhNavPagesHeader">
        <div class="XhNavPagesHeader-return">
            <router-link to="/">
                <i class="iconfont XhNavPagesHeader-icon">&#xe625;</i>
            </router-link>
        </div>
        <div class="XhNavPagesHeader-text">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "XhNavPagesHeader",
        props:{
          title: String
        }
    }
</script>

<style scoped>
  .XhNavPagesHeader {
      display: flex;
      z-index: 9;
      background: #f7f7f7;
      font-size: .35rem;
      line-height: .86rem;
      width: 100%;
      height: 0.86rem;
      position: fixed;
      top: 0;
      left: 0;
  }
  .XhNavPagesHeader-return {
    margin-left: .2rem;
  }
  .XhNavPagesHeader-icon {
    color: #c62f2e;
  }
  .XhNavPagesHeader-text {
    flex: 1;
    text-align: center;
  }
</style>
