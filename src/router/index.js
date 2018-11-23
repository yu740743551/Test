import Home from '@/views/home/home'
import ScanPay from '@/views/home/ScanPay'
//全局
import Layout from '@/views/layout/Index'
//应用
import Webapp from '@/views/webapp/Web'
import Upgrade from '@/views/webapp/Upgrade'
//首页
//设置
import Setting from '@/views/setting/Setting'
import Register from '@/views/setting/Register'
import Extract from '@/views/extract/Extract'
import TransferSucceed from '@/views/extract/TransferSucceed'
export default [

    {
        path: '/scanPay',
        name: 'scanPay',
        meta: { index: 2 },
        component: ScanPay

    },
    {
        path: '/extract',
        name: 'extract',
        meta: { index: 4 },
        component: Extract

    },
    {
        path: '/transferSucceed',
        name: 'transferSucceed',
        meta: { index: 5 },
        component: TransferSucceed

    },
    {
        path: '/register',
        name: 'register',
        meta: { index: 6 },
        component: Register

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
        path: '*',
        meta: { index: 0 },
        redirect: '/Home',
        component: Home,
    }



]