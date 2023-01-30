// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'options',
        name: 'Options',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Options.vue'),
        children: [
          {
            path: 'categories',
            name: 'categories',
            component: () => import('@/views/OptionsCategories.vue')
          },
          {
            path: 'brands',
            name: 'brands',
            component: () => import('@/views/OptionsBrands.vue')
          },
          {
            path: 'colors',
            name: 'colors',
            component: () => import('@/views/OptionsColors.vue')
          },
          {
            path: 'size',
            name: 'size',
            component: () => import('@/views/OptionsSize.vue')
          },
          {
            path: 'seasons',
            name: 'seasons',
            component: () => import('@/views/OptionsSeasons.vue')
          },
          
        ]
      },
      {
        path: 'goods',
        path: 'Goods',
        component: () => import('@/views/Goods.vue')
      },
      {
        path: 'admin',
        path: 'Admin',
        component: () => import('@/views/UsersAdmin.vue')
      },
      {
        path: 'users',
        path: 'Users',
        component: () => import('@/views/MPUsers.vue')
      },
      {
        path: 'pages',
        path: 'Pages',
        component: () => import('@/views/Pages.vue'),
        children: [
          {
            path: 'table',
            name: 'Table',
            component: () => import('@/views/PagesTable.vue')
          },
          {
            path: 'strings',
            name: 'Strings',
            component: () => import('@/views/PagesStrings.vue')
          },
        ]
      },
    ],
  },
]

const isAuth = true;

const authRoutes = [
  {
    path: '/',
    component: () => import('@/layouts/login/Login.vue'),
    children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/Login.vue')
        },
        {
          path: 'reset',
          name: 'reset',
          component: () => import('@/views/PasswordReset.vue')
        },
        {
          path: 'invite',
          name: 'invite',
          component: () => import('@/views/Invite.vue')
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: isAuth ? routes : authRoutes,
})

export default router
