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
                        <p>Добавить изображение</p>


                        <v-file-input label="Перетащите изображение сюда" variant="underlined" class="mt-4"
                            prepend-icon="mdi-cloud-upload">
                        </v-file-input>
                    </v-card-text>
                    <v-card-actions class="justify-start">
                        <v-btn variant="outlined" color="primary" @click="isActive.value = false">Сохранить</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

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
                        <router-link class="text-decoration-none" to="options/categories">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Категории
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="options/brands">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Бренды
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/colors">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Цвета
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/size">
                            <v-card :class="['d-flex align-center', selectedClass]" @click="toggle">
                                <div class="text-body-1 text-center pa-4">
                                    Размеры
                                </div>
                            </v-card>
                        </router-link>
                    </v-item>
                </v-col>
                <v-col md="1">
                    <v-item v-slot="{ isSelected, selectedClass, toggle }">
                        <router-link class="text-decoration-none" to="/seasons">
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
export default {
    data() {
        return {
            userName: "Alexey Popov",
        };
    },
}
</script>

<style scoped>
.custom-dialog {
    align-self: flex-end;
}
</style>