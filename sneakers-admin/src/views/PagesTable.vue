<template>
    <v-container class="shadow" fluid>
        <v-row>
            <v-text-field class="w-5 my-4" label="Поиск по наименованию" variant="outlined"
                append-inner-icon="mdi-magnify"></v-text-field>
            <v-spacer></v-spacer>
            <v-btn class="ma-4" variant="outlined" size="large" icon color="primary">
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
            <v-btn class="my-4" size="large" icon color="primary">
                <v-icon>mdi-filter-variant</v-icon>
            </v-btn>
        </v-row>
    </v-container>


    <v-table fixed-header height="700">
        <thead>
            <tr>
                <th class="text-left">Наименование</th>
                <th class="text-left">Действия</th>

            </tr>
            <tr v-for="item in categories" :key="item.id">
                <td>{{ item.category }}</td>
                <td>
                    <v-dialog location-strategy="connected" transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi-pencil" variant="text" v-bind="props"></v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                            <v-card class="w-25 h-screen custom-dialog">
                                <v-toolbar color="primary" title="Редактирование страницы">
                                    <v-btn variant="text" @click="isActive.value = false" icon="mdi-close"></v-btn>
                                </v-toolbar>
                                <v-card-text>
                                    <p class="text-body-1">Наименование</p>

                                    <v-text-field :value="item.category" label="Наименование" variant="outlined"
                                        class="mt-4"></v-text-field>

                                    <p class="text-body-1">Содержимое</p>

                                    <CKEditor :editor="editor" v-model="editorData" :config="editorConfig"></CKEditor>

                                </v-card-text>
                                <v-card-actions class="justify-start">
                                    <v-btn variant="tonal" color="primary" class="ma-4"
                                        @click="isActive.value = false">Загрузить</v-btn>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { component as CKEditor } from '@ckeditor/ckeditor5-vue';

export default {
    data() {
        return {
            categories: [
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },
                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },

                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },

                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },

                {
                    id: 1,
                    category: "Adidas",
                    order: 0
                },

                {
                    id: 1,
                    category: "Adidas",
                    order: 0
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
</style>