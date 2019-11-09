import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/Dashboard'
import social from '@/components/Social'
import invite from '@/components/Invite'
import settings from '@/components/Settings'
import logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard
      },
      {
        path: '/social',
        name: 'social',
        component: social
      },
      {
        path: '/invite',
        name: 'invite',
        component: invite
      },
      {
        path: '/settings',
        name: 'settings',
        component: settings
      },
      {
        path: '/logout',
        name: 'logout',
        component: logout
      },
    ]
  })
  
