import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Positions',
    component: () =>
      import(
        /* webpackChunkName: "view-positions" */ '@/views/ViewPositions.vue'
      )
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
    component: () =>
      import(
        /* webpackChunkName: "view-add-position" */ '@/views/ViewAddPosition.vue'
      )
  },
  {
    path: '/notizen',
    name: 'Notes',
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
