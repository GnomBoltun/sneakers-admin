<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Опции Товаров
        </p>
        <v-spacer></v-spacer>
        <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" variant="tonal" class="mr-3" v-bind="props">
                    СОЗДАТЬ КАТЕГОРИЮ
                </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card class="w-25 h-screen custom-dialog">
                    <v-toolbar color="primary" title="Создать категорию">
                        <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field label="Наименование*" variant="outlined"></v-text-field>
                        <v-text-field label="Порядок отображения" variant="outlined"></v-text-field>
                        <p class="mb-4">Добавить изображение</p>

                        <Dropzone></Dropzone>
                    </v-card-text>
                    <v-card-actions class="justify-start">
                        <v-btn variant="outlined" color="primary" @click="isActive.value = false">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <v-divider vertical></v-divider>
        <AppBarBadge name="Alexey Popov"></AppBarBadge>
        
    </v-app-bar>
    <v-container fluid>
        <v-item-group selected-class="text-primary underline">
            <v-row>
                <v-col xl="1" lg="2">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/options/categories">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Категории
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col xl="1" lg="2">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/options/brands">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Бренды
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col xl="1" lg="2">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/options/colors">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Цвета
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col xl="1" lg="2">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/options/size">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Размеры
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col xl="1" lg="2">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/options/seasons">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Сезоны
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
import Dropzone from '@/components/Dropzone.vue';


export default {
    data() {
        return {
            userName: "Alexey Popov",
        };
    },
    components: { Dropzone, AppBarBadge }
}
</script>

<style scoped>
.custom-dialog {
    align-self: flex-end;
}
</style>