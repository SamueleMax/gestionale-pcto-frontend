import { createRouter, createWebHistory } from 'vue-router';
import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const routes = [
    {
        path: '/',
        redirect: '/auth/login'
    },
    AuthRoutes,
    MainRoutes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {
    const isLoggedIn = !!localStorage.getItem('token'); // esempio

    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/auth/login');
    } else if (to.path === '/auth/login' && isLoggedIn) {
        next('/main/dashboard');
    } else {
        next();
    }
});

export default router;
