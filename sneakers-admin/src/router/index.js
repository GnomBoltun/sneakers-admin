
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'options',
        name: 'Options',
        meta: {auth: true},
        component: () => import( '@/views/Options.vue'),
        children: [
          {
            path: 'categories',
            name: 'categories',
            meta: {auth: true},
            component: () => import('@/views/OptionsCategories.vue')
          },
          {
            path: 'brands',
            name: 'brands',
            meta: {auth: true},
            component: () => import('@/views/OptionsBrands.vue')
          },
          {
            path: 'colors',
            name: 'colors',
            meta: {auth: true},
            component: () => import('@/views/OptionsColors.vue')
          },
          {
            path: 'size',
            name: 'size',
            meta: {auth: true},
            component: () => import('@/views/OptionsSize.vue')
          },
          {
            path: 'seasons',
            name: 'seasons',
            meta: {auth: true},
            component: () => import('@/views/OptionsSeasons.vue')
          },
          
        ]
      },
      {
        path: 'goods',
        path: 'Goods',
        meta: {auth: true},
        component: () => import('@/views/Goods.vue')
      },
      {
        path: 'admin',
        path: 'Admin',
        meta: {auth: true},
        component: () => import('@/views/UsersAdmin.vue')
      },
      {
        path: 'users',
        path: 'Users',
        meta: {auth: true},
        component: () => import('@/views/MPUsers.vue')
      },
      {
        path: 'pages',
        path: 'Pages',
        meta: {auth: true},
        component: () => import('@/views/Pages.vue'),
        children: [
          {
            path: 'table',
            name: 'Table',
            meta: {auth: true},
            component: () => import('@/views/PagesTable.vue')
          },
          {
            path: 'strings',
            name: 'Strings',
            meta: {auth: true},
            component: () => import('@/views/PagesStrings.vue')
          },
        ]
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/login/Login.vue'),
    children: [
        {
          path: 'login',
          name: 'Login',
          meta: {auth: false},
          component: () => import('@/views/Login.vue')
        },
        {
          path: 'reset',
          name: 'Reset',
          meta: {auth: false},
          component: () => import('@/views/PasswordReset.vue')
        },
        {
          path: 'invite',
          name: 'Invite',
          meta: {auth: false},
          component: () => import('@/views/Invite.vue')
        }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
})

const isAuth = (to) => {
  return to.meta.auth === true && localStorage.getItem('isAuth') !== true
}

router.beforeEach((to, from) => {

  const auth = isAuth(to);
  if(!auth && to.name !== 'Login') return '/login/login';

})


export default router
