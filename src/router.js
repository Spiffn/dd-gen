import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import CharGen from '@/views/CharGen.vue';
import Game from '@/views/Game.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/generator',
      name: 'generator',
      component: CharGen,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: Game,
    },
  ],
});
