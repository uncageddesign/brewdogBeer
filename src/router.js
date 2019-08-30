import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Beers from '@/views/Beers';
import Favourites from '@/views/Favourites';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/beers',
      name: 'beers',
      component: Beers
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
});

export default router;
