<template>
    <div class="head">
        <i class="iconfont iconfonts icon-fanhui" @click="goback"></i>
        <span class="title">{{title}}</span>
    </div>
</template>
<script>
export default {
    name: 'theader',
    methods:{
        goback(){
            this.$router.go(-1)
        }
    },
    props: ['title']
}
</script>
<style lang="scss" scoped>
    .head{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #f0f0f0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
        .icon-fanhui{
            float: left;
            margin-left: 10px;
        }
        .title{
            text-align: center;
        }
    }
</style>


