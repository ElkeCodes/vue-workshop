<template>
  <table class="table-auto w-full">
    <thead>
      <tr class="bg-gray-200">
        <th class="border px-4 py-2 text-left">Id</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th class="border px-4 py-2 text-left">Description</th>
        <th class="border px-4 py-2 text-left">Product code</th>
        <th class="border px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products">
        <td class="border px-4 py-2">{{ product.id }}</td>
        <td class="border px-4 py-2">
          {{ product.name }}
        </td>
        <td class="border px-4 py-2">
          {{ product.description }}
        </td>
        <td class="border px-4 py-2">
          {{ product.productCode }}
        </td>
        <td class="border px-4 py-2">
          <action-menu>
            <button type="button" @click="$emit('edit:product', product.id)">
              Edit
            </button>
            <button type="button" @click="$emit('delete:product', product.id)">
              Delete
            </button>
          </action-menu>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../../models/Product";
import ActionMenu from "../ActionMenu.vue";

export default defineComponent({
  name: "ProductsTable",
  emits: ["edit:product", "delete:product"],
  props: {
    products: Array as PropType<Product[]>,
  },
  components: {
    ActionMenu,
  },
});
</script>
