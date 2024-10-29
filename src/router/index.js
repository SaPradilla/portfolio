import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/InicioView.vue';
import AdminLoginView  from '@/views/AdminLoginView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import AdminView from '@/views/AdminView.vue';
import { useUser } from '@/stores/user';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/pradi',
      name:'pradi',
      component: AdminLoginView,
    },
    {
      path:'/pradi/zone',
      name:'zone',
      component:AdminView,
      meta: { requiresAuth: true },
    },
    {
      path:'/:pathMatch(.*)*',
      name:'404',
      component: NotFoundView,
    },
  ]
});


router.beforeEach(async(to, from, next) => {
  const userStore = useUser()
  const token = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (token) {
      // Validación del token en el servidor
      try {
        const tokenVerify = await userStore.validateAndExtract({token});
        if (tokenVerify) {
          next();
        } else {
          userStore.logout();
          next('/'); // Redirige al login después del logout
        }
      } catch (error) {
        console.error("Error al validar el token:", error);
        userStore.logout();
        next('/'); // Redirige al login en caso de error
      }
    } else {
      // Si no hay token, redirige a la página de login
      next('/');
    }
  }else if (to.path === '/pradi' && token){
    next('/');
  }
  else {
    // Si la ruta no requiere autenticación, permite el acceso
    next();
  }
});

export default router;

