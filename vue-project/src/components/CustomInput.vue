<!-- CustomInput.vue -->
<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      value: "",
      A1: 0,
      A2: 1,
    };
  },
  // computed: {
  //   value: {
  //     get() {
  //       return this.modelValue;
  //     },
  //     set(value) {
  //       if (this.modelModifiers?.capitalize) {
  //         value = value.charAt(0).toUpperCase() + value.slice(1);
  //       }
  //       this.$emit("update:modelValue", value);
  //     },
  //   },
  // },
  watch: {
    value(value) {
      if (this.modelModifiers?.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.A1 = value;
      this.$emit("update:modelValue", value);
    },
    modelValue(val) {
      this.value = val;
    },
  },
  mounted() {
    this.A2 = this.A1;
  },
  methods: {
    emitValue(e) {
      let value = e.target.value;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<template>
  <input v-model="value" />
  <div>A1:{{ A1 }}</div>
  <div>A2:{{ A2 }}</div>
  <!-- <input type="text" :value="modelValue" @input="emitValue" /> -->
</template>
