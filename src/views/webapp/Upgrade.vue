<template>
    <div class="section">
        <div class="sections">
            <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="goback"></i>
            <span class="title">升级</span>
            <i class="iconfont  icon-saoyisao1" @click="scan"></i>
            </div>
            
            <div class="content">
                <div class="code">
                    <img  alt="" :src="qrcode_url">
                    <h4>官方升级地址（下方地址长按可复制）</h4>
                    <h3>0x8547274222E174999aDA60D64b44b2a699E48390</h3>
                     <div class="danjia">
                         <p>单价/EOS</p>
                         <p>20000.00</p>
                    </div>
                    <div class="heji">
                         <p>合计 <span>x10</span></p>
                         <p>200000.00</p>
                    </div>
                </div>
               
                
                <p class="btn btn_ture" @click="tosucceed">转账</p>
            
            </div>
        </div>    
        <pay-keyboard ref="sendVal" :newBuy="newBuy" @value="getPwd"></pay-keyboard>
    </div>
    
</template>
<script>
    import {
        Toast
    } from "mint-ui";

    // import  '@/assets/js/inputs.js'
    export default {
        components: {
           
        },

        data() {
            return {
              
            };
        },
        watch: {
           
        },
        created() {
          
        },
        methods: {
            
            goback() {
                this.$router.push({
                    name: "home"
                });
            },
           
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
        background: #282D41;
    }
    
    .head {
        height: 0.7rem;
        position: fixed;
        top: 0;
        width: 100%;
        padding-top: 0.3rem;
        opacity: 1;
        z-index: 99;
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
    
    .head i:last-child {
        float: right;
        line-height: normal;
    }
    
    .content {
        width: 3rem;
        height: 100%;
        margin:0.8rem auto 0 auto;
        .code {
            width: 3rem;
            height: 2.4rem;
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
                width: 1.44rem;
                height: 1.44rem;
                margin: 0.16rem auto 0.21rem auto;
            }
            h4{
                font-size: 0.1rem;
                color: #fff;
                text-align: center;
                margin-bottom: 0.1rem;
            }
            h3{
                font-size: 0.12rem;
                 color: #fff;
                 text-align: center;
                 margin-bottom: 0.15rem;
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
        margin: 0 auto 0.08rem auto;
        background: linear-gradient(-90deg, #21fff6, #0a42ff);
    }
</style>