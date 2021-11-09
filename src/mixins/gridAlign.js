import Vue from "vue";

export const gridAlignMixin = Vue.extend({
  props: {
    alignV: {
      type: String,
      default: null,
    },
    alignH: {
      type: String,
      default: null,
    },
  },
});
