<template>
  <div class="header--principal">
    <v-app-bar class="mx-auto" height="60" color="primary" dark permanent >

      <v-toolbar-title class="text-h5"><strong>SICOBO</strong></v-toolbar-title>


      <v-spacer></v-spacer>
      <v-switch
        class="mt-5"
        v-model="$vuetify.theme.dark"
        color="#FFFFFF"
      ></v-switch>
    </v-app-bar>
  </div>
</template>


<script>

export default {
};
</script>


<style>
.header--principal{
  position:fixed;
  z-index: 100;
  width: 100%;
}
</style>
