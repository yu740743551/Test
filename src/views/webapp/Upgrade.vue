<template>
  <div class="section">
    <div class="head">
      <i class="iconfont iconfonts icon-fanhui" @click="goback"></i>
      <span class="title">升级</span>
      <!-- <i class="iconfont  icon-saoyisao1" @click="scan"></i> -->
    </div>

    <div class="content">
      <div class="code">
        <div class="code_bg">
          <img alt src="../../assets/images/code.png">
        </div>
        <h4>官方升级地址（下方地址长按可复制）</h4>
        <h3>0x8547274222E174999aDA60D64b44b2a699E48390</h3>
        <div class="danjia fl_box">
          <p>单价/EOS</p>
          <p>{{price}}</p>
        </div>
        <div class="heji fl_box">
          <p>
            合计
            <span>x {{num}}</span>
          </p>
          <p>{{unit}}</p>
        </div>
      </div>
      <div class="file" v-bind:style="{backgroundImage:'url(' + imgL + ')'}">
        <input
          type="file"
          class="inputFile"
          ref="input"
          @change="fileChange"
          multiple
          accept="image/*"
        >
        <div v-if="isshow">
          <i ref="icot" class="iconfont icon-shangchuan"></i>
          <h3>上传截图</h3>
        </div>
      </div>
      <div class="put">
        <p>HX</p>
        <input type="text" v-model="payinfo_num">
      </div>

      <p class="btn" @click="tosucceed">提交</p>
    </div>
    <!-- <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard> -->
  </div>
</template>
<script>
// import  '@/assets/js/inputs.js'
import { Toast } from "vant";
export default {
  // components: {
  //   PayKeyboard
  // },

  data() {
    return {
      qrcode_url: "../../assets/images/code.png",
      newBuy: "",
      num: "",
      type: "",
      price: "",
      unit: "",
      imgL: "",
      isshow: true,
      payinfo_num: ""
    };
  },
  watch: {},
  created() {
    this.num = this.$route.query.num;
    this.type = this.$route.query.type;
    this.price = this.$route.query.price;
    console.log(this.price);
    this.unit = this.num * this.price;
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    tosucceed() {
      if (this.imgL == "") {
        Toast("请上传支付截图");
        return;
      }

      if (this.payinfo_num == "") {
        Toast("请填写交易号");
        return;
      }
      Toast.loading({
        mask: true,
        message: "加载中...",
        duration: 10000
      });
      this.$axios
        .post(
          "member/recharge?token=" + localStorage.getItem("token"),
          "payinfo_pic=" +
            this.imgL +
            "&payinfo_num=" +
            this.payinfo_num +
            "&rebot_type=" +
            this.type +
            "&rebot_num=" +
            this.num
        )
        .then(r => {
          Toast.clear();
          if (this.myUtils.isSuccess(r, this) == false) {
            return;
          }
          this.$router.push({
            name: "success",
            query: {
              title: "升级矿机",
              content: "恭喜您！升级成功，等待审核...",
              name: "home"
            }
          });
        });
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
        _this.isshow = false;
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
  background: #282d41;
  opacity: 1;
  z-index: 99;
}

.head .title {
  color: #38d4cb;
  line-height: 0.4rem;
  font-size: 0.2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.head i {
  color: #38d4cb;
  line-height: 0.45rem;
  font-size: 0.22rem;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
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