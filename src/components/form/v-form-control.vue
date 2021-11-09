<template>
  <input
    :type="type"
    class="form-control"
    :class="{
      [`form-control-${size}`]: !!size,
    }"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    @change="$emit('change', $event.target.value)"
  />
</template>

<script>
export default {
  name: "VFormControl",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: null,
    },
  },
};
</script>
