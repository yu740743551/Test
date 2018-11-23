<template>
  <section class="section " >
      
    <div class="register register_bg">
        <div class="hea">
            <span>欢迎登录</span>
            <i></i>
        </div>
        
      
      <div class="reg_con">
        <form action="">
          <div class="con_row">
            <div class="con_col tel">
              <input type="text"  placeholder="用户名" @click="myUtils.iosActive($event)" ref='4' v-model="nickname" >
            </div>
          </div>          
          <div class="con_row">
            <div class="con_col login_pwd">
              <input type="password" @click="myUtils.iosActive($event)" ref='3'  placeholder="请输入密码" v-model="password">
             
            </div>
          </div>
          
          <div class="forget" >
              <p @click="forgetpassword">忘记密码？</p>
          </div>
          <div class="sumbit" @click="sumbit">
            <p class="btn">登录</p>
          </div>
          
        </form>
      </div>
      
    </div>
    
  </section>
</template>

<script>
import LangSelect from "@/components/LangSelect";
import { Toast } from "mint-ui";
import SIdentify from "@/components/VerificationCode";
import { Indicator } from "mint-ui";
export default {
  components: {},
  data() {
    return {
      isshow: true,
      vas: "获取验证码",
      mobile: "", //手机号
      nickname: "", //昵称
      password: "",
      codes: "",
      bodyHeight: "",      
    };
  },
  created() {
     
  },
  watch: {},
  methods: {
      
    
    forgetpassword() {
        this.$router.push({ name: "forgetpassword" });
    },
    sumbit() {
      if (this.nickname == "") {
        Toast({
          message: "昵称不能为空"
        });
        return;
      }
      if (this.password == "") {
        Toast({
          message: "密码不能为空"
        });
        return;
      }
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      this.$axios
        .post(
          "/login/doLogin",
          "&nickname=" + this.nickname + "&pwd=" + this.password
        )
        .then(r => {
          Indicator.close();
          if (r.data.error != 0) {
            Toast({
              message: r.data.msg
            });
            return;
          }
          Toast({
            message: r.data.msg
          });
          localStorage.setItem("token", r.data.data);
          this.$router.push({
            name: "home"
          });
        }).catch(err => {
            Indicator.close();
            Toast("网络连接失败");
        });
     
    }

   
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight;
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin";

.register_bg{
    background:url(../../assets/images/login_bg.png) no-repeat center bottom;
    background-size:100% 3.54rem;
   
    
    .hea span{
        display: inline-block;
        margin-top:0.75rem;
        font-size: 0.26rem;
        color:#fff;
        font-weight: bold;
        padding-left: 0.42rem;
    }
    .hea i{
         display: inline-block;
         width: 2.24rem;
         height:0.25rem;
         background: url(../../assets/images/login_top.png)no-repeat;
         background-size:100% 100%;
         vertical-align: text-bottom;
    }
}

.register {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
}

.reg-title {
  width: 1.22rem;
  height: 0.28rem;
  margin: 0.96rem auto 0.82rem auto;
}
.reg_con {
  width: 3rem;
  margin: 0.5rem auto 0 auto;
  color: #d2e6e6;
  .con_col {
    height: 0.49rem;
    width: 100%;
    color: #d2e6e6;
    border-bottom: 1px solid #F56F6F;
    font-size: 0.14rem;

    .tel_add {
      font-size: 0.14rem;
    }
    input {
      background: transparent;
      height: 0.2rem;
      color: #d2e6e6;
      font-size: 0.2rem;
      border-radius: 0;
      width: 100%;
      height:100%;
    }
    input + input {
      float: right;
      width: 1rem;
      border-bottom: 0;
      background: transparent;
      height: 0.2rem;
      line-height: 0.2rem;
      text-align: right;
    }
    t {
      font-size: 0.19rem;
    }
  }
  .forget {
    width: 100%;
    height: 0.2rem;
    margin-top: 0.1rem;
    p {
      width: 0.6rem;
      font-size: 0.09rem;
      float: right;
    }
  }
  .sumbit {
    margin-top: 0.3rem;

    .btn {
      display: block;
      width: 3rem;
      height: 0.36rem;
      text-align: center;
      line-height: 0.36rem;
      font-size: 0.17rem;
      background: #fff;
      border-radius: 0.02rem;
      box-sizing: border-box;
      color:#282D41;
      border: 0;
    }
    
  }
  .protocol {
    p {
      margin-top: 0.1rem;
      font-size: 0.09rem;
      text-align: center;
      color: #9c9c9c;
    }
  }
  input::-webkit-input-placeholder {
    /* WebKit, Blink, Edge */
    color: #d2e6e6;
  }
  
}
</style>