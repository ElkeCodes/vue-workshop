<template>
  <form class="w-full" @submit.prevent>
    <form-field v-model="product.name" label="Name" :errors="nameErrors" />
    <form-field v-model="product.description" label="Description" />
    <form-field
      v-model="product.productCode"
      label="Product code"
      :errors="productCodeErrors"
    />
    <div class="flex items-center">
      <div class="md:w-1/4"></div>
      <div class="md:w-3/4 flex">
        <div>
          <button
            :disabled="!isValid"
            type="submit"
            class="bg-primary-500 text-white font-bold py-2 px-4 rounded"
            :class="{
              'opacity-50 cursor-not-allowed': !isValid,
              'hover:bg-primary-700': isValid,
            }"
            @click="onSubmit"
          >
            Save
          </button>
        </div>
        <button
          type="button"
          class="
            bg-transparent
            hover:bg-primary-700
            border border-primary-500
            ml-4
            py-2
            px-4
            rounded
          "
          @click="onCancel"
        >
          Cancel
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../models/Product";
import FormField from "../../components/FormField.vue";

export default defineComponent({
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  emits: ["submit", "cancel"],
  methods: {
    onSubmit() {
      this.$emit("submit", this.product);
    },
    onCancel() {
      this.$emit("cancel");
    },
    validateNotEmpty(fieldName: string, data: string): string[] {
      return !data || data.trim().length === 0
        ? [`${fieldName} is required`]
        : [];
    },
  },
  computed: {
    nameErrors(): string[] {
      return this.validateNotEmpty("Name", this.product.name);
    },
    productCodeErrors(): string[] {
      return this.validateNotEmpty("ProductCode", this.product.productCode);
    },
    isValid() {
      return (
        this.nameErrors.length === 0 && this.productCodeErrors.length === 0
      );
    },
  },
  components: {
    FormField,
  },
});
</script>
