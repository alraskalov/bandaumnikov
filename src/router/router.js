import { createRouter, createWebHashHistory } from 'vue-router';
import AboutPage from '@/pages/AboutPage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import BeerPage from '@/pages/BeerPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/beer',
    name: 'Beer',
    component: BeerPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
