//import files necessary
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import { auth } from '../firebase';

//use routes
Vue.use(VueRouter);

//set routes
const routes = [
	{
		path      : '/',
		name      : 'Dashboard',
		component : Dashboard,
		meta      : {
			requiresAuth : true
		}
	},
	{
		path      : '/login',
		name      : 'Login',
		component : () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path      : '/settings',
		name      : 'settings',
		component : () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
		meta      : {
			requiresAuth : true
		}
	}
];

//set up router
const router = new VueRouter({
	mode   : 'history',
	base   : process.env.BASE_URL,
	routes
});

//check for logged in users
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
	//route not logged in to login, else continue
	if (requiresAuth && !auth.currentUser) {
		next('/login');
	} else {
		next();
	}
});

//export router
export default router;
