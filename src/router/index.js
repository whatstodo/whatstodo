import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewPositions from '@/views/ViewPositions'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Positions',
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
    path: '/notizen',
    name: 'Collection',
    meta: { auth: true, permissionHint: true },
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
  {
    path: '/logout',
    name: 'Logout',
    component: () =>
      import(/* webpackChunkName: "view-logout" */ '@/views/ViewLogout.vue')
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
  {
    path: '/account/loeschen',
    name: 'Delete Account',
    meta: { auth: true },
    component: () =>
      import(
        /* webpackChunkName: "view-account-delete" */ '@/views/ViewAccountDelete.vue'
      )
  },
  {
    path: '/info',
    name: 'Info',
    component: () =>
      import(/* webpackChunkName: "view-info" */ '@/views/ViewInfo.vue')
  },
  {
    path: '/howto',
    name: 'Howto',
    component: () =>
      import(/* webpackChunkName: "view-howto" */ '@/views/ViewHowto.vue')
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
    component: () =>
      import(/* webpackChunkName: "view-contact" */ '@/views/ViewContact.vue')
  },
  {
    path: '/impressum',
    name: 'Imprint',
    component: () =>
      import(/* webpackChunkName: "view-imprint" */ '@/views/ViewImprint.vue')
  }
]

const router = new VueRouter({ routes })

router.beforeEach(function(to, _from, next) {
  if (to.meta.auth && !store.state.isLoggedIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
