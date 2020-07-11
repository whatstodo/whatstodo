import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewPositions from '@/views/ViewPositions'

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
    meta: { fullPage: true },
    component: () =>
      import(
        /* webpackChunkName: "view-add-position" */ '@/views/ViewAddPosition.vue'
      )
  },
  {
    path: '/notizen',
    name: 'Collection',
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
    path: '/account',
    name: 'Account',
    component: () =>
      import(/* webpackChunkName: "view-account" */ '@/views/ViewAccount.vue')
  },
  {
    path: '/account/aendern',
    name: 'Edit Account',
    component: () =>
      import(
        /* webpackChunkName: "view-account-edit" */ '@/views/ViewAccountEdit.vue'
      )
  },
  {
    path: '/account/loeschen',
    name: 'Delete Account',
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

export default new VueRouter({
  routes
})
