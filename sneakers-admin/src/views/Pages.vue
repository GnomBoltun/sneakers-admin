<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Страницы
        </p>
        <v-spacer></v-spacer>

        <v-divider vertical></v-divider>

        <v-btn class="mx-2" icon="mdi-bell-outline">

        </v-btn>

        <v-divider vertical></v-divider>
        <v-avatar class="pl-3" image="../assets/logo.png"></v-avatar>
        <p class="px-3">
            {{ userName }}
        </p>
        <v-btn icon="mdi-chevron-down">

        </v-btn>
    </v-app-bar>
    <v-container fluid>
        <v-item-group selected-class="text-primary underline">
            <v-row>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="pages/table">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Страницы
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="pages/strings">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Строки
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>


            </v-row>
        </v-item-group>

        <router-view class="mt-4"></router-view>
    </v-container>
</template>


<script>
export default {
    data() {
        return {
            userName: 'Alexey Popov',
        }
    }
}
</script>

<style scoped>
.custom-dialog {
    align-self: flex-end;
}
</style>