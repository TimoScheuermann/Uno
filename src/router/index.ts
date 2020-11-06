import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);
const prefix = 'Uno | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: prefix + 'Home'
      }
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import('@/views/Stats.vue'),
      meta: {
        title: prefix + 'Statistik'
      }
    },
    {
      path: '/rounds',
      name: 'rounds',
      component: () => import('@/views/Rounds.vue'),
      meta: {
        title: prefix + 'Runden'
      }
    },
    {
      path: '*',
      redirect: { name: 'home' }
    }
  ]
});

export default router;

export function getTitle(route: Route = router.currentRoute): string {
  const name: string = route.meta.title;
  if (!name) prefix;
  return name;
}
