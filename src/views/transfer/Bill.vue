<template>
    <div class="section">
        <div class="head">
           <i class="iconfont iconfonts icon-fanhui" @click="goback"></i>
          <span class="title">转账记录</span>
         </div>
        <div class="no_record" v-if="!isshow">
            <img src="../../assets/images/icon_null.png" alt="">
            <span>没有找到相关记录</span>
        </div>
         <div class="content" v-if="isshow">
              <scroller :on-infinite="infinite" ref="myscroller" :on-refresh = "refresh" class="ones">
                    <ul>
                        <li class="clear" v-for="data in list">
                            <p class="title">
                                <span >{{data.flowdes}}</span>        
                                <span class="time">{{data.createtime}}</span>        
                            </p>
                            <p class="type">
                                    {{data.type}}
                            </p>
                            <p  :class="{'sum':data.symbol=='+'}">
                                <span >
                                    <span >{{data.symbol}}</span>
                                    {{data.amount}} </span> 
                                <span class="unit">{{data.unit}}</span>
                            </p>
                        </li>                    
                    </ul>
                 </scroller>
         </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
import { Loadmore } from "mint-ui";
import { Indicator } from "mint-ui";
import { InfiniteScroll } from "mint-ui";
export default {
  components: {
    Loadmore,
    InfiniteScroll
  },
  data() {
    return {
      list: [],
      token: "",
      url: "",
      page: 1, //分页页码
      offset: "",
      limit: 20, //分页的新闻数量
      allLoaded: false,
      isshow: true,
      loading: false,
      aaaa: "上拉加载更多",
      noData: ""
    };
  },
  created() {
    this.token = window.localStorage.getItem("token");
    // this.getdata();
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    tosucceed() {
      this.$router.push({ name: "transferSucceed" });
    },
    getdata() {
      this.offset = (this.page - 1) * this.limit;
      this.url =
        "/member/getFlow?token=" +
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
      this.$axios.get(this.url).then(r => {
        Toast.clear();
        if (this.myUtils.isSuccess(r, this) == false) {
          return;
        }

        // if (r.data.data.list.length == 0) {
        //   //下拉加载更多的关闭事件
        //    this.isshow = false;
        //   this.$refs.myscroller.finishInfinite(2);
        // }
        if (this.page == 1) {
            console.log(1)
          this.list = r.data.data.list; //如果是想下滑动，刷新数据 就让list等于最新数据
          //上刷新的关闭事件
          this.$refs.myscroller.finishPullToRefresh(2);
          this.$refs.myscroller.finishInfinite(2);
          if(this.list.length == 0){
               this.isshow = false;
               this.$refs.myscroller.finishInfinite(2);
          }
        } else {
          this.list = this.list.concat(r.data.data.list); //否则就把数据拼接
          this.$refs.myscroller.finishInfinite(2);
          if(this.list.length == 0){
               this.isshow = false;
               this.$refs.myscroller.finishInfinite(2);
          }
        }
        
      }).catch(err => {
            Toast("网络连接失败");
        });
    },
    // 上拉加载
    infinite() {
      if (this.list == "") {
        this.getdata();
        return
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
.section {
    background: #282D41
}
.no_record {
  margin-top: 1rem;
  padding-top: 30px;
  img{
      display: block;
      width:1rem;
      height:1rem;
      margin: 0 auto;
  }
  span{
      display: inline-block;
      width: 100%;
      color:#D2E6E6;
    text-align: center;
    font-size: 0.13rem;
    margin-top:0.2rem;

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
  background: #282D41;
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
  line-height: 0.4rem;
  font-size: 0.22rem;
  text-align: left;
  padding: 0.1rem;
}

.content {
  margin: 0rem 0.16rem 0 0.16rem;
  padding-top: 0.7rem;
  min-height: 100vh;

  ul {
    width: 100%;
  }
  li {
    width: 100%;
    height: 0.25rem;
    margin: 0.2rem 0;
    color: #d2e6e6;
    font-size: 0.12rem;
    p {
      float: left;
    }
    .title span {
      display: inline-block;
      width: 100%;
    }
    .title span.time {
      font-size: 0.09rem;
    }
    .sum {
      color: #e31c34;
    }
  }
  li > p:nth-child(1) {
    width: 45%;
    text-align: left;
  }
  li > p:nth-child(2) {
    width: 25%;
    text-align: center;
  }
  li > p:nth-child(3) {
    width: 30%;
    text-align: right;
  }
  .type,
  .sum {
    line-height: 0.25rem;
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




