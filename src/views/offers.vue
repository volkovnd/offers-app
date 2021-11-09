<template>
  <div>
    <h1>Offers</h1>

    <v-row align-h="between">
      <v-col cols="8">
        <OffersData />
      </v-col>
      <v-col cols="3">
        <AddOffer />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AddOffer from "@/components/offers/add-offer.vue";
import OffersData from "@/components/offers/offers-data.vue";

export default {
  name: "OffersView",

  components: { AddOffer, OffersData },
};
</script>
