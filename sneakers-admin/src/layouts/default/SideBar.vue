<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item prepend-avatar="../../assets/logo.png" title="HiAdmin"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <router-link class="text-decoration-none text-primary" to="/options"><v-list-item
          prepend-icon="mdi-filter-cog-outline" title="Опции Товаров" value="options"></v-list-item></router-link>
      <router-link class="text-decoration-none text-primary" to="/goods"><v-list-item prepend-icon="mdi-zip-box-outline"
          title="Товары" value="goods"></v-list-item></router-link>
      <router-link class="text-decoration-none text-primary" to="/pages"><v-list-item
          prepend-icon="mdi-note-multiple-outline" title="Страницы" value="pages"></v-list-item></router-link>
      <router-link class="text-decoration-none text-primary" to="/users"><v-list-item prepend-icon="mdi-account"
          title="Пользователи МП" value="usersmp"></v-list-item></router-link>
      <router-link class="text-decoration-none text-primary" to="/admin"><v-list-item prepend-icon="mdi-account-key"
          title="Пользователи админ панели" value="usersadmin"></v-list-item></router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

  //
</script>
