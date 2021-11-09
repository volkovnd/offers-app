<template>
  <div>
    <h1>Offers</h1>

    <v-row align-h="between">
      <v-col cols="8">
        <v-grid columns="9" class="border-bottom pb-2 mb-3">
          <v-grid-col col="1"><b>ID</b></v-grid-col>
          <v-grid-col col="3"><b>Title</b></v-grid-col>
          <v-grid-col col="3"><b>Author</b></v-grid-col>
          <v-grid-col col="2"><b>Actions</b></v-grid-col>
        </v-grid>

        <v-grid v-for="offer in offers" :key="offer.id" columns="9" gap="1.5rem" class="border-bottom py-1 my-1">
          <v-grid-col col="1">{{ offer.id }}</v-grid-col>
          <v-grid-col col="3">{{ offer.title }}</v-grid-col>
          <v-grid-col col="3">{{ offer.author }}</v-grid-col>
          <v-grid-col col="2">
            <v-grid gap="0.5rem">
              <v-btn variant="primary" size="sm" @click="$router.push('/')">Подробнее</v-btn>
              <v-btn variant="danger" size="sm" @click="deleteOffer(offer.id)">Удалить</v-btn>
            </v-grid>
          </v-grid-col>
        </v-grid>
      </v-col>
      <v-col cols="3"><AddOffer /></v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AddOffer from "@/components/offers/add.vue";

export default {
  name: "OffersView",

  components: { AddOffer },

  computed: {
    ...mapGetters("offers", ["offers"]),
  },

  created() {
    this.getOffers();
  },

  methods: {
    ...mapActions("offers", ["deleteOffer", "getOffers"]),
  },
};
</script>
