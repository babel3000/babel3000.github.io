import Vue from 'vue'
import Router from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Lab from '@/pages/Lab'
import NewsList from '@/pages/NewsList'
import News from '@/pages/News'
import BookTable from '@/pages/BookTable'
Vue.config.productionTip = false
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sobre-nos/',
            name: 'About',
            component: About
        },
        {
            path: '/produtos-locais/',
            name: 'Products',
            component: Products
        },
        {
            path: '/lab/',
            name: 'Lab',
            component: Lab
        },
        {
            path: '/noticias/',
            name: 'NewsList',
            component: NewsList
        },
        {
            path: '/noticias/:id',
            name: 'News',
            component: News
        },
        {
            path: '/book/',
            name: 'BookTable',
            component: BookTable
        }
    ]
})