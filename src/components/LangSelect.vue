<template>
    <div class="lang_select" @click="handleSetLanguage">
        <span class="btn-dropdown">{{selectLang}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectLang:"Change English"
        }
    },
    computed: {
        //计算属性得到state里面的值
        language() {
            return this.$store.state.language;
        }
    },
    methods:{
        handleSetLanguage(){
            const lang= this.$i18n.locale;
            this.$store.dispatch('setLanguage', lang);
            if(lang==="en"){
                this.$i18n.locale = 'cn'
                localStorage.setItem('language','cn')
                this.selectLang="中文"
            }else{
                this.$i18n.locale = 'en'
                 localStorage.setItem('language','en')
                 this.selectLang="English"
            }
            const data= {
                language:lang
            }
            console.log(lang)
            this.$axios.post("/user/language",data)
            .then(res=>{
                console.log(res.data)
            })
        }
    }
}
</script>
<style scoped>
    .lang_select{
        height: 20px;
        color: #FFFFFF;
    }
</style>


