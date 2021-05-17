<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative">
      <h1 class="pt-6 pb-6 text-xl">Create product</h1>
    </div>
    <div class="pt-6">
      <product-form
        :product="product"
        @submit="saveProduct"
        @cancel="returnToProducts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductForm from "../components/products/ProductForm.vue";
import { defaultProduct } from "../models/Product";

export default defineComponent({
  name: "CreateProduct",
  components: {
    ProductForm,
  },
  data() {
    return {
      product: { ...defaultProduct },
    };
  },
  methods: {
    returnToProducts() {
      this.$router.push({ name: "products" });
    },
    saveProduct(product: Product) {
      this.$store
        .dispatch("products/createProduct", product)
        .then(this.returnToProducts);
    },
  },
});
</script>
