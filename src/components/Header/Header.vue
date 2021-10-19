<template>
  <v-app-bar
    class="main-header"
    height="58"
    fixed
    color='primary'
    dark>
    <v-toolbar-title
    @click="Home">Lembaga Pendidikan Cuh Fear</v-toolbar-title>
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
              style="font-size: 23px"
              color="sok">mdi-account-circle</v-icon>
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
              color="sik"
              class="text-capitalize"
              @click="logOut">Sign Out
            </v-btn>
          </div>
        </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  import config from '../../config';
  import Search from "@/components/Search/Search";

  export default {
    props: [''],
    name: 'Header',
    components: { Search },
    data: () => ({
      // loading: true,
      config,
      searchCollapse: true,
    }),
    methods: {
      logOut: function () {
        this.$router.push('/about');
      },
      Home: function () {
        this.$router.push('/home');
      }
    }
  };
</script>

<style src="./Header.scss" lang="scss"></style>
