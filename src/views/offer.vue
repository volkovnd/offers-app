<template>
  <div>
    <h1>{{ offer.title }}</h1>

    <v-grid columns="12" gap="1rem">
      <v-grid-col col="3"><b>Author</b></v-grid-col>
      <v-grid-col col="9">{{ offer.author }}</v-grid-col>
    </v-grid>
  </div>
</template>

<script>
import { getOfferById } from "@/api";

export default {
  name: "OfferView",

  beforeRouteEnter(to, from, next) {
    getOfferById(Number(to.params.id)).then((data) => {
      next((vm) => {
        vm.offer = data;
      });
    });
  },

  beforeRouteUpdate(to, from, next) {
    this.offer = null;

    getOfferById(to.params.id).then((data) => {
      this.offer = data;

      next();
    });
  },

  data() {
    return {
      offer: {
        title: "",
        company: "",
        author: "",
      },
    };
  },
};
</script>
