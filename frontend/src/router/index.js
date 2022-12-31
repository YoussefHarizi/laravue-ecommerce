import {createRouter, createWebHistory} from "vue-router";
import Login from '../views/Login.vue'
import Dashboard from "../views/Dashboard.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import AppLayout from "../components/AppLayout.vue";
import Products from "../views/Products.vue";
import store from "../store/index.js";
import NotFound from "../views/NotFound.vue";
const routes=[
    {
        path:'/app',
        name:'app',
        component:AppLayout,
        meta:{
            requireAuthorization:true
        },
        children:[
            {
                path:'dashboard',
                name:'app.dashboard',
                component:Dashboard
            },
            {
                path:'products',
                name:'app.products',
                component:Products
            },

        ]
    },

    {
        path:'/login',
        name:'login',
        meta:{
            guest:true
        },
        component:Login
    },
    {
        path:'/request-password',
        name:'requestPassword',
        meta:{
            guest:true
        },
        component:RequestPassword
    },
    {
        path:'/reset-password/:token',
        name:'resetPassword',
        meta:{
            guest:true
        },
        component:ResetPassword
    },
    {
        path:'/:pathMatch(.*)',
        name:'notfound',
        component:NotFound
    },
]
const router=createRouter({
    history:createWebHistory(),
    routes

})
router.beforeEach((to,from,next)=>{
    console.log(to);
    if(to.meta.requireAuthorization && !store.state.user.token){
        next({name:'login'})
    }else if(to.meta.guest && store.state.user.token){
        next({name:'app.dashboard'})
    }else{
        next()
    }

})

export default router
