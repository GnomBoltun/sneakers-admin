<template>
    <v-btn class="text-none" stacked>
        <v-badge :content="this.notifications" color="info">
            <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
    </v-btn>


    <v-divider vertical></v-divider>
    <v-avatar class="pl-3" image="../assets/logo.png"></v-avatar>
    <p class="px-3">
        {{ this.userName }}
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
    data() {
        return {
            userName: null,
        }
    },
    created(){
        this.getUser()
    },
    methods: {
        getUser(){
            this.axios.get('https://hisize.tech/api/user/profile', { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }  })
                .then((response) => {
                    this.userName = response.data.name
                    console.log(response)
                })
                .catch((error) => {
                    localStorage.removeItem('token')
                    localStorage.removeItem('isAuth')
                    this.$router.push('/login/login')
                })
        },
        Logout() {
            localStorage.setItem('isAuth', false);
            setTimeout(500);
            router.push('/login/login');
        }
    },
}
</script>