<template>
     <v-card class="pa-16 rounded-lg elevated-18">
        <v-card-title class="justify-center d-flex">
            <p class="text-h4">Вход</p>
        </v-card-title>
        <v-card-subtitle class="justify-center d-flex">
            <p class="text-h6">Восстановить пароль</p>
        </v-card-subtitle>
        <v-card-text>
            <v-text-field
                label="Пароль*"
                type="password"
                >
            </v-text-field>
            <v-text-field
                label="Повторите пароль*"
                type="password"
                >
            </v-text-field>

            <router-link class="text-primary text-decoration-none text-body-1" to="/login">Назад</router-link>

        </v-card-text>
        <v-card-actions class="justify-center">
            <v-btn color="primary" variant="tonal" class="text-btn-1 px-9" size="large">
                ВОЙТИ
            </v-btn>
        </v-card-actions>
    </v-card>
</template>