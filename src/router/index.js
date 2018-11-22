import Home from '@/views/home/home'
import ScanPay from '@/views/home/ScanPay'
//全局
import Layout from '@/views/layout/Index'
//应用
import Webapp from '@/views/webapp/Web'
//首页

import Setting from '@/views/setting/Setting'


export default [

    {
        path: '/scanPay',
        name: 'scanPay',
        meta: { index: 2 },
        component: ScanPay

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
        path: '*',
        meta: { index: 0 },
        redirect: '/Home',
        component: Home,
    }


]