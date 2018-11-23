<template>
    <div>
        <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="goback"></i>
            <span class="title">注册</span>
        </div>
    </div>
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

            goback() {
                this.$router.go(-1)
            }
        }
    };
</script>
<style lang="scss" scoped>
    .head {
        height: 0.5rem;
        position: fixed;
        top: 0.3rem;
        width: 100%;
        opacity: 1;
        z-index: 999;
        background: transparent;
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
        font-size: 0.3rem;
        text-align: left;
        padding: 0.1rem;
    }
</style>