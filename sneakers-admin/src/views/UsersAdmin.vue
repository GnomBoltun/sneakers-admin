<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Пользователи админ панели
        </p>
        <v-spacer></v-spacer>

        <!--Import Dialog-->

        <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn color="primary" variant="tonal" class="mr-3" v-bind="props">
                    Добавить пользователя
                </v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card class="w-25 h-screen custom-dialog">
                    <v-toolbar color="primary" title="Новый пользователь">
                        <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-text-field label="ФИО*" variant="outlined"></v-text-field>
                        <v-text-field label="Телефон" variant="outlined"></v-text-field>
                        <v-text-field label="Email*" variant="outlined"></v-text-field>
                        <v-select class="mt-4" v-model="value" :items="items" label="Статус">
                        </v-select>
                        <v-file-input label="Перетащите автар сюда сюда" variant="underlined" class="mt-4"
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

        <v-divider vertical></v-divider>

        <v-btn class="text-none" stacked>
            <v-badge content="2" color="info">
                <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
        </v-btn>


        <v-divider vertical></v-divider>
        <v-avatar class="pl-3" image="../assets/logo.png"></v-avatar>
        <p class="px-3">
            {{ userName }}
        </p>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn icon="mdi-chevron-down" v-bind="props"></v-btn>
            </template>

            <v-list>
                <v-list-item>
                    <v-list-item-title class="cursor-pointer">Выйти <v-icon>mdi-exit-to-app</v-icon></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-container class="shadow mx-4" fluid>
        <v-row>
            <v-col md="6" class="d-flex">
                <v-text-field class="my-4 mx-2" label="Поиск по ФИО" variant="outlined"
                    append-inner-icon="mdi-magnify"></v-text-field>
                <v-select class="mt-4 mx-2" v-model="value" :items="items" label="Статус">
                </v-select>
            </v-col>
            <v-col md="6" class="d-flex justify-end">
                <v-btn class="ma-5" variant="outlined" size="large" icon color="primary">
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
                <v-btn class="mt-5 mr-4" size="large" icon color="primary">
                    <v-icon>mdi-filter-variant</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>

    <v-table class="mx-4" fixed-header height="700">
        <thead>
            <tr>
                <th class="text-left"></th>
                <th class="text-left">ФИО</th>
                <th class="text-left">Телефон</th>
                <th class="text-left">E-Mail</th>
                <th class="text-left">Статус</th>
                <th class="text-left">Действия</th>

            </tr>
            <tr v-for="item in users" :key="item.id">
                <td><v-avatar image="../assets/logo.png"></v-avatar></td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>
                    <p v-if="item.status === 'Уволен'" class="text-red"><v-avatar style="height: 10px; width: 10px"
                            class="mr-2" color="red"></v-avatar>Уволен</p>
                    <p v-if="item.status === 'Активен'" class="text-green"><v-avatar style="height: 10px; width: 10px"
                            class="mr-2" color="green"></v-avatar>Активен</p>
                </td>
                <td>
                    <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-note" variant="text" v-bind="props"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="w-25 h-screen custom-dialog">
                                <v-toolbar color="primary" title="Посмотреть пользователя">
                                    <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-avatar style="width: 120px; height:120px" class="mt-4"
                                        image="../assets/logo.png"></v-avatar>
                                    <p class="text-h6 mt-4">ФИО</p>
                                    <p>{{ item.name }}</p>
                                    <p class="text-h6 mt-4">Телефон</p>
                                    <p>{{ item.phone }}</p>
                                    <p class="text-h6 mt-4">Почта</p>
                                    <p>{{ item.email }}</p>
                                    <p class="text-h6 mt-4">Статус</p>
                                    <p v-if="item.status === 'Уволен'" class="text-red"><v-avatar
                                            style="height: 10px; width: 10px" class="mr-2" color="red"></v-avatar>Уволен
                                    </p>
                                    <p v-if="item.status === 'Активен'" class="text-green"><v-avatar
                                            style="height: 10px; width: 10px" class="mr-2"
                                            color="green"></v-avatar>Активен</p>
                                </v-card-text>
                            </v-card>
                        </template>
                    </v-dialog>

                    <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-pencil" variant="text" v-bind="props"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="w-25 h-screen custom-dialog">
                                <v-toolbar color="primary" title="Редактировать пользователя">
                                    <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-text-field label="ФИО*" variant="outlined" v-model="item.name"></v-text-field>
                                    <v-text-field label="Телефон" variant="outlined"
                                        v-model="item.phone"></v-text-field>
                                    <v-text-field label="Email*" variant="outlined" v-model="item.email"></v-text-field>
                                    <v-select class="mt-4" v-model="item.status" :items="items" label="Статус">
                                    </v-select>

                                    <!-- Dialog change user password -->

                                    <v-dialog location-strategy="connected" transition="dialog-top-transition">
                                        <template v-slot:activator="{ props }">
                                            <v-btn color="primary" variant="tonal" class="mr-3" v-bind="props">
                                                Изменить пароль
                                            </v-btn>
                                        </template>
                                        <template v-slot:default="{ isActive }">
                                            <v-card class="w-25 h-screen custom-dialog">
                                                <v-toolbar color="primary" title="Редактировать пользователя">
                                                    <v-btn variant="text" @click="isActive.value = false"
                                                        icon="mdi-close"></v-btn>
                                                </v-toolbar>
                                                <v-card-text>
                                                    <v-text-field label="Новый пароль" type="password"
                                                        variant="outlined"></v-text-field>
                                                    <v-btn @click="isActive.value = false" color="primary"
                                                        variant="tonal">Назад</v-btn>

                                                </v-card-text>
                                                <v-card-actions class="justify-start">
                                                    <v-btn variant="tonal" color="primary" class="ma-4"
                                                        @click="isActive.value = false">Сохранить</v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </template>
                                    </v-dialog>

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
            items: ['Уволен', "Активен"],
            value: [],
            users: [
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Активен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Активен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
                },
                {
                    url: '../assets/logo.png',
                    name: 'Alexey Popov',
                    phone: '+1234567890',
                    email: 'sometext@some.com',
                    status: 'Уволен'
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

.sm-circle {
    height: 10px;
    width: 10px;
}
</style>