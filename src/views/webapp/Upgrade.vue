<template>
    <div class="section">
            <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="goback"></i>
            <span class="title">升级</span>
            <!-- <i class="iconfont  icon-saoyisao1" @click="scan"></i> -->
            </div>
            
            <div class="content">
                <div class="code">
                    <div class="code_bg">
                        <img  alt="" src="../../assets/images/code.png">
                    </div>
                    <h4>官方升级地址（下方地址长按可复制）</h4>
                    <h3>0x8547274222E174999aDA60D64b44b2a699E48390</h3>
                     <div class="danjia fl_box">
                         <p>单价/EOS</p>
                         <p>20000.00</p>
                    </div>
                    <div class="heji fl_box">
                         <p>合计 <span>x {{num}}</span></p>
                         <p>200000.00</p>
                    </div>
                </div>
                <div class="file">
                    <input type="file" class="inputFile" ref="input" @change="fileChange" multiple accept="image/*">
                    <i class="iconfont icon-shangchuan"></i>
                    <h3>上传截图</h3>
                </div>
                <div class="put">
                    <p>HX</p>
                    <input type="text" >
                </div>
               
                
                <p class="btn " @click="tosucceed">提交</p>
            
            </div>
        <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
    </div>
    
</template>
<script>
import PayKeyboard from "@/components/PayKeyboard";
import { Toast } from "mint-ui";

// import  '@/assets/js/inputs.js'
export default {
  components: {
    PayKeyboard
  },

  data() {
    return {
      qrcode_url: "../../assets/images/code.png",
      newBuy: "",
      num: "",
    };
  },
  watch: {},
  created() {
      this.num = this.$route.query.num;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    tosucceed() {
      this.newBuy = "请输入您的支付密码";
      this.$refs["sendVal"].show();
    },
    getPwd(val) {
      if (val.length === 6) {
        console.log(val);
        this.$refs["sendVal"].close();
        this.$router.push({ name: "upgradeSucceed" });
      }
    },
    fileChange() {
      let file = this.$refs.input.files[0];

      var _this = this;
      var reader = new FileReader();
      reader.readAsDataURL(file); // 读出 base64

      reader.onloadend = function() {
        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
        var dataURL = reader.result;

        _this.imgL = dataURL.replace(/\+/g, "%2B");
        _this.issgows = false;
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
* {
  box-sizing: border-box;
}

.section {
  height: 100vh;
//   overflow: hidden;
}

.head {
  height: 0.7rem;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 0.3rem;
  background: #282D41;
  opacity: 1;
  z-index: 99;
}

.head .title {
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.head i {
  color: #fff;
  line-height: 0.45rem;
  font-size: 0.3rem;
  text-align: left;
  padding: 0.1rem;
}

.head i:last-child {
  float: right;
  line-height: normal;
  font-size: 0.25rem;
}

.content {
  width: 3rem;
//   height: 100%;
  margin: 0.6rem auto 0 auto;
  .code {
    width: 3rem;
    border-radius: 0.08rem;
    margin: 0 auto;
    padding: 0.2rem 0;
    .code_bg {
      width: 1.62rem;
      height: 1.62rem;
      margin: 0 auto;
      background: url(../../assets/images/code_bg.png) no-repeat;
      background-size: 100% 100%;
      padding: 0.09rem;
    }
    h3:first-child {
      font-size: 0.15rem;
      color: #000;
      text-align: center;
      margin: 0 auto;
      font-weight: 300;
    }
    img {
      width: 1.44rem;
      height: 1.44rem;
    }
    h4 {
      font-size: 0.1rem;
      color: #fff;
      text-align: center;
      margin: 0.1rem 0;
    }
    h3 {
      font-size: 0.12rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.15rem;
    }
    .fl_box {
      font-size: 0.13rem;
      color: #fff;
      display: flex;
      p:nth-child(1) {
        display: inline-block;
        width: 50%;
        text-align: left;
        padding-left: 0.7rem;
      }
      p:nth-child(2) {
        display: inline-block;
        width: 50%;
        text-align: left;
        padding-left: 0.2rem;
      }
    }
    .danjia {
      margin-bottom: 0.1rem;
    }
    .danjia.fl_box {
      color: #38d4cb;
    }
    .heji.fl_box {
      color: #f56f6f;
      p span {
        display: inline-block;
        width: 0.32rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        color: #fff;
        background: #5f9b8b;
      }
    }
  }
  .file {
    width: 3rem;
    height: 1.44rem;
    border: 1px solid #38d4cb;
    border-radius: 2px;
    margin: 0 auto;
    position: relative;
    input {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
    i {
      display: inline-block;
      width: 100%;
      font-size: 0.76rem;
      color: #38d4cb;
      text-align: center;
      margin-top: 0.28rem;
    }
    h3 {
      color: #fff;
      font-size: 0.1rem;
      text-align: center;
      margin-top: -0.15rem;
    }
  }
  .put {
    margin: 0.2rem auto 0.3rem auto;
    p {
      font-size: 0.13rem;
      color: #fff;
    }
    input {
      width: 100%;
      border-bottom: 1px solid #d6d6d6;
      background: transparent;
      color: #fff;
    }
  }
}

.btn {
  width: 3rem;
  height: 0.4rem;
  color: #fff;
  font-size: 0.17rem;
  line-height: 0.4rem;
  text-align: center;
  margin: 0 auto;
  background: #e86161;
  border: 2px solid #c75757;
}
</style>