<template>
  <v-footer
    color="primary"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="primary py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>SICOBO</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      footer: {
        inset: false
      }
    };
  }
};
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
