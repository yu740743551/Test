<template>
    <div class="section">
        <div class="sections">
            <div class="head">
                <i class="iconfont icon-fanhui" @click="goback"></i>
                <span class="title">转出</span>
                <i @click="bill">转账记录</i>
            </div>

            <div class="content">
                <div class="code">
                    <h3>我的二维码</h3>
                    <h3>
                        扫一扫添加&nbsp;对方账户
                        <i class="iconfont icon-saoyisao1" @click="scan"></i>
                    </h3>
                    <img alt :src="qrcode_url">
                    <h3>个人地址（下方地址长按可复制）</h3>
                    <p>{{account_num}}</p>
                </div>
                <form action>
                    <div class="con_row">
                        <div class="con_col tel">
                            <h3>对方账户地址</h3>
                            <input
                                type="text"
                                placeholder="扫一扫添加对方账户"
                                v-model="mobile"
                                @click="myUtils.iosActive($event)"
                                ref="1"
                                id="fok"
                            >
                        </div>
                    </div>
                    <div class="con_row" style="margin:0">
                        <div class="con_col login_pwd">
                            <h3>数量</h3>
                            <input
                                type="number"
                                placeholder="最低1EOS"
                                @click="myUtils.iosActive($event)"
                                ref="2"
                                id="fok1"
                                v-model.trim.lazy="number"
                            >
                        </div>
                    </div>
                    <p class="tip">
                        <span>可用&nbsp;{{curr_total}} &nbsp;EOS</span>
                        <span @click="all">全部</span>
                    </p>
                </form>
                <p class="btn btn_ture" @click="tosucceed">转账</p>
            </div>
        </div>
        <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
    </div>
</template>
<script>
    import Clipboard from "clipboard";
    import {
        Toast
    } from "vant";
    import PayKeyboard from "@/components/PayKeyboard";
    // import  '@/assets/js/inputs.js'
    export default {
        components: {
            PayKeyboard
        },

        data() {
            return {
                mobile: "",
                token: window.localStorage.getItem("token"),
                number: "", //输入eos的数量
                curr_total: "", //可用eos总数量
                qrcode_url: "", //该用户的转账二维码uri 需要带上token,
                account_num: "", //32位收钱码
                newBuy: "",
                wallet: ""
            };
        },
        watch: {
            number: function() {
                // this.charge_num = this.charge * this.number;
            }
        },
        created() {
            this.mobile = this.$route.query.mobile;
            Toast.loading({
                mask: true,
                message: "加载中...",
                duration: 10000
            });
            this.$axios
                .get(
                    "/member/getTransferInfo?token=" +
                    window.localStorage.getItem("token")
                )
                .then(r => {
                    Toast.clear();
                    if (this.myUtils.isSuccess(r, this) == false) {
                        return;
                    }
                    this.list = r.data.data;
                    this.qrcode_url = this.list.qrcode_url + "&token=" + this.token;
                    this.curr_total = this.list.curr_total;
                    this.account_num = this.list.account_num;
                })
                .catch(err => {
                    Toast("网络连接失败");
                });
        },
        methods: {
            all() {
                this.number = this.curr_total;
            },
            goback() {
                this.$router.push({
                    name: "home"
                });
            },
            bill() {
                this.$router.push({
                    name: "bill"
                });
            },

            tosucceed() {
                if (this.myUtils.isNull(this.mobile) == true) {
                    Toast("对方账户不能为空");
                    return;
                }
                if (this.myUtils.isNull(this.number) == true) {
                    Toast("转出数量不能为空");
                    return;
                } else if (Number(this.number) > Number(this.curr_total)) {
                    this.number = this.curr_total;
                    Toast("可用额度不足");
                    return;
                }
                if (this.number % 1 != 0) {
                    Toast("请输入大于等于1的正整数");
                    return
                }
                this.newBuy = "请输入您的支付密码";
                this.$refs["sendVal"].show();
            },
            scan() {
                this.$router.push({
                    name: "scanPay"
                });
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
                            "/member/transfer?token=" + this.token,
                            "&transfer_total=" +
                            this.number +
                            "&to_account_num=" +
                            this.mobile +
                            "&pay_pwd=" +
                            val
                        )
                        .then(r => {
                            if (r) {
                                Toast.clear();
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
                                        title: "转出",
                                        content: "恭喜您！转出成功",
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
            // copy() {
            //     console.log(123);
            //     let clipboard = new Clipboard(".copy");
            //     clipboard.on("success", function() {
            //         Toast({
            //             message: "复制成功",
            //             position: "bottom"
            //         });
            //     });
            //     clipboard.on("error", function() {
            //         console.log("复制失败");
            //     });
            // }
        }
    };
</script>
<style lang="scss" scoped>
    @import "../../assets/css/mixin";
    * {
        box-sizing: border-box;
    }
    
    .section {
        height: auto;
    }
    
    .sections {
        min-height: 100vh;
    }
    
    .head {
        height: 0.7rem;
        position: fixed;
        top: 0;
        width: 100%;
        padding-top: 0.3rem;
        opacity: 1;
        z-index: 99;
        background: #282d41;
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
        line-height: 0.5rem;
        font-size: 0.22rem;
        text-align: left;
        padding: 0.1rem;
    }
    
    .head i:last-child {
        font-size: 0.2rem;
        float: right;
        line-height: 0.4rem;
        padding: 0 0.1rem 0 0;
    }
    
    .content {
        width: 100%;
        height: 100%;
        padding: 0.92rem 0.38rem 0 0.38rem;
        .code {
            width: 3rem;
            height: 2.4rem;
            background: #fff;
            border-radius: 0.08rem;
            margin: 0 auto 0.3rem auto;
            padding: 0.25rem 0;
            h3:first-child {
                font-size: 0.15rem;
                color: #000;
                text-align: center;
                margin: 0 auto;
                font-weight: 300;
            }
            img {
                width: 1.3rem;
                height: 1.3rem;
                margin: 0.05rem auto 0.05rem auto;
            }
            h3::last-child {
                font-size: 0.1rem;
            }
            h3 {
                font-size: 0.12rem;
                color: #ccc;
                text-align: center;
                margin: 0 auto;
                position: relative;
                i {
                    position: absolute;
                    display: inline-block;
                    bottom: -0.08rem;
                    right: 0.2rem;
                    font-size: 0.26rem;
                    color: #38d4cb;
                    font-weight: bold;
                }
            }
            p {
                font-size: 0.12rem;
                color: #282d41;
                text-align: center;
                -webkit-user-select: auto;
            }
        }
        .tip {
            color: #c7cad3;
            font-size: 0.12rem;
            margin-bottom: 0.2rem;
            span:last-child {
                float: right;
            }
        }
        .con_row:nth-child(2) {
            margin: 0;
        }
        .con_row {
            border-bottom: 1px solid #7f7e8b;
            margin-bottom: 0.2rem;
            h3 {
                font-size: 0.15rem;
                color: #d2e6e6;
                margin-bottom: 0.1rem;
            }
            input {
                width: 100%;
                font-size: 0.15rem;
                margin-bottom: 0.1rem;
                background: transparent;
                color: #21fff6;
                border-radius: 0;
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
    
    .con_col {
        position: relative;
    }
    
    .con_col .top {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 99;
        opacity: 0;
    }
    
    .con_col>span {
        color: #fff;
    }
    
    .wallet_address {
        width: 80% !important;
    }
</style>
