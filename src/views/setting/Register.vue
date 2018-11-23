<template>
    <div>
        <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="goback"></i>
            <span class="title">注册</span>
        </div>
        <div class="big">
            <div class="box">
                <span>手机号&nbsp;</span>
                <input type="text" @click="myUtils.iosActive($event)" placeholder="请输入手机号">
            </div>
            <div class="box">
                <span>密码&nbsp;</span>
                <input type="text" @click="myUtils.iosActive($event)" placeholder="请输入密码">
            </div>
            <div class="box">
                <span>支付密码&nbsp;</span>
                <input type="text" @click="myUtils.iosActive($event)" placeholder="请输入支付密码">
            </div>
            <div class="box">
                <span>邮箱&nbsp;</span>
                <input type="text" @click="myUtils.iosActive($event)" placeholder="请输入邮箱">
            </div>
            <div class="submit">注册</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                count: 0,
                isLoading: false
            };
        },

        methods: {
            goback() {
                this.$router.go(-1);
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