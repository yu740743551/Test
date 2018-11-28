<template>
    <div class="section"> 
        <div class="head">
            <i class="iconfont icon-fanhui" @click="goback"></i>
            <span class="title">联系客服</span>
        </div>       
        <div class="centent">
            
            <img src="../../assets/images/icon_contact.png" alt="">
            <h3>客服微信号：TY--120</h3>
            <h4>修改登录密码/支付密码联系客服</h4>

        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
// import  '@/assets/js/inputs.js'
export default {
  data() {
    return {
     
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },

    
    
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
.section {
  height: 100vh;
  overflow: hidden;
}

.head {
  height: 0.7rem;
  position: fixed;
  top: 0;
  width: 100%;
   background: #282D41;
  padding-top: 0.3rem;
  opacity: 1;
  z-index: 99;
}

.head .title {
  color: #38D4CB;
  line-height: 0.4rem;
  font-size: 0.2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.head i {
  color: #38D4CB;
  line-height: 0.45rem;
  font-size: 0.22rem;
  text-align: left;
  padding: 0.1rem;
}
.centent {
  width: 3.45rem;
  margin: 1.6rem auto 0 auto;
  color: #c7cad3;
  box-sizing: border-box;
  img{
      width:1.27rem;
      height:1.03rem;
      margin: 0 auto;
  }
  h3 {
    color: #E86161;
    font-size: 0.17rem;
    text-align: center;
    margin-top: 0.3rem;
    font-weight: bold;
  }
  h4{
     color: #E86161;
    font-size: 0.12rem;
    text-align: center;
    margin-top: 0.1rem; 
  }

}
</style>



