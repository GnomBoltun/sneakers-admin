<template>
    <v-app>
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