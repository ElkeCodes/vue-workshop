<template>
  <table class="table-auto w-full">
    <thead>
      <tr class="bg-gray-200">
        <th class="border px-4 py-2 text-left">Id</th>
        <th class="border px-4 py-2 text-left">Name</th>
        <th class="border px-4 py-2 text-left"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in clients">
        <td class="border px-4 py-2">{{ client.id }}</td>
        <td class="border px-4 py-2">
          {{ client.firstName }} {{ client.lastName }}
        </td>
        <td class="border px-4 py-2">
          <action-menu>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </action-menu>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Client } from "../../models/Client";
import ActionMenu from "../ActionMenu.vue";

export default defineComponent({
  name: "ClientsTable",
  props: {
    clients: Array as PropType<Client[]>,
  },
  components: {
    ActionMenu,
  },
});
</script>
