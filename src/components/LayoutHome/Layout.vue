<template>
    <div>
    <v-app class="pa-6"
    >
        <Header/>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
    </div>
</template>


<script>
    import Header from '@/components/Header/Header';
    import './Layout.scss';
// import { use } from 'vue/types/umd';

    export default {
        name: 'Layout',
        data() {
            return {
            }
        },
        components: { Header },
    };
</script>

<style src="./Layout.scss" lang="scss" />
