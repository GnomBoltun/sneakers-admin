<template>
    <v-app class="myFont">
        <v-main>
            <v-container class="w-100 h-screen">
                <v-row class="justify-center align-center h-100">
                    <v-col xl="4">
                        <router-view></router-view>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
$font-family: 'Montserrat', sans-serif;

.myFont {
    font-family: $font-family, sans-serif !important;
}
</style>