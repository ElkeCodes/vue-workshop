<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative">
      <h1 class="pt-6 pb-6 text-xl">Clients</h1>
    </div>
    <div class="pt-6">
      <ClientsTable :clients="clients"></ClientsTable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientsTable from "../components/clients/ClientsTable.vue";

export default defineComponent({
  components: {
    ClientsTable,
  },
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    loadClients() {
      fetch("https://base-app-backend.herokuapp.com/clients")
        .then((response) => response.json())
        .then((clients) => (this.clients = clients));
    },
  },
  created() {
    this.loadClients();
  },
});
</script>
