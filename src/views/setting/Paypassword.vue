<template>
    <div>
        <div class="head">
            <i class="iconfont icon-fanhui" @click="goback"></i>
            <span class="title">修改支付密码</span>
        </div>
       <div class="center">              
       
        <input type="password" @click="myUtils.iosActive($event)" ref='1' placeholder="输入旧密码" v-model="old_pwd">
        <input type="password" @click="myUtils.iosActive($event)" ref='2'  placeholder="输入新密码" v-model="new_pwd">
        <input type="password" @click="myUtils.iosActive($event)" ref='3'  placeholder="重复新密码" v-model="renew_pwd">
        <p class="pass" @click="forgetpassword">忘记支付密码？</p>
        <div class="btn" @click="sumbit">确认修改</div>
       </div>

    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
  components: {
    Toast,

  },
  data() {
    return {
      old_pwd: "",
      new_pwd: "",
      renew_pwd: "",
    };
  },
  methods: {
    forgetpassword() {
        this.$router.push({ name: "forgetpassword" });
    },
    sumbit() {
      if (this.old_pwd == "") {
        Toast("旧密码不能为空");
        return;
      }

      if (this.old_pwd.length != 6) {
        Toast("旧密码必须为6位");
        return;
      }
      if (this.new_pwd == "") {
        Toast("新密码不能为空");
        return;
      }

      if (this.new_pwd.length != 6) {
        Toast("新密码必须为6位");
        return;
      }
      if (this.new_pwd == this.old_pwd) {
        Toast("新密码和旧密码不能一样");
        return;
      }
      if (this.new_pwd != this.renew_pwd) {
        Toast("2次输入的密码不一致");
        return;
      }
      Toast.loading({
        mask: true,
        message: "加载中...",
        duration: 10000
      });
      this.$axios
        .post(
          "/member/resetPayPwd?token=" +
            window.localStorage.getItem("token"),
          "old_pwd=" + this.old_pwd + "&new_pwd=" + this.new_pwd+ "&confirm_pwd=" +this.renew_pwd
        )
        .then(r => {
             Toast.clear();
            if (this.myUtils.isSuccess(r, this) == false) {
           return;
         }
          Toast(r.data.msg);
          this.$router.push({
            name: "success",
            query:{
                title:'修改支付密码',
                content:'恭喜您！修改支付密码成功',
                name:'setting',
            }
          });
        }).catch(err => {            
            Toast("网络连接失败");
        });
    },
    goback() {
      this.$router.go(-1);
    },
    
  }
};
</script>
<style lang="scss" scoped>
.head {
  height: 0.4rem;
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
.center {
  padding: 0.16rem 0.28rem;
  box-sizing: border-box;
  width: 3.45rem;
  margin: 1rem auto;
  
  input {
    background: transparent;
    color: #fff;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
    border-bottom: 1px solid #21fff6;
    margin-top: 0.1rem;
    border-radius: 0;
    font-size:0.15rem;
  }
  
}

.pass {
    display: inline-block;
    float:right;
    width:0.77rem;
    font-size:0.11rem;
    color:rgba(232,97,97,1);
  margin-top: 0.1rem;
  text-align: center
}
  .btn {
  width: 100%;
  height: 0.49rem;
  color: #fff;
  font-size: 0.17rem;
  line-height: 0.42rem;
  text-align: center;
  margin: 0.68rem auto 0.08rem auto;
  background: #e86161;
  border: 0.04rem solid #c75757;
  box-sizing: border-box;
}
input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #d2e6e6;
}
</style>