import Home from '@/views/home/home'
import ScanPay from '@/views/home/ScanPay'

export default [{
        path: '/home',
        name: 'home',
        meta: { index: 1 },
        component: Home

    },
    {
        path: '/scanPay',
        name: 'scanPay',
        meta: { index: 2 },
        component: ScanPay

    }

]