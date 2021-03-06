import Home from '@/views/home/home'
// import ScanPay from '@/views/home/ScanPay'
//全局
import Layout from '@/views/layout/Index'
//应用
import Webapp from '@/views/webapp/Web'
import Upgrade from '@/views/webapp/Upgrade'
//首页
//设置
import Setting from '@/views/setting/Setting'
import Success from '@/views/setting/Success'
import Register from '@/views/setting/Register'
import Password from '@/views/setting/Password'
import Paypassword from '@/views/setting/Paypassword'
//提币
import Extract from '@/views/extract/Extract'
import ExtractBill from '@/views/extract/ExtractBill'
//转账
import Transfer from '@/views/transfer/Transfer'
import Bill from '@/views/transfer/Bill'
import ScanPay from '@/views/transfer/ScanPay'

//登录
import ForgetPassword from '@/views/login/ForgetPassword'
import Login from '@/views/login/Login'

export default [{
        path: '/success',
        name: 'success',
        meta: { index: 20 },
        component: Success

    },

    {
        path: '/ScanPay',
        name: 'scanPay',
        meta: { index: 8 },
        component: ScanPay

    },
    {
        path: '/extract',
        name: 'extract',
        meta: { index: 4 },
        component: Extract

    },
    {
        path: '/extractBill',
        name: 'extractBill',
        meta: { index: 5 },
        component: ExtractBill

    },

    {
        path: '/register',
        name: 'register',
        meta: { index: 6 },
        component: Register

    },

    {
        path: '/password',
        name: 'password',
        meta: { index: 8 },
        component: Password

    },
    {
        path: '/paypassword',
        name: 'paypassword',
        meta: { index: 9 },
        component: Paypassword

    },
    {
        path: '/layout',
        name: 'layout',
        meta: { index: 2 },
        component: Layout,
        children: [{
                path: '/home',
                name: 'home',
                meta: { index: 3 },
                component: Home
            },
            {
                path: '/webapp',
                name: 'webapp',
                meta: { index: 1 },
                component: Webapp
            },
            {
                path: '/setting',
                name: 'setting',
                meta: { index: 2 },
                component: Setting
            },
        ]
    },
    {
        path: '/Upgrade',
        name: 'upgrade',
        meta: { index: 2 },
        component: Upgrade
    },

    {
        path: '/Login',
        name: 'login',
        meta: { index: 1 },
        component: Login
    },
    {
        path: '/ForgetPassword',
        name: 'forgetpassword',
        meta: { index: 15 },
        component: ForgetPassword
    },
    {
        path: '/Transfer',
        name: 'transfer',
        meta: { index: 6 },
        component: Transfer
    },
    {
        path: '/Bill',
        name: 'bill',
        meta: { index: 7 },
        component: Bill
    },

    {
        path: '*',
        meta: { index: 0 },
        redirect: '/Home',
        component: Home
    }



]