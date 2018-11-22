<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view class="child-view"></router-view>
           
        </transition>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route: function(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    }
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all 0.4s cubic-bezier(0.22, 0, 0.1, 1);
  background: #fff;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 1;
  -webkit-transform: translate(-80px, 0);
  transform: translate(-80px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 1;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

/* .iconfonts {
  padding: 10px;
} */

.mint-toast.is-placebottom {
  z-index: 9999;
}

.mint-msgbox {
  background: #232636 !important;
  color: #ccc !important;
}

.mint-msgbox-btn {
  background: #232636 !important;
  color: #ccc !important;
}

.mint-msgbox-title {
  color: #ccc !important;
}
</style>
