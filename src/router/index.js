import Vue from 'vue'
import VueRouter from 'vue-router'

//Kerangka
import Layout from '../components/LayoutHome/Layout';
import Beranda from '../views/Beranda/Beranda';
import Profil from '../views/Profil/Profil';
import BidangKeahlian from '../views/BidangKeahlian/BidangKeahlian';
import GTKSiswa from '../views/GTKSiswa/GTKSiswa';
import KegiatanSekolah from '../views/KegiatanSekolah/KegiatanSekolah';
import Berita from '../views/Berita/Berita';
import Kontak from '../views/Kontak/Kontak';
// import Login from '../views/Login/Login'

//Halaman
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: 'beranda',
    children: [
      {
        path: 'beranda',
        name: 'Beranda',
        component: Beranda
      },
      {
        path: 'profil',
        name: 'Profil',
        component: Profil
      },
      {
        path: 'bidangkeahlian',
        name: 'Bidangkeahlian',
        component: BidangKeahlian
      },
      {
        path: 'gtksiswa',
        name: 'GTKSiswa',
        component: GTKSiswa
      },
      {
        path: 'kegiatansekolah',
        name: 'KegiatanSekolah',
        component: KegiatanSekolah
      },
      {
        path: 'berita',
        name: 'Berita',
        component: Berita
      },
      {
        path: 'kontak',
        name: 'Kontak',
        component: Kontak
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
