<template>
<scroller>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="home">

        
    </div>
    </van-pull-refresh>
    </scroller>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false
    };
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        // this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  .p1 {
    width: 100%;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.14rem;
  }
}
</style>