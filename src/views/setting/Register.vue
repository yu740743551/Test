<template>
    <div>
        <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="goback"></i>
            <span class="title">注册</span>
        </div>
        <div class="big">
            <div class="box">
                <span>手机号&nbsp;</span>
                <input type="text" required  @click="myUtils.iosActive($event)" placeholder="请输入手机号" v-model.trim="phone">
            </div>
            <div class="box">
                <span>密码&nbsp;</span>
                <input type="password" required  @click="myUtils.iosActive($event)" placeholder="请输入密码" v-model.trim="password">
            </div>
            <div class="box">
                <span>支付密码&nbsp;</span>
                <input type="password" required  @click="myUtils.iosActive($event)" placeholder="请输入支付密码" v-model.trim="payPassword">
            </div>
            <div class="box">
                <span>邮箱&nbsp;</span>
                <input type="email " required  @click="myUtils.iosActive($event)" placeholder="请输入邮箱" v-model.trim="mailbox">
            </div>
            <div class="submit" @click="submit">注册</div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
    export default {
        data() {
            return {
                count: 0,
                isLoading: false,
                phone:'',
                password:'',
                payPassword:'',
                mailbox:'',
                token: window.localStorage.getItem("token"),
            };
        },

        methods: {
            goback() {
                this.$router.go(-1);
            },
            submit() {
                if (this.phone == "") {
                    Toast({
                    message: "手机号不能为空"
                    });
                    return;
                }
                if(this.myUtils.isPhoneNum(this.phone)== false){
                    Toast({
                    message: "请填写正确的手机号"
                    });
                    return;
                }
                if (this.password == "") {
                    Toast({
                    message: "密码不能为空"
                    });
                    return;
                }
                if (this.password.length < 6) {
                    Toast({
                    message: "密码长度不能少于6位"
                    });
                    return;
                }
                if (this.password.length >18) {
                    Toast({
                    message: "密码长度不能大于18位"
                    });
                    return;
                }
                if (this.payPassword == "") {
                    Toast({
                    message: "支付密码不能为空"
                    });
                    return;
                }
                if (this.payPassword.length != 6) {
                    Toast({
                    message: "支付密码长度必须为6位"
                    });
                    return;
                }
                if (this.mailbox == "") {
                    Toast({
                    message: "邮箱不能为空"
                    });
                    return;
                }
                this.$axios.post(
                        "/Reg/register?token=" + this.token,
                        "mobile=" +
                        this.phone +
                        "&login_pwd=" +
                        this.password +
                        "&pay_pwd=" +
                        this.payPassword +
                        "&email=" +
                        this.mailbox
                        
                    ).then(r => {
                        console.log(r);
                         if (r.data.error != 0) {
                            Toast({
                            message: r.data.msg
                            });
                            return;
                        }
                        Toast({
                            message: r.data.msg
                        });
                        this.$router.push({
                                name: "success",
                                query:{
                                    title:'注册',
                                    content:'恭喜您！注册成功，等待审核...',
                                    name:'setting',
                                }
                        })
                    }).catch(err => {
                        Toast("网络连接失败");
                    });
               
                 }
        }
    };
</script>
<style lang="scss" scoped>
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
        font-size: 0.3rem;
        text-align: left;
        padding: 0.1rem;
    }
    
    .big {
        padding: 1.5rem 0.4rem 0.2rem 0.4rem;
    }
    
    .box {
        border-bottom: 0.01rem solid #D6D6D6;
        line-height: 0.4rem;
        margin-top: 0.1rem;
    }
    
    input {
        outline: none;
        border: 0;
        background: #282d41;
        color: #fff;
        font-size: 0.15rem;
        /* width: 100%; */
    }
    
    .box span {
        color: #fff;
        font-size: 0.15rem;
    }
    
    .submit {
        margin: 0.5rem auto 0.08rem auto;
        background: #e86161;
        border: 0.04rem solid #c75757;
        box-sizing: content-box;
        text-align: center;
        line-height: 0.4rem;
        color: #fff;
        font-size: 0.15rem;
    }
</style>