import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Shopcart = () => import('@/views/shopcart/Shopcart')
const My = () => import('@/views/my/My')

const routes = [
    {
        path: '/',
        redirect: '/home',//重定向 默认进入首页
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/shopcart',
        component: Shopcart,
    },
    {
        path: '/my',
        component: My,
    },


]

const router = new VueRouter({
    routes,
})


export default router