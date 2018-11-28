<template>
    <div class="main">
        <div class="minxis" @click="register">
            <p>注册</p>
            <img src="../../assets/images/btn_bg@2x.png" alt="">
        </div>
        <div class="minxis" @click="login">
            <p style="color:#38D4CB">修改登录密码</p>
            <img src="../../assets/images/btn_bg@4x.png" alt="">
        </div>
        <div class="minxis" @click="pay">
            <p style="color:#38D4CB">修改支付密码</p>
            <img src="../../assets/images/btn_bg@4x.png" alt="">
        </div>
        <div class="minxis" @click="sign">
            <p>退出登录</p>
            <img src="../../assets/images/btn_bg@3x.png" alt="">
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
    import {
        Dialog
    } from "vant";
    export default {
        data() {
            return {};
        },
        methods: {      
            sign() {
                Dialog.confirm({
                        title: "提示",
                        message: "确定退出登录吗"
                    }).then(action => {
                        Toast.loading({
                            mask: true,
                            message: "加载中...",
                            duration: 10000
                            });
                        // on confirm
                         this.$axios
                        .get(
                            "/login/loginOut",
                            "token=" + window.localStorage.getItem("token")
                        )
                        .then(r => {
                            Toast.clear();
                            localStorage.removeItem("token");
                            this.$router.push({
                            name: "login"
                            });
                        })
                        .catch(err => {
                            Toast("网络连接失败");
                        });
                        
                    })
            },
            register() {
                this.$router.push({
                    name: "register"
                });
            },
            login() {
                this.$router.push({
                    name: 'password'
                })
            },
            pay() {
                this.$router.push({
                    name: 'paypassword'
                })
            }
        }
    };
</script>
<style lang="scss" scoped>
.main{
    height:100%;
    padding-top:0.9rem;
}
    .minxi {
        margin-top: 1.6rem;
    }
    
    .minxi img {
        width: 2.4rem;
        margin: 0 auto;
    }
    
    .minxi p {
        text-align: center;
        color: #38d4cb;
        font-size: 0.15rem;
    }
    
    .minxis {
        margin-top: 0.55rem;
    }
    
    .minxis img {
        width: 2.4rem;
        margin: 0 auto;
        margin-top: -0.2rem;
    }
    
    .minxis p {
        text-align: center;
        color: #f56f6f;
        font-size: 0.15rem;
    }
</style>
<style>
    .van-dialog {
        background: #373c4f!important;
        color: #fff;
    }
    
    .van-dialog .van-button {
        background: #373c4f;
        color: #fff;
    }
    
    .van-dialog__message--has-title {
        text-align: center;
        color: #fff!important;
    }
    
    .van-dialog__header {
        color: #fff;
        background: #373c4f!important;
    }
    
    .van-button::before {
        background: #373c4f!important;
        border-color: #ccc!important;
    }
    
    .van-dialog__content {
        background: #373c4f!important;
    }
</style>