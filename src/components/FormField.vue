<template>
  <div class="flex items-center mb-6">
    <div class="w-1/4">
      <label
        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
        >{{ label }}</label
      >
    </div>
    <div class="w-3/4">
      <input
        class="
          bg-gray-200
          appearance-none
          border-2 border-gray-200
          rounded
          w-full
          py-2
          px-4
          text-gray-700
          leading-tight
          focus:outline-none
          focus:bg-white
          focus:border-primary-500
        "
        type="text"
        v-model="value"
      />
      <div class="pt-2" v-if="errors.length > 0">
        <p class="text-red-500 text-xs italic" v-for="error in errors">
          {{ error }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
    },
    errors: {
      type: Array as PropType<Array<string>>,
      default: new Array(),
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>
