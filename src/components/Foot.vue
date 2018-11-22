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
  background: #373C4F;
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
      padding: 6px 0;
      text-align: center;
      font-family: "微软雅黑";
      color: #fff;
      i {
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 0.21rem !important;
      }
      span {
        width: 100%;
        height: 20px;
        line-height: 12px;
        font-size: 0.12rem;
      }
    }
    .router-link-active {
    //   color:#fff;
      color:#21FFF6;
      border-color: $mtBlue;
    }
    .ft-active-1 {
      color: $mtBlue;
      border-color: $mtBlue;
    }
  }
}
</style>


