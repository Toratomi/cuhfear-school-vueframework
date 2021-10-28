<template>
  <v-footer
    
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href="icon.link">
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>

export default {
  name: 'Footer',

  data: () => ({
    icons: [
      {icon: 'mdi-facebook', link: 'https://twitter.com/'},
      {icon: 'mdi-twitter', link: 'https://www.facebook.com/'},
      {icon: 'mdi-github', link: 'https://github.com/'},

    ],
    // links: [
    //   {text: 'Flatlogic', link: 'https://flatlogic.com/'},
    //   {text: 'About Us', link: 'https://flatlogic.com/about'},
    //   {text: 'Blog', link: 'https://flatlogic.com/blog'},
    // ]
  }),
}
</script>

<style src="./Footer.scss" lang="scss"/>

