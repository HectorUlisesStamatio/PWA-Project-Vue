<template>
    <div id="app">
        <v-app>
            <v-app>
                <v-main>
                    <AppHeader />
                    <AdminSidebar />
                    <v-container class="fill-height" fluid>
                        <v-row align="center" justify="center">
                            <v-col cols="12" sm="8">
                                <template>
                                    <v-data-table :headers="headers" :items="books" sort-by="id"
                                        class="main--table elevation-1">
                                        <template v-slot:top>
                                            <v-toolbar flat>
                                                <v-toolbar-title>Libros</v-toolbar-title>
                                                <v-spacer></v-spacer>
                                                <v-dialog v-model="dialog" max-width="500px">
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-btn color="success" dark class="mb-2" v-bind="attrs" v-on="on">
                                                            <v-icon left>
                                                                mdi-plus
                                                            </v-icon>
                                                            Nuevo Registro
                                                        </v-btn>
                                                    </template>
                                                    <v-card>
                                                        <v-card-title>
                                                            <span class="text-h5">{{ formTitle }}</span>
                                                        </v-card-title>

                                                        <v-card-text>
                                                            <v-container>
                                                                <v-row>
                                                                    <v-col cols="12" sm="12" md="12">
                                                                        <v-text-field v-model="editedItem.name"
                                                                            label="Nombre"></v-text-field>
                                                                    </v-col>
                                                                </v-row>
                                                            </v-container>
                                                        </v-card-text>

                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="blue darken-1" text @click="close">
                                                                Cancelar
                                                            </v-btn>
                                                            <v-btn color="blue darken-1" text @click="save">
                                                                Guardar
                                                            </v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                                <v-dialog v-model="dialogDelete" max-width="500px">
                                                    <v-card>
                                                        <v-card-title class="text-h5">¿Estás seguro de que deseas borrar
                                                            este elemento?</v-card-title>
                                                        <v-card-actions>
                                                            <v-spacer></v-spacer>
                                                            <v-btn color="blue darken-1" text
                                                                @click="closeDelete">Cancelar</v-btn>
                                                            <v-btn color="blue darken-1" text
                                                                @click="deleteItemConfirm">Aceptar</v-btn>
                                                            <v-spacer></v-spacer>
                                                        </v-card-actions>
                                                    </v-card>
                                                </v-dialog>
                                            </v-toolbar>
                                        </template>
                                        <template v-slot:item.actions="{ item }">
                                            <v-icon small class="mr-2" color="blue" @click="editItem(item)">
                                                mdi-pencil
                                            </v-icon>
                                            <v-icon small @click="deleteItem(item)" color="red">
                                                mdi-delete
                                            </v-icon>
                                        </template>
                                        <template v-slot:no-data>
                                            <v-btn color="primary" @click="initialize">
                                                Reiniciar
                                            </v-btn>
                                        </template>
                                    </v-data-table>
                                </template>
                            </v-col>
                        </v-row>
                    </v-container>
                    <AdminBottom />
                </v-main>
            </v-app>
        </v-app>
    </div>
</template>
  
<script>
import AdminSidebar from "../core/AdminSidebar.vue";
import AdminBottom from "../core/AdminBottom.vue";
import AppHeader from "../core/AppHeader.vue";
export default {
    props: {
        source: String,
    },
    components: {
        AdminSidebar,
        AdminBottom,
        AppHeader
    },
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                text: 'Identificador',
                align: 'start',
                sortable: true,
                value: 'id',
            },
            { text: 'Nombre', value: 'name' },
            { text: 'Acciones', value: 'actions', sortable: false },
        ],
        desserts: [],
        books: [],
        id:0,
        editedIndex: -1,
        editedItem: {
            id: '',
            name: '',
        },
        defaultItem: {
            id: '',
            name: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'Nuevo Registro' : 'Editar Registro'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
        this.search()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    name: 'Papas',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                },
            ]
        },
        search() {
            fetch('http://localhost:8080/api/books', {
                credentials: 'same-origin'
            })
                .then((response) => response.json())
                .then((data) => (this.books = data));
        },
        editItem(item) {
            this.editedIndex = this.books.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            fetch(`http://localhost:8080/api/books/${this.editedItem.id}`, {
                credentials: 'same-origin',
                method: 'DELETE'
            })
            this.closeDelete()
            location.reload();
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
                fetch(`http://localhost:8080/api/books/${this.editedItem.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(this.editedItem), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json());
            } else {
                fetch("http://localhost:8080/api/books/addBook", {
                    method: 'POST',
                    body: JSON.stringify(this.editedItem), 
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json());
            }
            this.close()
            location.reload();

        },
    },


};
</script>

<style lang="css">
.main--table {
    margin-left: 100px;
    margin-top: 40px;
}

@media (max-width: 1200px) {
    .main--table {
        margin-left: 0;
        margin-bottom: 25px;
    }
}
</style>
  