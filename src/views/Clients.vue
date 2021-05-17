<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative">
      <h1 class="pt-6 pb-6 text-xl">Clients</h1>
      <div class="absolute top-0 right-0">
        <router-link
          :to="{ name: 'createClient' }"
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
        >
          Add
        </router-link>
      </div>
    </div>
    <div class="pt-6">
      <ClientsTable
        :clients="clients"
        @edit:client="editClient"
        @delete:client="deleteClient"
      ></ClientsTable>
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
    editClient(id) {
      this.$router.push({
        name: "editClient",
        params: { id },
      });
    },
    deleteClient(id) {
      if (window.confirm("Are you sure?")) {
        fetch(`https://base-app-backend.herokuapp.com/clients/${id}`, {
          method: "DELETE",
        }).then(() => this.loadClients());
      }
    },
  },
  created() {
    this.loadClients();
  },
});
</script>
