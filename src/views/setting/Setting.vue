<template>
    <div>
        <div class="minxi" @click="register">
            <p>注册</p>
            <img src="../../assets/images/btn_bg@2x.png" alt="">
        </div>
        <div class="minxis" @click="sign">
            <p>退出登录</p>
            <img src="../../assets/images/btn_bg@3x.png" alt="">
        </div>
    </div>
</template>
<script>
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
                    })
                    .then(() => {
                        // on confirm
                        this.$router.push({
                            name: "login"
                        });
                    })
                    .catch(() => {
                        // on cancel
                    });
            },
            register() {
                this.$router.push({
                    name: "register"
                });
            }
        }
    };
</script>
<style lang="scss" scoped>
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
        margin-top: 0.3rem;
    }
    
    .minxis img {
        width: 2.4rem;
        margin: 0 auto;
    }
    
    .minxis p {
        text-align: center;
        color: #f56f6f;
        font-size: 0.15rem;
    }
</style>
<style>
    .van-dialog {
        background: #373c4f;
        color: #fff;
    }
    
    .van-dialog__message--has-title {
        color: #fff;
    }
    
    .van-dialog .van-button {
        background: #373c4f;
        color: #fff;
    }
    
    .van-dialog__message--has-title {
        text-align: center;
    }
</style>