<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Товары
        </p>
        <v-spacer></v-spacer>

        <!--Import Dialog-->

        <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" variant="tonal" class="mr-3" v-bind="props">
                    Загрузить из Excel
                </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card class="w-25 h-screen custom-dialog">
                    <v-toolbar color="primary" title="Загрузить из Excel">
                        <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <p class="text-body-1">Шаблон списка товаров для загрузки в систему</p>
                        <v-btn class="my-5" variant="text" color="primary" prepend-icon="mdi-cloud-download">
                            Шаблон.xlsx
                        </v-btn>
                        <p class="text-body-2">Скачайте шаблон себе на компьютер, заполните его и загрузите получившийся
                            документ в поле ниже</p>
                        <v-file-input label="Перетащите файл сюда" variant="underlined" class="mt-4"
                            prepend-icon="mdi-cloud-upload">
                        </v-file-input>
                    </v-card-text>
                    <v-card-actions class="justify-start">
                        <v-btn variant="tonal" color="primary" class="ma-4"
                            @click="isActive.value = false">Загрузить</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <!--Creation Dialog-->

        <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" variant="tonal" class="mr-3" v-bind="props">
                    СОЗДАТЬ ТОВАР
                </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card class="w-25 h-screen custom-dialog">
                    <v-toolbar color="primary" title="Создать товар">
                        <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field label="Артикул*" variant="outlined"></v-text-field>
                        <v-text-field label="Название*" variant="outlined"></v-text-field>
                        <v-text-field label="Описание*" variant="outlined"></v-text-field>
                        <v-text-field label="Цена*" variant="outlined"></v-text-field>
                        <v-text-field label="Состав и уход" variant="outlined"></v-text-field>
                        <p class="text-h6">Выберите категории</p>
                        <v-select class="mt-4" v-model="value" :items="items" chips label="Категории" multiple>
                        </v-select>

                        <p class="text-h6">Выберите брэнды</p>
                        <v-select class="mt-4" v-model="value" :items="items" chips label="Бренды" multiple>
                        </v-select>

                        <p class="text-h6">Выберите цвета</p>
                        <v-row>
                            <v-col>
                                <v-select class="mt-4" v-model="value" :items="items" label="Цвет">
                                </v-select>
                            </v-col>
                            <v-col>
                                <v-select class="mt-4" v-model="value" :items="items" label="Цена">
                                </v-select>
                            </v-col>
                            <v-col md="2">
                                <v-btn icon="mdi-plus" class="mt-5" color="primary"></v-btn>
                            </v-col>
                        </v-row>

                        <p class="text-h6">Выберите размеры</p>
                        <v-row>
                            <v-col>
                                <v-select class="mt-4" v-model="value" :items="items" label="Размер">
                                </v-select>
                            </v-col>
                            <v-col>
                                <v-select class="mt-4" v-model="value" :items="items" label="Цена">
                                </v-select>
                            </v-col>
                            <v-col md="2">
                                <v-btn icon="mdi-plus" class="mt-5" color="primary"></v-btn>
                            </v-col>
                        </v-row>

                        <p class="text-h6">Выберите сезоны</p>
                        <v-select class="mt-4" v-model="value" :items="items" chips label="Сезоны" multiple>
                        </v-select>

                        <p class="text-h6">Добавить изображение*</p>
                        <v-file-input label="Перетащите изображение сюда" variant="underlined" class="mt-4"
                            prepend-icon="mdi-camera"></v-file-input>

                        <v-select class="mt-4" v-model="value" :items="items" label="Статус видимости">
                        </v-select>

                        <p class="text-h6">Выберите похожие товары</p>
                        <v-select class="mt-4" v-model="value" :items="items" chips label="Похожие товары" multiple>
                        </v-select>

                    </v-card-text>
                    <v-card-actions class="justify-start">
                        <v-btn variant="tonal" color="primary" class="ma-4"
                            @click="isActive.value = false">Сохранить</v-btn>
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

    <v-container class="shadow mx-4" fluid>
        <v-row>
            <v-col class="d-flex">
                <v-text-field class="my-4 mx-2" label="Поиск по артикулу" variant="outlined"
                    append-inner-icon="mdi-magnify"></v-text-field>
                <v-select class="mt-4 mx-2" v-model="categoriesValue" :items="categories" label="Категория">
                </v-select>
                <v-select class="mt-4 mx-2" v-model="brandsValue" :items="brands" label="Бренд">
                </v-select>
                <v-select class="mt-4 mx-2" v-model="colorsValue" :items="colors" label="Цвет">
                </v-select>
            </v-col>
            <v-col md="2" class="d-flex justify-end">
                <v-btn class="ma-5" variant="outlined" size="large" icon color="primary">
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn class="mt-5 mr-4" size="large" icon color="primary">
                    <v-icon>mdi-filter-variant</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex maMinus">
                <v-select class="mx-2" v-model="sizeValue" :items="size" label="Размер">
                </v-select>
                <v-select class="mx-2" v-model="seasonValue" :items="season" label="Сезон">
                </v-select>
                <v-select class="mx-2" v-model="statusValue" :items="status" label="Статус видимости">
                </v-select>
            </v-col>
            <v-col md="4"></v-col>
        </v-row>
    </v-container>

    <v-table class="mx-4" fixed-header height="700">
        <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Артикул</th>
                <th class="text-left">Наименование</th>
                <th class="text-left">Категория</th>
                <th class="text-left">Брэнд</th>
                <th class="text-left">Цена</th>
                <th class="text-left">Статус видимости</th>
                <th class="text-left">Действия</th>

            </tr>
            <tr v-for="item in goods" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.article }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.brand }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.status }}</td>
                <td>

                    <!--CHANGE GOODS DIALOG-->

                    <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-pencil" variant="text" v-bind="props"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="w-25 h-screen custom-dialog">
                                <v-toolbar color="primary" title="Создать товар">
                                    <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-text-field label="Артикул*" variant="outlined"
                                        v-model="item.article"></v-text-field>
                                    <v-text-field label="Название*" variant="outlined"
                                        v-model="item.name"></v-text-field>
                                    <v-text-field label="Описание*" variant="outlined"></v-text-field>
                                    <v-text-field label="Цена*" variant="outlined" v-model="item.price"></v-text-field>
                                    <v-text-field label="Состав и уход" variant="outlined"></v-text-field>
                                    <p class="text-h6">Выберите категории</p>
                                    <v-select class="mt-4" v-model="item.category" :items="items" chips
                                        label="Категории" multiple>
                                    </v-select>

                                    <p class="text-h6">Выберите брэнды</p>
                                    <v-select class="mt-4" v-model="item.brand" :items="items" chips label="Бренды"
                                        multiple>
                                    </v-select>

                                    <p class="text-h6">Выберите цвета</p>
                                    <v-row>
                                        <v-col>
                                            <v-select class="mt-4" v-model="value" :items="items" label="Цвет">
                                            </v-select>
                                        </v-col>
                                        <v-col>
                                            <v-select class="mt-4" v-model="value" :items="items" label="Цена">
                                            </v-select>
                                        </v-col>
                                        <v-col md="2">
                                            <v-btn icon="mdi-plus" class="mt-5" color="primary"></v-btn>
                                        </v-col>
                                    </v-row>

                                    <p class="text-h6">Выберите размеры</p>
                                    <v-row>
                                        <v-col>
                                            <v-select class="mt-4" v-model="value" :items="items" label="Размер">
                                            </v-select>
                                        </v-col>
                                        <v-col>
                                            <v-select class="mt-4" v-model="value" :items="items" label="Цена">
                                            </v-select>
                                        </v-col>
                                        <v-col md="2">
                                            <v-btn icon="mdi-plus" class="mt-5" color="primary"></v-btn>
                                        </v-col>
                                    </v-row>

                                    <p class="text-h6">Выберите сезоны</p>
                                    <v-select class="mt-4" v-model="value" :items="items" chips label="Сезоны" multiple>
                                    </v-select>

                                    <p class="text-h6">Добавить изображение*</p>
                                    <v-file-input label="Перетащите изображение сюда" variant="underlined" class="mt-4"
                                        prepend-icon="mdi-camera"></v-file-input>

                                    <v-select class="mt-4" v-model="value" :items="items" label="Статус видимости">
                                    </v-select>

                                    <p class="text-h6">Выберите похожие товары</p>
                                    <v-select class="mt-4" v-model="value" :items="items" chips label="Похожие товары"
                                        multiple>
                                    </v-select>

                                </v-card-text>
                                <v-card-actions class="justify-start">
                                    <v-btn variant="tonal" color="primary" class="ma-4"
                                        @click="isActive.value = false">Сохранить</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-btn icon="mdi-trash-can" variant="text"></v-btn>
                </td>
            </tr>
        </thead>

    </v-table>
</template>

<script>
export default {
    data() {
        return {
            userName: 'Alexey Popov',
            brands: ['Adidas', 'Nike', 'Puma', 'NB'],
            brandsValue: [],
            categories: ['Adida', 'Nie', 'Pua', 'N'],
            categoriesValue: [],
            colors: ['Adids', 'Nke', 'uma', 'N'],
            colorsValue: [],
            size: ['Adids', 'ike', 'Pma', 'N'],
            sizeValue: [],
            status: ['Adidas', 'ike', 'uma', 'NB'],
            statusValue: [],
            season: ['Adias', 'Nie', 'Puma', 'N'],
            seasonValue: [],

            goods: [
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },
                {
                    id: 1,
                    article: 'Nike',
                    name: 'Adidas',
                    category: 'Shoes',
                    brand: 'Adidas',
                    price: 6900,
                    status: 0

                },

            ]
        }
    }
}
</script>

<style scoped>
.custom-dialog {
    align-self: flex-end;
}

.maMinus {
    margin-top: -30px;
}
</style>