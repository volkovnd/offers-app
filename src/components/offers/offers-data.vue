<template>
  <div class="offers-grid">
    <div class="offers-grid-title">Offers grid</div>

    <div class="offers-grid-header">
      <v-grid columns="10">
        <v-grid-col col="1">ID</v-grid-col>
        <v-grid-col col="3">Title</v-grid-col>
        <v-grid-col col="3">Author</v-grid-col>
        <v-grid-col col="3">Actions</v-grid-col>
      </v-grid>
    </div>

    <div class="offers-grid-body">
      <v-grid
        v-for="offer in offers"
        :key="offer.id"
        columns="10"
        gap="1.5rem"
        class="offers-grid-row"
        align-v="center"
      >
        <v-grid-col col="1">{{ offer.id }}</v-grid-col>
        <v-grid-col col="3">{{ offer.title }}</v-grid-col>
        <v-grid-col col="3">{{ offer.author }}</v-grid-col>
        <v-grid-col col="3">
          <v-grid gap="0.5rem">
            <v-btn variant="primary" size="sm" @click="$router.push(`/offers/${offer.id}`)">Подробнее</v-btn>
            <v-btn variant="danger" size="sm" @click="deleteOffer(offer.id)">Удалить</v-btn>
          </v-grid>
        </v-grid-col>
      </v-grid>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("offers", ["offers"]),
  },

  async created() {
    await this.getOffers();
  },
  methods: {
    ...mapActions("offers", ["getOffers", "deleteOffer"]),
  },
};
</script>

<style lang="scss">
.offers-grid {
  &-title {
    margin-bottom: $headings-margin-bottom;
    font-size: 1.5rem;
    font-weight: $headings-font-weight;
  }

  &-header {
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  &-body {
  }

  &-row {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #bbb;

    &:first-child {
      border-top: 1px solid #bbb;
    }
  }
}
</style>
