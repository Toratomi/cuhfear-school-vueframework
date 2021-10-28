<template>
    <div>
        <v-col
        cols="12">
            <h1 class="display-2 font-weight-bold mb-3">
            Profil SMA Cuh Fear
            </h1>
        </v-col>
        <v-col
        cols="12">
            <v-expansion-panels>
                <v-expansion-panel
                v-for="(item,i) in 5"
                :key="i"
                >
                    <v-expansion-panel-header>
                        <h3>Item</h3>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates quod officia neque provident facilis accusamus velit porro est amet cupiditate pariatur fugiat, optio dolore quia ipsum, nulla odio aspernatur.</h4>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </div>
</template>

<script>
export default {
    data: () => ({
    }),
}
</script>

<style src="./ProgramSekolah.scss" lang="scss" scoped/>
