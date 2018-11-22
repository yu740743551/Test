const userInfo = {
    state: {
        namespaced: true,
        userInfo: {
            nickname: null, //用户名
            member_icon: null, //用户头像
            total_eb: null, //总资产eb
            total_usdt: null, //总资产usdt
            enable_eb: null, //可用资产eb
            enable_usdt: null, //可用usdt
            yday_total_eb: null, //昨日收益eb
            yday_total_usdt: null, //昨日收益usdt
            usdt_to_eb:null, //usdt兑换eb的倍数
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