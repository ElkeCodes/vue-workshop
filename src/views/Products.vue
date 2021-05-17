<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative">
      <h1 class="pt-6 pb-6 text-xl">Products</h1>
      <div class="absolute top-0 right-0">
        <router-link
          :to="{ name: 'createProduct' }"
          class="
            mt-5
            bg-primary-500
            hover:bg-primary-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            block
          "
          v-if="isUnlocked"
        >
          Add
        </router-link>
      </div>
    </div>
    <div class="pt-6">
      <ProductsTable
        :products="products"
        @edit:product="editProduct"
        @delete:product="deleteProduct"
      ></ProductsTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsTable from "../components/products/ProductsTable.vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  components: {
    ProductsTable,
  },
  computed: {
    ...mapGetters(["isUnlocked"]),
    ...mapState("products", ["products"]),
  },
  methods: {
    editProduct(id) {
      this.$router.push({
        name: "editProduct",
        params: { id },
      });
    },
    deleteProduct(id) {
      if (window.confirm("Are you sure?")) {
        this.$store.dispatch("products/deleteProduct", id);
      }
    },
  },
  created() {
    this.$store.dispatch("products/loadProducts");
  },
});
</script>
