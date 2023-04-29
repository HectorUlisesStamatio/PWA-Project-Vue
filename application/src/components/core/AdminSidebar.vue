<template>
    <v-card
      class="sidebar mx-auto"
      height="94%"
      width="200"
    >
      <v-navigation-drawer
        class="darken-4"
        color="#254394"
        dark
        permanent
      >
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
  

      </v-navigation-drawer>
    </v-card>
  </template>

<script>
export default {
    data () {
      return {
        items: [
          { title: 'Usuarios', icon: 'mdi-account-group' },
          { title: 'Libros', icon: 'mdi-bookshelf' },
          { title: 'Categorias', icon: 'mdi-shape' },
        ],
      }
    },
}
</script>

<style>
.sidebar{
    position:fixed !important;
    margin-top: 59px !important;
}
@media (max-width: 1200px) {
  .sidebar{
    display: none !important;
  }
}
</style>