<template>
  <form @submit.prevent="onSubmit($event)">
    <v-grid columns="1" gap="1rem">
      <h3>Добавить оффер</h3>
      <v-form-control v-model="formData.title" placeholder="Название" />
      <v-form-control v-model="formData.author" placeholder="Автор" />
      <v-btn type="submit" block variant="primary">Отправить</v-btn>
    </v-grid>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formData: {
        title: "",
        author: "",
      },
    };
  },
  methods: {
    ...mapActions("offers", ["createOffer"]),

    async onSubmit() {
      await this.createOffer(this.formData);

      this.reset();
    },

    reset() {
      this.formData = {
        title: "",
        author: "",
      };
    },
  },
};
</script>
