<template>
    <v-card class="pa-16 rounded-lg elevated-18">
        <v-card-title class="justify-center d-flex">
            <p class="text-h4">Вход</p>
        </v-card-title>
        <v-card-text>
            <v-text-field class="mt-5" label="Email*" placeholder="johndoe@gmail.com" type="email">
            </v-text-field>
            <v-text-field label="Пароль*" type="password">
            </v-text-field>
            <v-checkbox color="primary" label="Запомнить меня"></v-checkbox>
            <router-link class="text-primary text-decoration-none text-body-1" to="/reset">Восстановить
                пароль</router-link>

        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn color="primary" variant="tonal" class="text-btn-1 px-9" size="large">
                ВОЙТИ
            </v-btn>
        </v-card-actions>
    </v-card>
</template>