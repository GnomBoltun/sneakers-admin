<template>
    <v-container class="shadow" fluid>
        <v-row>
            <v-text-field class="w-5 my-4" label="Поиск по размеру" variant="outlined"
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
                <th class="text-left">№</th>
                <th class="text-left">Размер</th>
                <th class="text-left">Порядок отображения</th>
                <th class="text-left">Действия</th>

            </tr>
            <tr v-for="item in categories" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.order }}</td>
                <td>
                    <v-btn icon="mdi-pencil" variant="text"></v-btn>
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