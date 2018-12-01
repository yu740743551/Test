<template>
    <div class="section">
        <div class="head">
            <i class="iconfont iconfonts icon-fanhui" @click="goback"></i>
            <span class="title">提币记录</span>
        </div>
        <div class="no_record" v-if="!isshow">
            <img src="../../assets/images/icon_null.png" alt>
            <span>没有找到相关记录</span>
        </div>
        <div class="content" v-if="isshow">
            <scroller :on-infinite="infinite" ref="myscroller" :on-refresh="refresh" class="ones">
                <ul>
                    <li>
                        <p>提币</p>
                        <p>手续费</p>
                        <p>实际到账</p>
                        <p>状态</p>   
                    </li>
                    
                    <li v-for="data in list">
                       <p>{{data.withdraw_total}} </p>
                       <p>{{data.service_charge}} </p>
                       <p>{{data.final_total}} </p>
                   
                        
                        <p  @click="tip(data.reason)" v-if="data.status=='审核拒绝'">
                           {{data.status}}
                        </p> 
                        <p v-else> {{data.status}}</p>
                         <span>{{data.createtime}}</span>
                    </li>
                    
                    <li>
                       <p>200 </p>
                        <p>10</p>
                        <p>180</p>
                        <p  @click="tip()">已通过
                           
                        </p> 
                         <span>2018-5-25  18:00:00</span>
                    </li>
                    
                </ul>
            </scroller>
        </div>
    </div>
</template>
<script>
import { Toast } from "vant";
import { Dialog } from 'vant';

export default {
    components: {},
    data() {
        return {
            list: [],
            token: window.localStorage.getItem("token"),
            url: "",
            page: 1, //分页页码
            offset: "",
            limit: 20, //分页的新闻数量
            allLoaded: false,
            isshow: true,
            loading: false,
            aaaa: "上拉加载更多",
            noData: "",
            show: false,
        };
    },
    created() {
    },
    methods: {
        tip(data){
           Dialog.alert({
            message: data
            }).then(() => {
            // on close
            });
        },
       
       
        goback() {
            this.$router.go(-1);
        },

        getdata() {
            this.offset = (this.page - 1) * this.limit;
            this.url =
                "/member/getWithdraw?token=" +
                this.token +
                "&offset=" +
                this.offset +
                "&limit=" +
                this.limit;

            Toast.loading({
                mask: true,
                message: "加载中...",
                duration: 10000
            });
            this.$axios
                .get(this.url)
                .then(r => {
                    console.log(r)
                    Toast.clear();
                    if (this.myUtils.isSuccess(r, this) == false) {
                        return;
                    }
                    if (this.page == 1) {
                        this.list = r.data.data.list; //如果是想下滑动，刷新数据 就让list等于最新数据
                        //上刷新的关闭事件
                        this.$refs.myscroller.finishPullToRefresh(2);
                        this.$refs.myscroller.finishInfinite(2);
                        if (this.list.length == 0) {
                            this.isshow = false;
                            this.$refs.myscroller.finishInfinite(2);
                        }
                    } else {
                        this.list = this.list.concat(r.data.data.list); //否则就把数据拼接
                        this.$refs.myscroller.finishInfinite(2);
                        if (this.list.length == 0) {
                            this.isshow = false;
                            this.$refs.myscroller.finishInfinite(2);
                        }
                    }
                })
                .catch(err => {
                    Toast("网络连接失败");
                });
        },
        // 上拉加载
        infinite() {
            if (this.list == "") {
                this.getdata();
                return;
            }
            this.page++;
            this.getdata();
        },
        // 下拉刷新
        refresh() {
            this.page = 1;
            this.getdata();
        }
    }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
* {
    box-sizing: border-box;
}
.child-view{
    background: transparent;
}
.section {
    background: #282d41;
}
.no_record {
    margin-top: 1rem;
    padding-top: 30px;
    img {
        display: block;
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
    }
    span {
        display: inline-block;
        width: 100%;
        color: #d2e6e6;
        text-align: center;
        font-size: 0.13rem;
        margin-top: 0.2rem;
    }
}
.head {
    height: 0.7rem;
    position: fixed;
    padding-top: 0.3rem;
    top: 0;
    width: 100%;
    opacity: 1;
    z-index: 999;
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
    line-height: 0.4rem;
    font-size: 0.22rem;
    text-align: left;
    padding: 0.1rem;
}

.content {
    margin: 0rem 0.16rem 0 0.16rem;
    padding-top: 0.7rem;
    min-height: 100vh;
    background: #282d41;

    ul {
        width: 100%;
    }
    li:first-child{
        p{
            font-weight: bold;
        }
    }
    li {
        width: 100%;
        height: 0.25rem;
        margin: 0.2rem 0;
        color: #d2e6e6;
        p {
            width:25%;
            float: left;
            text-align: center;
            font-size: 0.13rem;
            margin:0;
        }
        span:last-child{
            width:40%;
            font-size: 0.1rem;
            text-align: left;
            margin-top:-0.1rem;

        }
        
    }
    
}
.clear {
    content: "";
    display: table;
    clear: both;
}
</style>
    
<style>
.mint-loadmore {
    overflow: scroll;
}
.mint-loadmore-text {
    color: #d2e6e6;
}
.mint-loadmore-top .mint-loadmore-text {
    margin-top: 0.3rem;
}
.ones {
    padding: 0.7rem 0.16rem 0 0.16rem;
    box-sizing: border-box;
}
</style>

<style>
._v-container {
  background: #282d41;
}
</style>





