<template>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="home">
        <p class="p1">这是一个模板</p> 
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
      
          <p>刷新次数: {{ count }}</p>
        
    </div>
    </van-pull-refresh>
</template>
<script>
    export default {
        data() {
            return {
                count: 0,
                isLoading: false
            }
        },

        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .home {
        .p1 {
            width: 100%;
            text-align: center;
            line-height: 0.3rem;
            font-size: 0.14rem;
        }
    }
</style>