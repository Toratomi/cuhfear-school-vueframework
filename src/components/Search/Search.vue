<template>
  <form action="#">
    <label :data-state="state">
      <input type="text" placeholder="Search" @click="state = 'open'" @blur="state='close'"/>
      <v-icon  size="28">mdi-magnify</v-icon>
    </label>
  </form>
</template>

<script>

export default {
  name: 'Search',
  data(){
    return {
      state: "close"
    }
  },
}

</script>

<style src="./Search.scss" lang="scss"></style>


