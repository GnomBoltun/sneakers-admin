<template>
    <v-app-bar>
        <p class="pl-3 text-h5">
            Опции Товаров
        </p>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="tonal" class="mr-3">
            СОЗДАТЬ КАТЕГОРИЮ
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn class="mx-2" icon="mdi-bell-outline">

        </v-btn>

        <v-divider vertical></v-divider>
        <v-avatar class="pl-3" image="../../assets/logo.svg"></v-avatar>
        <p class="px-3">
            {{ userName }}
        </p>
        <v-btn icon="mdi-chevron-down">

        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            userName: 'Alexey Popov',
        }
    }
}
</script>