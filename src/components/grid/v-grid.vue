<script>
import { mergeData } from "vue-functional-data-merge";
import { gridAlignMixin } from "@/mixins/gridAlign";

export default {
  name: "VGrid",
  functional: true,
  mixins: [gridAlignMixin],
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    columns: {
      type: [String, Number],
      default: null,
    },
    rows: {
      type: [String, Number],
      default: null,
    },
    gap: {
      type: [String, Number],
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "grid",
        class: {
          [`align-items-${props.alignV}`]: !!props.alignV,
          [`justify-content-${props.alignH}`]: !!props.alignH,
        },
        style: {
          "--bs-columns": props.columns,
          "--bs-rows": props.rows,
          "--bs-gap": props.gap,
        },
      }),
      children
    );
  },
};
</script>
