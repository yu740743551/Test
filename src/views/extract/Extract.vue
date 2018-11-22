<template>
    <div class="section">
        <div class="sections">
            <div class="head">
            <i class="iconfont iconfonts icon-fanhui" @click="goback"></i>
            <span class="title">提币</span>
            </div>
            <scroller>
            <div class="content">
                <div class="top">
                    <h3>200 EB</h3>
                    <h4>可用金额</h4>
                </div>
                <form class="main">
                    <div class="con_row">
                        <div class="con_col tel">
                            <h3>提币地址</h3>
                            <input class="dizhi"  @click="myUtils.iosActive($event)" ref='1' id='fok' type="text" placeholder="请输入提币地址"  v-model="mobile">
                            <p class="add" @click="scan">添加</p>
                        </div>
                    </div>     
                    <div class="con_row">
                        <div class="con_col tel">
                            <h3>提币数量 <span>(EB)</span></h3>
                            <input type="text" placeholder="请输入提币数量" value="" v-model.trim.lazy="number" @click="myUtils.iosActive($event)" ref='2' id='fok1' onkeyup="value=value.replace(/[^\d]/g,'')">
                        </div>
                    </div>
                    <div class="con_row mt-10">
                        <div class="con_col tel">
                            <h4> 提币手续费：</h4>
                            <p>{{charge_num}}</p>
                        </div>
                    </div>
                        
                    
                    
                </form>
            
                <p class="btn btn_ture" @click="getmoney">提币</p>

            
            </div>
             </scroller>
        </div>
        <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
    </div>
   
</template>
<script>
import { Toast } from "mint-ui";
import PayKeyboard from "@/components/PayKeyboard";
// import  '@/assets/js/inputs.js'
export default {
  components: {
    PayKeyboard
  },
  data() {
    return {
      mobile: "",
      number: "", //用户输入的转账额度
      enable: "", //可用eb总数量
      charge: "", //提币手续费比例
      charge_num: "0 EB", //手续费金额
      newBuy: ""
    };
  },
  watch: {
    number: function() {
      this.charge_num =
        parseInt((this.charge * this.number * 100) / 100) + " EB";
    }
  },
  created() {
    this.mobile = this.$route.query.mobile;
    // 获取转账信息接口
    this.token = window.localStorage.getItem("token");
    var url = "/Assets/getTransferInfo?token=" + this.token;
    this.$axios
      .get(url)
      .then(r => {
        if (this.myUtils.isSuccess(r, this) == false) {
          return;
        }
        this.enable = r.data.data.enable_eb;
        this.charge = r.data.data.eb_withdraw_charge;
      })
      .catch(err => {
        Toast("网络连接失败");
      });
  },
  methods: {
    goback() {
      this.$router.push({ name: "home" });
    },

    scan() {
      this.$router.push({
        name: "ecanPay"
      });
    },

    getmoney() {
      if (
        this.mobile == null ||
        this.mobile == "" ||
        this.mobile == undefined
      ) {
        Toast("提币账户不能为空");
        return;
      }

      if (
        this.number == null ||
        this.number == "" ||
        this.number == undefined ||
        this.number == 0
      ) {
        Toast("提币数量不能为空");
        return;
      } else if (this.number < 100) {
        Toast("提币数量不能小于100");
        return;
      } else if (Number(this.number) > Number(this.enable)) {
        this.number = this.enable;
        Toast("提币数量不能大于可用eb总数量");
        return;
      } else if (this.number % 100 != 0) {
        Toast("提币数量必须为100的整数倍");
        return;
      }
      this.newBuy = "请输入您的支付密码";
      this.$refs["sendVal"].show();
    },
    getPwd(val) {
      if (val.length === 6) {
        console.log(val);
        this.$axios
          .post(
            "/Assets/withdraw?token=" + this.token,
            "&withdraw_total=" +
              this.number +
              "&wallet_address=" +
              this.mobile +
              "&pay_pwd=" +
              val
          )
          .then(r => {
            if (r) {
              if (r.data.error == 98) {
                Toast({
                  message: "登录信息已过期"
                });
                this.$router.push({ name: "login" });
              }

              if (r.data.error == 99) {
                Toast({
                  message: "登录信息已过期"
                });
                this.$router.push({ name: "login" });
              } else if (r.data.error == 100) {
                Toast({
                  message: "支付密码错误"
                });
                this.$refs.sendVal.$children[0].remov();
                return;
              } else if (r.data.error == 0) {
                this.$refs["sendVal"].close();
                this.$refs.sendVal.$children[0].remov();
                Toast({
                  message: r.data.msg
                });
                this.$router.push({ name: "transferSucceed" });
              } else {
                this.$refs["sendVal"].close();
                this.$refs.sendVal.$children[0].remov();
                Toast({
                  message: r.data.msg
                });

                return;
              }
            }
          })
          .catch(err => {
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
  background: #151721;
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
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.head i {
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.18rem;
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
    height: 5.98rem;
    background: linear-gradient(-90deg, #21fff6, #0a42ff);
    overflow: hidden;
    margin-bottom: 0.44rem;
    margin-top: -4rem;
    h3 {
      font-size: 0.36rem;
      color: #fff;
      text-align: center;
      margin: 4.7rem 0 0.27rem 0;
    }
    h4 {
      color: #f1f1f1;
      font-size: 0.15rem;
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
      margin: 0.16rem 0 0.2rem 0;
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
  font-size: 0.12rem;
  line-height: 0.4rem;
  text-align: center;
  margin: 0 auto;
}
.btn_ture {
  margin: 0.5rem auto 0.08rem auto;
  background: linear-gradient(-90deg, #21fff6, #0a42ff);
}
.mt-10 {
  margin-top: 0.1rem;
}
</style>



