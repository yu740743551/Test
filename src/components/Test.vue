<template>
    <div class="main">
        <div @click="openMask">打开弹窗</div>
        <dialog-bar v-model="sendVal" type="danger" title="多语言" content="点击确定改变语言" v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="确定"></dialog-bar>
    </div>
</template>
<script>
import dialogBar from './Dialog'
export default {
   components:{
        'dialog-bar': dialogBar,
    },
    data(){
        return{
            sendVal: false,
        }
    },
    methods:{
        openMask(index){
            this.sendVal = true;
        },
        clickCancel(){
            console.log('点击了取消');
        },
        clickDanger(){
            console.log('这里是danger回调')
        },
        clickConfirm(){
            console.log('点击了confirm');
        }
    }
}
</script>

