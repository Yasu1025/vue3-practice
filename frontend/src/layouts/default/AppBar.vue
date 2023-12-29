<script lang="ts" setup>
const links = ["Home", "Menu", "Location", "About"];
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

      <v-btn
        v-for="link in links"
        :key="link"
        :text="link"
        :to="link"
        variant="text"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="160">
        <v-btn to="/cart">Shopping cart (0)</v-btn>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>
