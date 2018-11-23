<template>
  <div>
    <div class="scan">
      <div class="scan_pay">
        <div id="bcid">
          <div style="height:100%"></div>
        </div>
        
        <footer>
          
          <button class="but">
                <p @click="goback">返回</p>
                <p style="border-right:none" @click="shanguang">手电筒</p>
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
let scan = null;
import { Toast } from "vant";
export default {
  data() {
    return {
      codeUrl: "",
      code: false
    };
  },
  created() {},
  destroyed() {
    this.closeScan();
  },
  methods: {
    goback() {
      this.closeScan();
      this.$router.go(-1);
    },
    startRecognize() {
      let that = this;
      if (!window.plus) return;
      scan = new plus.barcode.Barcode("bcid");
      scan.onmarked = onmarked;

      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        result = result.replace(/\n/g, "");
        that.codeUrl = result;

        // let data = {
        //   mobile: that.codeUrl
        // };
        // that.$axios.post("/user/qrcodeUrl", data).then(r => {
        //   if (r.data.code != 200) {
        //     Toast({
        //       message: r.data.msg,
        //       position: "bottom"
        //     });
        //     that.closeScan();
        //     that.$router.push({ path: "/home" });
        //     return;
        //   }
        //   that.closeScan();
        //   that.$router.push({
        //     path: "/transfers/totransfer",
        //     query: {
        //       mobile: that.codeUrl
        //     }
        //   });
        // });
        // that.closeScan();
        that.closeScan();
        that.$router.push({
          path: "/extract/Extract",
          query: {
            mobile: that.codeUrl
          }
        });
      }
      this.startScan();
    },
    //开始扫描
    startScan() {
      if (!window.plus) return;
      scan.start();
    },
    //关闭扫描
    cancelScan() {
      if (!window.plus) return;
      scan.cancel();
    },
    //关闭条码识别控件
    closeScan() {
      if (!window.plus) return;
      scan.close();
    },
    shanguang() {
      if (!window.plus) return;
      if (this.code == true) {
        this.code = false;
        scan.setFlash(this.code);
      } else {
        this.code = true;
        scan.setFlash(this.code);
      }
    }
  },
  mounted() {
    this.startRecognize();
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
.header {
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  .top {
    padding: 20px;
    .icon-tubiaolunkuo- {
      font-size: 0.3rem;
      color: #000;
    }
  }
}

.scan {
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  .scan_pay {
    height: 100vh;
    #bcid {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0px;
      bottom: 0.4rem;
    }
    footer {
      position: absolute;
      left: 0;
      bottom: 0;
      line-height: 2rem;
      z-index: 2;
      width: 100%;
    }
    .but {
      position: absolute;
      width: 100%;
      height: 0.4rem;
      bottom: 0;
      border: 0;
      outline: none;
      background: #fff;
      font-size: 0.22rem;
      display: flex;

      p {
        width: 50%;
        height: 0.4rem;
        border-right: 1px solid #ccc;
        line-height: 0.4rem;
      }
    }
  }
}
</style>
