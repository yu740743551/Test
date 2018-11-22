import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messageCn from './lang/cn'
import messageEn from './lang/en'
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: localStorage.getItem('language') || 'cn',
    messages: {
        'cn': messageCn ,   // 中文语言包
        'en': messageEn    // 英文语言包
    },
})

export default  i18n
