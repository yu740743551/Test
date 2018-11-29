<template>
  <div class="section">
    <div class="sections">
      <div class="head">
        <i class="iconfont icon-fanhui" @click="goback"></i>
        <span class="title">提币</span>
      </div>
      <div class="content">
        <div class="top">
          <h3>{{curr_total}} {{userInfos.curr}}</h3>
          <h4>可用金额</h4>
        </div>
        <form class="main">
          <div class="con_row">
            <div class="con_col tel">
              <h3>
                提币数量
                <span>({{userInfos.curr}})</span>
              </h3>
              <input
                type="number"
                placeholder="请输入提币数量"
                value
                v-model.trim.lazy="number"
                @click="myUtils.iosActive($event)"
                ref="2"
                id="fok1"
                onkeyup="value=value.replace(/[^\d]/g,'')"
              >
            </div>
            <p style="color:#777684">
              矿工费：
              <span>{{charge_num}}</span>
            </p>
          </div>
          <div class="con_row">
            <div class="con_col tel">
              <h3>提币地址</h3>
              <input
                class="dizhi"
                @click="myUtils.iosActive($event)"
                ref="1"
                id="fok"
                type="text"
                placeholder="请输入提币地址"
                v-model="mobile"
              >
              <!-- <p class="add" @click="scan">添加</p> -->
            </div>
          </div>
        </form>
        <p class="btn btn_ture" @click="getmoney">提币</p>
      </div>
    </div>
    <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
  </div>
</template>
<script>
import { Toast } from "vant";
import PayKeyboard from "@/components/PayKeyboard";
import { mapMutations, mapGetters } from "vuex";
// import  '@/assets/js/inputs.js'
export default {
  components: {
    PayKeyboard
  },
  data() {
    return {
      mobile: "",
      number: "", //用户输入的转账额度
      curr_total: "", //可用eos总数量
      charge: "", //提币手续费比例
      charge_num: "0 EOS", //手续费金额
      newBuy: "",
      token: window.localStorage.getItem("token")
    };
  },
  watch: {
    number: function() {
      this.charge_num =
        parseInt((this.charge * this.number * 100) / 100) + " EB";
    }
  },
  computed: {
    ...mapGetters(["userInfos"])
  },
  created() {
    this.mobile = this.$route.query.mobile;
    Toast.loading({
      mask: true,
      message: "加载中...",
      duration: 10000
    });
    // 获取转账信息接口
    this.$axios
      .get(
        "/member/getTransferInfo?token=" + window.localStorage.getItem("token")
      )
      .then(r => {
        Toast.clear();
        if (this.myUtils.isSuccess(r, this) == false) {
          return;
        }
        this.list = r.data.data;
        this.curr_total = this.list.curr_total;
        this.charge = this.list.withdraw_charge;
      })
      .catch(err => {
        Toast("网络连接失败");
      });
  },
  methods: {
    goback() {
      this.$router.push({ name: "home" });
    },

    // scan() {
    //   this.$router.push({
    //     name: "ecanPay"
    //   });
    // },

    getmoney() {
      if (this.myUtils.isNull(this.mobile) == true) {
        Toast("提币数量不能为空");
        return;
      } else if (this.number < 5) {
        Toast("提币数量不能小于5");
        return;
      } else if (Number(this.number) > Number(this.curr_total)) {
        this.number = this.curr_total;
        Toast("提币数量不能大于可用eb总数量");
        return;
      }
      if (this.myUtils.isNull(this.mobile) == true) {
        Toast("提币账户不能为空");
        return;
      }
      this.newBuy = "请输入您的支付密码";
      this.$refs["sendVal"].show();
    },
    getPwd(val) {
      if (val.length === 6) {
        Toast.loading({
          mask: true,
          message: "加载中...",
          duration: 10000
        });
        this.$axios
          .post(
            "/member/withdraw?token=" + this.token,
            "&withdraw_total=" +
              this.number +
              "&wallet_address=" +
              this.mobile +
              "&pay_pwd=" +
              val
          )
          .then(r => {
            Toast.clear();
            if (r) {
              console.log(r);
              this.$refs["sendVal"].close();
              this.$refs.sendVal.$children[0].remov();
              if (this.myUtils.isSuccess(r, this) == false) {
                return;
              }
              Toast({
                message: r.data.msg
              });
              this.$router.push({
                name: "success",
                query: {
                  title: "提币",
                  content: "恭喜您！提币成功，等待审核...",
                  name: "home"
                }
              });
            }
          })
          .catch(err => {
            Indicator.close();
            Toast("网络连接失败");
          });
      }
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
  overflow: hidden;
}
.sections {
  height: 100vh;
  background: #282d41;
}
.head {
  height: 0.5rem;
  position: fixed;
  top: 0.3rem;
  width: 100%;
  opacity: 1;
  z-index: 999;
  background: transparent;
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
  line-height: 0.4rem;
  font-size: 0.22rem;
  text-align: left;
  padding: 0.1rem;
}

.content {
  height: 100vh;
  .main {
    width: 3rem;
    margin: 0 auto;
  }
  .top {
    width: 100%;
    height: 2.2rem;
    background: linear-gradient(-180deg, #38d4cb, #282d41);
    overflow: hidden;
    margin-bottom: 0.44rem;
    h3 {
      font-size: 0.36rem;
      color: #fff;
      text-align: center;
      margin: 1rem 0 0.1rem 0;
    }
    h4 {
      color: #f1f1f1;
      font-size: 0.14rem;
      text-align: center;
    }
  }
  .con_row {
    .con_col {
      position: relative;
    }

    h3 {
      color: #d2e6e6;
      font-size: 0.15rem;
      text-align: left;
      margin-bottom: 0.2rem;
      span {
        color: #777684;
      }
    }
    h4 {
      font-size: 0.14rem;
      float: left;
      width: 30%;
      height: 0.28rem;
      line-height: 0.28rem;
      color: #d2e6e6;
    }
    h4 + p {
      float: right;
      width: 70%;
      border: 0;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 0.15rem;
      color: #21fff6;
    }
    input {
      width: 100%;
      height: 0.28rem;
      line-height: 0.28rem;
      font-size: 0.15rem;
      color: #21fff6;
      background: transparent;
      padding: 0.08rem 0;
      border-bottom: 1px solid #7f7e8b;
      border-radius: 0;
    }
    input.dizhi {
      border-bottom: 1px solid #7f7e8b;
    }
    .tip {
      color: #777684;
      font-size: 0.12rem;
    }
    p {
      color: #21fff6;
      width: 100%;
      word-wrap: break-word;
      font-size: 0.13rem;
    }
    .add {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0.4rem;
      height: 0.28rem;
      line-height: 0.1rem;
      font-size: 0.12rem;
      text-align: right;
      padding: 0.08rem 0;
      color: #d2e6e6;
    }
  }
}
.btn {
  width: 3rem;
  height: 0.4rem;
  color: #fff;
  font-size: 0.15rem;
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
.mt-10 {
  margin-top: 0.1rem;
}
</style>



