<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative" data-testid="page-header">
      <h1 class="pt-6 pb-6 text-xl">Edit product</h1>
      <div class="absolute top-0 right-0"></div>
    </div>
    <div class="pt-6">
      <product-form
        :product="product"
        @submit="editProduct"
        @cancel="returnToProducts"
      ></product-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "vuex";
import ProductForm from "../components/products/ProductForm.vue";

export default defineComponent({
  name: "EditProduct",
  components: {
    ProductForm,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("products", ["product"]),
  },
  created() {
    this.$store.dispatch("products/loadProduct", this.$props.id);
  },
  methods: {
    returnToProducts() {
      this.$router.push({ name: "products" });
    },
    editProduct(product: Product): Promise<Response> {
      this.$store
        .dispatch("products/editProduct", product)
        .then(this.returnToProducts);
    },
  },
});
</script>
