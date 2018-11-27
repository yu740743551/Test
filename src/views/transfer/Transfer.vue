<template>
    <div class="section">
        <div class="sections">
            <div class="head">
            <i class="iconfont icon-quxiao" @click="goback"></i>
            <span class="title">转出</span>
            <i class="iconfont  icon-saoyisao1" @click="scan"></i>
            </div>
            
            <div class="content">
                <div class="code">
                    <h3>我的二维码</h3>
                    <img  alt="" :src="qrcode_url">
                    <h3>扫一扫添加&nbsp;对方账户</h3>
                </div>
                <form action="">
                    <div class="con_row">
                        <div class="con_col tel">
                            <h3>钱包地址</h3>
                            <input type="text" ref="cop" class="wallet_address" id="address" v-model="wallet">
                            <input type="text"  class="wallet_address top" disabled>
                            <span class="copy" @click="copy" data-clipboard-target="#address">复制</span>
                        </div>
                    </div>
                    <div class="con_row">
                        <div class="con_col tel">
                        <h3>对方账户</h3>
                        <input type="text" placeholder="扫一扫添加对方账户" v-model="mobile" @click="myUtils.iosActive($event)" ref='1' id='fok'>
                        </div>
                    </div>
                    <div class="con_row" style="margin:0">
                        <div class="con_col login_pwd">
                        <h3>数量</h3>
                        <input type="bumber" placeholder="最低10EOS" @click="myUtils.iosActive($event)" ref='2' id='fok1'  v-model.trim.lazy="number" >                    
                        </div>
                    </div>
                    <p class="tip">
                        <span>可用&nbsp;{{enable}} &nbsp;EOS</span>
                        <span @click="all">全部</span>
                    </p>
                    <div class="con_row">
                        <div class="con_col verify">
                        <h3>手续费</h3>
                        <input type="text" placeholder="" v-model="charge_num" disabled>
                        </div>
                    </div>
                    
                    
                    
            </form>
            <p class="btn btn_ture" @click="tosucceed">转账</p>
            
            </div>
        </div>    
        <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
    </div>
    
</template>
<script>
    import Clipboard from 'clipboard';
    import { Toast } from 'vant';
    import PayKeyboard from "@/components/PayKeyboard";
    // import  '@/assets/js/inputs.js'
    export default {
        components: {
            PayKeyboard
        },

        data() {
            return {
                mobile: "",
                token: "",
                number: "", //输入EB的数量
                enable: "", //可用eb总数量
                charge: "", //手续费比例
                charge_num: "", //手续费金额
                qrcode_url: "", //该用户的转账二维码uri 需要带上token,
                newBuy: "",
                wallet: '56544sa2d12asd12as'
            };
        },
        watch: {
            number: function() {
                // this.charge_num = this.charge * this.number;
            }
        },
        created() {
           
        },
        methods: {
            all() {
                this.number = this.enable;
                
            },
            goback() {
                this.$router.push({
                    name: "home"
                });
            },
            copy() {
                let clipboard = new Clipboard(".copy");
                clipboard.on("success", function() {
                   Toast('复制成功');
                });
                clipboard.on("error", function() {
                    Toast('复制失败');
                });
            },
            tosucceed() {
                // if (
                //     this.mobile == null ||
                //     this.mobile == "" ||
                //     this.mobile == undefined
                // ) {
                //     Toast("对方账户不能为空");
                //     return;
                // }
                // if (
                //     this.number == null ||
                //     this.number == "" ||
                //     this.number == undefined ||
                //     this.number == 0
                // ) {
                //     Toast("转出数量不能为空");
                //     return;
                // } else if (Number(this.number) < 10) {
                //     Toast("转出数量不能小于10");
                //     return;
                // } else if (Number(this.number) > Number(this.enable)) {
                //     this.number = this.enable;
                //     Toast("转出数量不能大于可用eb总数量");
                //     return;
                // } else if (this.number % 10 != 0) {
                //     Toast("转出数量必须为10的整数倍");
                //     return;
                // }
                // this.newBuy = "请输入您的支付密码";
                this.$refs["sendVal"].show();
              this.$router.push({
                            name: "success",
                            query:{
                                title:'转出',
                                content:'恭喜您！转出成功，等待审核...',
                                name:'home',
                            }
                    })
            },
            scan() {
                this.$router.push({
                    name: "scanPay"
                });
            },

            getPwd(val) {
                if (val.length === 6) {
                //     this.$axios
                //         .post(
                //             "/Assets/transfer?token=" + this.token,
                //             "&transfer_total=" +
                //             this.number +
                //             "&to_account_num=" +
                //             this.mobile +
                //             "&pay_pwd=" +
                //             val
                //         )
                //         .then(r => {
                //             if (r) {
                //                 if (r.data.error == 98) {
                //                     Toast({
                //                         message: "登录信息已过期"
                //                     });
                //                     this.$router.push({
                //                         name: "login"
                //                     });
                //                     localStorage.removeItem("token");
                //                     return;
                //                 }
                //                 if (r.data.error == 99) {
                //                     Toast({
                //                         message: "登录信息已过期"
                //                     });
                //                     this.$router.push({
                //                         name: "login"
                //                     });
                //                     localStorage.removeItem("token");
                //                 } else if (r.data.error == 100) {
                //                     Toast({
                //                         message: "支付密码错误"
                //                     });
                //                     this.$refs.sendVal.$children[0].remov();
                //                     return;
                //                 } else if (r.data.error == 0) {
                //                     this.$refs["sendVal"].close();
                //                     this.$refs.sendVal.$children[0].remov();
                //                     Toast({
                //                         message: r.data.msg
                //                     });
                //                     this.$router.push({
                //                         name: "transferSucceed"
                //                     });
                //                 } else {
                //                     this.$refs["sendVal"].close();
                //                     this.$refs.sendVal.$children[0].remov();
                //                     Toast({
                //                         message: r.data.msg
                //                     });

                //                     return;
                //                 }
                //             }
                //         })
                //         .catch(err => {
                //             Indicator.close();
                //             Toast("网络连接失败");
                //         });

                this.$router.push({
                            name: "success",
                            query:{
                                title:'转出',
                                content:'恭喜您！转出成功，等待审核...',
                                name:'home',
                            }
                    })
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
        background: #282d41
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
        line-height: 0.5rem;
        font-size: 0.3rem;
        text-align: left;
        padding: 0.1rem;
    }
    
    .head i:last-child {
        font-size: 0.25rem;
        float: right;
        line-height: normal;
    }
    
    .content {
        width: 100%;
        height: 100%;
        padding: 0.72rem 0.38rem 0 0.38rem;
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
                margin: 0.16rem auto 0.21rem auto;
            }
            h3:last-child {
                font-size: 0.12rem;
                color: #ccc;
                text-align: center;
                margin: 0 auto;
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
                margin-bottom: 0.2rem;
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
    .con_col{
        position:relative;
    }
    .con_col .top{
        position: absolute;
        bottom:0;
        left:0;
        z-index: 99;
        opacity: 0
    }
    .con_col>span {
        color: #fff;
    }
    
    .wallet_address {
        width: 80%!important;
    }
</style>