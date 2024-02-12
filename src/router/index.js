import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const canonical = document.querySelector("link[rel='canonical']");
  
  const urlWithoutQueryParams = location.href.split('?')[0];
  canonical.setAttribute('href', urlWithoutQueryParams);

  next();
});

export default router
