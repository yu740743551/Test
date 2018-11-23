import { Toast } from 'vant';

export default class myUtils {
    /**
     * 判断字符串是否为空
     * @param str
     * @returns {boolean}
     */
    static isNull(str) {
        return str == null || str.length === 0 || str === '';
    }

    /**
     *
     * @desc  判断是否为身份证号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    }

    /**
     *
     * @desc   判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isPhoneNum(str) {
        return /^(0|86|17951)?(1[3-9][0-9])[0-9]{8}$/.test(str)
    }


    /**
     *
     * @desc   判断是否为数字+字母
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isNum_letter(str) {
        return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{0,20}$/.test(str)
    }

    /** 
     *
     * @desc   判断是否为邮箱
     * @param  {String|Number} str
     * @return {Boolean}
     */
    static isEmail(str) {
        return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(str)
    }

    /** 
     *
     * @desc   判断接口是否请求成功
     * @param  {String|Number}  
     * @return {Boolean}
     */
    static isSuccess(r, a) {
        if (r.data.error == 98) {
            Toast({
                message: "登录信息已过期"
            });
            a.$router.push({ name: "login" });
            localStorage.removeItem("token");
            return false;
        }
        if (r.data.error == 99) {
            Toast({
                message: "登录信息已过期"
            });
            a.$router.push({ name: "login" });
            localStorage.removeItem("token");
            return false;
        }

        if (r.data.error != 0) {
            Toast({
                message: r.data.msg
            });
            return false;
        }
    }


    /** 
     *
     * @desc   ios 的input框触发
     * @param  {String|Object}
     * @return {String}
     */
    static iosActive(b) {
        b.srcElement.focus()
    }

}