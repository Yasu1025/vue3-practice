<script lang="ts" setup>
import { orderedItem } from "@/types/types";

// TODO: integrate with backend
const orderedItems: orderedItem[] = [
  {
    item: {
      name: "Classic Burger",
      desc: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce on a toasted bun.",
      category: "Burgers",
      price: 10.99,
      imageUrl: "https://example.com/classic-burger.jpg",
    },
    amount: 2,
  },
  {
    item: {
      name: "Margherita Pizza",
      desc: "Traditional pizza with tomato sauce, fresh mozzarella, and basil.",
      category: "Pizzas",
      price: 12.99,
      imageUrl: "https://example.com/margherita-pizza.jpg",
    },
    amount: 4,
  },
];
</script>

<template>
  <v-container>
    <v-row
      v-for="order in orderedItems"
      :key="`${order.item.name}-${order.amount}`"
    >
      <v-col class="mt-5">
        <v-img
          :width="150"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </v-col>
      <v-col class="mt-5">
        <span class="text-h5 text-amber-darken-4">{{ order.item.name }}</span>
      </v-col>
      <v-col class="mt-3">
        <span class="text-body-1 text-cyan-darken-4">{{
          order.item.desc
        }}</span>
      </v-col>
      <v-col class="mt-2">
        <span class="text-body-1 text-orange"> ${{ order.item.price }} </span>
      </v-col>
      <v-col class="mt-2">
        <v-btn
          icon="$minus"
          class="mr-4 mb-1"
          size="x-small"
          color="success"
        ></v-btn>
        <span>
          {{ order.amount }}
        </span>
        <v-btn
          icon="$plus"
          class="ml-4 mb-1"
          size="x-small"
          color="success"
        ></v-btn>
      </v-col>
      <v-col class="mt-2">
        <span class="text-h6"> ${{ order.item.price * order.amount }} </span>
      </v-col>
      <v-col class="mt-2">
        <v-btn color="deep-purple-lighten-2">DELETE</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
