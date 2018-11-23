<template>
    <div class="section">
        <div class="head">
          <span class="title">提币成功</span>
         </div>
        
        <div class="content">
            <img src="../../assets/images/icon_ok@2x.png" alt="">
            <h3>恭喜您提币成功</h3>            
            <p class="btn btn_ture" @click="succeed">完成</p>
         
        </div>
    </div>
</template>
<script>
import { Toast } from "vant";
// import  '@/assets/js/inputs.js'
export default {
  data() {
    return {};
  },
  methods: {
    succeed() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
* {
  box-sizing: border-box;
}
.head {
  height: 0.4rem;
  position: fixed;
  top: 0.2rem;
  width: 100%;
  opacity: 1;
  z-index: 999;
}

.head .title {
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.content {
  img {
    width: 0.64rem;
    height: 0.64rem;
    margin: 1.17rem auto 0.2rem auto;
  }
  h3 {
    color: #d2e6e6;
    font-size: 0.12rem;
    text-align: center;
  }
}

.btn {
  width: 3rem;
  height: 0.4rem;
  color: #fff;
  font-size: 0.12rem;
  line-height: 0.4rem;
  text-align: center;
  margin: 0 auto;
}
.btn_ture {
  margin: 0.5rem auto 0.08rem auto;
  // background: linear-gradient(-90deg, #21fff6, #0a42ff);
  background: #e86161;
  border: 0.04rem solid #c75757;
  box-sizing: content-box;
}
</style>



