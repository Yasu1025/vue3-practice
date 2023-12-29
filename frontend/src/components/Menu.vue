<script lang="ts" setup>
import { menuItem } from "@/types/types";

// TODO: integrate with backend
const items: menuItem[] = [
  {
    name: "Classic Burger",
    desc: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce on a toasted bun.",
    category: "Burgers",
    price: 10.99,
    imageUrl: "https://example.com/classic-burger.jpg",
  },
  {
    name: "Margherita Pizza",
    desc: "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
    category: "Pizzas",
    price: 12.99,
    imageUrl: "https://example.com/margherita-pizza.jpg",
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="3" v-for="item in items" :key="item.name">
        <v-card :loading="false" class="mx-auto my-12" max-width="374">
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            cover
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-item>
            <v-card-title>{{ item.name }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="my-4 text-subtitle-1">$ {{ item.price }}</div>

            <div>
              {{ item.desc }}
            </div>
          </v-card-text>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              variant="text"
              @click="() => {}"
            >
              Add to cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
