<template>
    <v-bottom-navigation
      class="bottomNavigation"
      v-model="value"
      :background-color="color"
      dark
      shift
    >

      <v-btn class="icon--bottom">
        <span>Usuarios</span>
        <br>
        <v-icon >mdi-account-group</v-icon>
      </v-btn>
  
      <v-btn class="icon--bottom">
        <span>libros</span>
        <br>
        <v-icon >mdi-bookshelf</v-icon>
      </v-btn>
  
      <v-btn class="icon--bottom">
        <span>Categorias</span>
        <br>
        <v-icon>mdi-shape</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </template>

<script>
export default {
  data: () => ({ value: 1 }),

  computed: {
    color () {
      switch (this.value) {
        case 0: return 'indigo darken-4'
        case 1: return 'deep-purple darken-4'
        case 2: return 'blue darken-4'
        default: return 'blue-grey'
      }
    },
  },
}
</script>
<style>
.bottomNavigation{
    position:fixed !important;
    bottom: -1 !important;  
}
.icon--bottom{
    margin: 5px;
    padding-top: 16px !important;
}
@media (min-width: 1199px) {
  .bottomNavigation{
    display: none !important;
  }
}
</style>