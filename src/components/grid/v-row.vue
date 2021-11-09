<script>
import { mergeData } from "vue-functional-data-merge";
import { gridAlignMixin } from "@/mixins/gridAlign";

export default {
  name: "VRow",
  functional: true,
  mixins: [gridAlignMixin],
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    column: {
      type: Boolean,
      default: false,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "row",
        class: {
          "flex-column": props.column,
          [`align-items-${props.alignV}`]: !!props.alignV,
          [`justify-content-${props.alignH}`]: !!props.alignH,
          "no-gutters": props.noGutters,
        },
      }),
      children
    );
  },
};
</script>
