import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import userInfo from './userInfo.js'
const store=new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        userInfo,
    },
    
})
export default store;