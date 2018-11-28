const userInfo = {
    state: {
        namespaced: true,
        userInfo: {
            curr_total: null, //可用虚拟货币总额度
            curr: null, //货币单位
            today_power: null, //今日算力
            all_power: null, //全网算力
            middle: null, //中级 对应数量
            super: null, //超级 对应数量
            highe: null //高级 对应数量
          
        }
    },
    getters: {
        userInfos: state => {
            return state.userInfo
        }
    },
    mutations: {
        set_userInfo: (state, commit) => {
            // state.userInfo = commit;
            const { val, key } = commit;
            state.userInfo[key] = val;
        },
    }
}
export default userInfo