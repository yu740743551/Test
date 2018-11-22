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
          txt: this.$t("doc.user_trade"),
          icon: "&#xe63f;",
          path: "/home"
        },
        {
          name: "webapp",
          txt: this.$t("doc.app"),
          icon: "&#xe64f;",
          path: "/webapp"
        },
        {
          name: "setting",
          txt: this.$t("doc.user_setting"),
          icon: "&#xe750;",
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
  height: 0.49rem;
  left: 0;
  bottom: 0;
  background: #000;
  display: flex;
  z-index: 100;
  div {
    flex: 1;
    height: 0.49rem;
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


