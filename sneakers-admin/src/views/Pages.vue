<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Страницы
        </p>
        <v-spacer></v-spacer>

        <v-divider vertical></v-divider>

        <AppBarBadge name="Alexey Popov"></AppBarBadge>
    </v-app-bar>
    <v-container fluid>
        <v-item-group selected-class="text-primary underline">
            <v-row>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/pages/table">
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
                        <router-link class="text-decoration-none" to="/pages/strings">
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
import AppBarBadge from '@/components/AppBarBadge.vue';


export default {
    data() {
        return {
            userName: "Alexey Popov",
        };
    },
    components: { AppBarBadge }
}
</script>

<style scoped>
.cursor-pointer{
    cursor: pointer;
}
.custom-dialog {
    align-self: flex-end;
}
</style>