import VueRouter from 'vue-router'
import goods from '@/components/goods'
import ratings from '@/components/ratings'
import sellers from '@/components/sellers'

const routes = [
{ path: '/goods', component: goods },
{ path: '/ratings', component: ratings },
{ path: '/sellers', component: sellers }
]

const router = new VueRouter({ routes, linkActiveClass: 'active' })

// router.go('/goods')

export default router
