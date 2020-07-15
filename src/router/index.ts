import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);
const prefix = 'PROJECT | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/.vue'),
      meta: {
        title: prefix + 'Home',
      },
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;

export function getTitle(route: Route = router.currentRoute): string {
  let name: string = route.meta.title;
  if (!name) prefix;
  if (name.includes('%icon%'))
    name = name.split('%icon%').join(route.params.icon);
  if (name.includes('%issue%'))
    name = name.split('%issue%').join(route.params.issue);
  return name;
}