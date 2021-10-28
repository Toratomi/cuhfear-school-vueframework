<template>
    <div>
    <v-app class="pa-6"
    >
        <Header/>
        <v-main
        class="mt-16">
            <router-view />
            
        </v-main>
        <Footer />
    </v-app>
    </div>
</template>


<script>
    import Header from '@/components/Header/Header';
    import Footer from "@/components/Footer/Footer";
    import './Layout.scss';
// import { use } from 'vue/types/umd';

    export default {
        name: 'Layout',
        data() {
            return {
            }
        },
        components: { Header, Footer },
    };
</script>

<style src="./Layout.scss" lang="scss" />
