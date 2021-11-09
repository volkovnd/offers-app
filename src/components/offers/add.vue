<template>
  <form @submit.prevent="onSubmit($event)">
    <v-grid columns="1" gap="1rem">
      <v-form-control v-model="formData.title" placeholder="Название" />
      <v-form-control v-model="formData.author" placeholder="Автор" />
      <v-btn type="submit" block variant="primary">Отправить</v-btn>
    </v-grid>
  </form>
</template>

<script>
import { createOffer } from "@/api";
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
    async onSubmit(event) {
      await createOffer(this.formData);

      this.reset();

      this.$emit("submit", event);
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
