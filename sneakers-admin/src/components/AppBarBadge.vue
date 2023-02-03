<template>
    <v-btn class="text-none" stacked>
        <v-badge :content="this.notifications" color="info">
            <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
    </v-btn>


    <v-divider vertical></v-divider>
    <v-avatar class="pl-3" image="../assets/logo.png"></v-avatar>
    <p class="px-3">
        {{ this.name }}
    </p>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon="mdi-chevron-down" v-bind="props"></v-btn>
        </template>

        <v-list>
            <v-list-item>
                <v-list-item-title @click="Logout" class="cursor-pointer">Выйти
                    <v-icon>mdi-exit-to-app</v-icon></v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import router from '@/router';
export default {
    props: {
        data: Object,
        name: {
            type: String,
            default: [],
            required: true,
        },
        notifications: {
            type: Number,
            default: 0,
            required: true,
        }

    },
    methods: {
        Logout() {
            localStorage.setItem('isAuth', false);
            setTimeout(500);
            router.push('/login/login');
        }
    },
}
</script>