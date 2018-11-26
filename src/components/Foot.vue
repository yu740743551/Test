<template>
    <footer>
        <div v-for="(foot,index) in footList" :key="index">
            <router-link :to="{name: foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>
<script>
export default {
  data() {
    return {
      footList: [
        {
          name: "home",
          txt: "首页",
          icon: "&#xe601;",
          path: "/home"
        },
        {
          name: "webapp",
          txt: "科云商城",
          icon: "&#xe610;",
          path: "/webapp"
        },
        {
          name: "setting",
          txt: "我的",
          icon: "&#xe602;",
          path: "/setting"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/css/mixin";
footer {
  position: fixed;
  width: 100%;
  height: 0.54rem;
  left: 0;
  bottom: 0;
  background: #373c4f;
  display: flex;
  z-index: 100;
  div {
    flex: 1;
    height: 0.54rem;
    a {
      display: block;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      text-align: center;
      font-family: "微软雅黑";
      color: #fff;
      padding: 0.06rem 0;
      i {
        width: 100%;
        height: 0.3rem;
        line-height: 0.3rem;
        font-size: 0.21rem !important;
      }
      span {
        width: 100%;
        height: 0.2rem;
        line-height: 0.12rem;
        font-size: 0.12rem;
      }
    }
    .router-link-active {
      //   color:#fff;
      color: #21fff6;
      border-color: $mtBlue;
    }
    .ft-active-1 {
      color: $mtBlue;
      border-color: $mtBlue;
    }
  }
}
</style>


