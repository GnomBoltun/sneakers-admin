<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Пользователи админ панели
        </p>
        <v-spacer></v-spacer>

        <!--Import Dialog-->
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
                    <v-list-item-title @click="Logout" class="cursor-pointer">Выйти <v-icon>mdi-exit-to-app</v-icon></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>

    <v-container class="shadow mx-4" fluid>
        <v-row>
            <v-col md="6" class="d-flex">
                <v-text-field class="my-4 mx-2" label="Поиск по имени, телефону и Email" variant="outlined"
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
                <th class="text-left">№</th>
                <th class="text-left">Имя</th>
                <th class="text-left">Телефон</th>
                <th class="text-left">E-Mail</th>
                <th class="text-left">Дата регистрации</th>
                <th class="text-left">Статус</th>
                <th class="text-left">Действия</th>

            </tr>
            <tr v-for="item in users" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.status }}</td>
                <td>

                    <v-dialog location-strategy="connected" transition="dialog-top-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-pencil" variant="text" v-bind="props"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="w-25 h-screen custom-dialog">
                                <v-toolbar color="primary" title="Редактировать пользователя">
                                    <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <v-text-field label="Имя" type="text" variant="outlined"
                                        v-model="item.name"></v-text-field>
                                    <v-text-field label="Телефон" type="text" variant="outlined"
                                        v-model="item.phone"></v-text-field>
                                    <v-text-field label="Email" type="text" variant="outlined"
                                        v-model="item.email"></v-text-field>
                                    <v-text-field label="Статус" type="text" variant="outlined"
                                        v-model="item.status"></v-text-field>
                                    <v-select class="mt-4" v-model="value" :items="items" label="Адреса">
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
import router from '@/router';

export default {
    data() {
        return {
            userName: 'Alexey Popov',
            items: ['foo', 'bar', 'fizz', 'buzz'],
            value: [],
            users: [
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },
                {
                    id: 1,
                    name: "Alexey",
                    phone: "+1234567890",
                    email: 'sometext@some.com',
                    date: '22-02-2077',
                    status: 'Активен'
                },

            ]

        }
    },
    methods: {
        Logout() {
            localStorage.setItem('isAuth', false);
            setTimeout(500);
            router.push('/login');
        }
    },
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