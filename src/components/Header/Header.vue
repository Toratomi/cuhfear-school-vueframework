<template>
  <v-app-bar
    class="main-header"
    height="50"
    fixed
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll>
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
    <v-app-bar-title
    @click="Home">Lembaga Pendidikan Cuh Fear</v-app-bar-title>
    <v-spacer></v-spacer>
    <Search />
    <v-menu
      min-width="180"
      offset-y
      bottom
      left
      nudge-bottom="10">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="mr-0"
            icon
            v-bind="attrs"
            v-on="on">
            <v-icon
              style="font-size: 23px">mdi-account-circle</v-icon>
            </v-btn>
        </template>
        <v-list>
          <!-- <div class="text-h5 grey--text text--darken-3 px-4 pt-4">Nama User</div> -->
          <div class="text-h8 grey--text text--darken-3 px-4 pt-4">Login Sebagai: Admin</div>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in account"
              :key="i">
                <v-list-item-icon class="mr-4">
                  <v-icon
                    :color="item.color"
                    v-text="item.icon">
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title :color='config.light.textColor' v-text="item.text"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <div class="d-flex justify-center my-3">
            <v-btn
              width="80%"
              large
              outlined
              color="primary"
              class="text-capitalize"
              @click="logOut">Sign Out
            </v-btn>
          </div>
        </v-list>
    </v-menu>
    <template v-slot:extension>
      <v-tabs
          v-model="currentItem"
          fixed-tabs
          slider-color="white"
        >
        <v-tab
        color="primary"
        v-for="item in items"
        :key="item.text"
        :href="item.href ? item.href : null"
        :to="item.link === '#' ? null : item.link"
        link>
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
  import Search from "@/components/Search/Search";

  export default {
    props: [''],
    name: 'Header',
    components: { Search },
    data: () => ({
      currentItem: 'tab-Web',
      items: [
        { title: 'Dashboard', icon: 'mdi-home', link: '/home' },
          // { title: 'Data Kependudukan dan Sosial', icon: 'mdi-account-multiple', link: '/Datkes' },
          { title: 'Profil', icon: 'mdi-account-multiple', link: '/about' },
          // { title: 'Profil Kelurahan', icon: 'fa-institution', link: '/typography' },
          { title: 'Program Sekolah', icon: 'fa-institution', link: '/home' },
          // { title: 'Notifications', icon: 'mdi-bell-outline', link: '/notifications' },
          { title: 'Bidang Keahlian', icon: 'mdi-tooltip-image', link: '/about' },
          { title: 'GTK dan Siswa', icon: 'mdi-tooltip-image', link: '/home' },
          { title: 'Sarana Prasarana', icon: 'mdi-tooltip-image', link: '/about' },
          { title: 'Kegiatan Sekolah', icon: 'mdi-tooltip-image', link: '/home' },
          { title: 'Berita', icon: 'mdi-tooltip-image', link: '/about' },
          { title: 'Galeri', icon: 'mdi-tooltip-image', link: '/home' },
          { title: 'Kontak', icon: 'mdi-tooltip-image', link: '/about' },
          { title: 'Daftar', icon: 'mdi-tooltip-image', link: '/home' },
          // {
          //   title: 'UI Elements',
          //   icon: 'mdi-image-filter-none',
          //   link: '/icons',
          //   model: false,
          //   children: [
          //     { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
          //     { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
          //     // { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
          //   ],
          // },
      ],
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',
      ],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

      // loading: true,
      searchCollapse: true,
    }),
    methods: {
      logOut: function () {
        this.$router.push('/about');
      },
      Home: function () {
        this.$router.push('/home');
      },
      About: function () {
        this.$router.push('/about');
      }
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
