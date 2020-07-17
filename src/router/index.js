import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewPositions from '@/views/ViewPositions'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Positions',
    meta: { saveScroll: true },
    component: ViewPositions
  },
  {
    path: '/position/:id',
    name: 'Position',
    meta: { fullPage: true },
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "view-positions" */ '@/views/ViewPosition.vue'
      )
  },
  {
    path: '/neu',
    name: 'Add',
    meta: { auth: true, permissionHint: true, fullPage: true },
    component: () =>
      import(
        /* webpackChunkName: "view-add-position" */ '@/views/ViewAddPosition.vue'
      )
  },
  {
    path: '/profil/:userId',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "view-profile" */ '@/views/ViewProfile.vue')
  },
  {
    path: '/notizen',
    name: 'Collection',
    meta: { auth: true, permissionHint: true, invert: true, fullPage: true },
    component: () =>
      import(
        /* webpackChunkName: "view-collection" */ '@/views/ViewCollection.vue'
      )
  },
  {
    path: '/suche',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "view-search" */ '@/views/ViewSearch.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "view-login" */ '@/views/ViewLogin.vue')
  },
  // {
  //   path: '/logout',
  //   name: 'Logout',
  //   component: () =>
  //     import(/* webpackChunkName: "view-logout" */ '@/views/ViewLogout.vue')
  // },
  {
    path: '/passwort',
    name: 'New Password',
    component: () =>
      import(/* webpackChunkName: "view-password" */ '@/views/ViewPassword.vue')
  },
  {
    path: '/account',
    name: 'Account',
    meta: { auth: true },
    component: () =>
      import(/* webpackChunkName: "view-account" */ '@/views/ViewAccount.vue')
  },
  {
    path: '/account/aendern',
    name: 'Edit Account',
    meta: { auth: true },
    component: () =>
      import(
        /* webpackChunkName: "view-account-edit" */ '@/views/ViewAccountEdit.vue'
      )
  },
  // {
  //   path: '/account/loeschen',
  //   name: 'Delete Account',
  //   meta: { auth: true },
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "view-account-delete" */ '@/views/ViewAccountDelete.vue'
  //     )
  // },
  {
    path: '/info',
    name: 'Info',
    meta: { contentId: 'info' },
    component: () =>
      import(/* webpackChunkName: "view-page" */ '@/views/ViewPage.vue')
  },
  {
    path: '/howtodo',
    name: 'Howto',
    meta: { contentId: 'howtodo' },
    component: () =>
      import(/* webpackChunkName: "view-page" */ '@/views/ViewPage.vue')
  },
  {
    path: '/teilnehmende',
    name: 'Participants',
    component: () =>
      import(
        /* webpackChunkName: "view-participants" */ '@/views/ViewParticipants.vue'
      )
  },
  {
    path: '/kontakt',
    name: 'Contact',
    meta: { contentId: 'contact' },
    component: () =>
      import(/* webpackChunkName: "view-page" */ '@/views/ViewPage.vue')
  },
  {
    path: '/impressum',
    name: 'Imprint',
    meta: { contentId: 'imprint' },
    component: () =>
      import(/* webpackChunkName: "view-page" */ '@/views/ViewPage.vue')
  },
  {
    path: '/datenschutz',
    name: 'Privacy',
    meta: { contentId: 'privacy' },
    component: () =>
      import(/* webpackChunkName: "view-page" */ '@/views/ViewPage.vue')
  }
]

const router = new VueRouter({
  routes,

  scrollBehavior: (to, _from, savedPosition) =>
    to.meta.saveScroll ? savedPosition : { x: 0, y: 0 }
})

router.beforeEach(function(to, _from, next) {
  if (to.meta.auth && !store.state.isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
