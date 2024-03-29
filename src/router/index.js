import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Customers from '@/components/Customers';
import Rooms from '@/components/Rooms';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
    },
    {
      path: '/rooms',
      name: 'Rooms',
      component: Rooms,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
