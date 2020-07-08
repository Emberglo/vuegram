//import files necessary
import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

//use routes
Vue.use(VueRouter);

//set routes
const routes = [
	{
		path      : '/',
		name      : 'Dashboard',
		component : Dashboard
	},
	{
		path      : '/login',
		name      : 'Login',
		component : () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path      : '/settings',
		name      : 'settings',
		component : () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
	}
];

//set up router
const router = new VueRouter({
	mode   : 'history',
	base   : process.env.BASE_URL,
	routes
});

//export router
export default router;
