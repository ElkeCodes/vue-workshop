<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative">
      <h1 class="pt-6 pb-6 text-xl">Create client</h1>
    </div>
    <div class="pt-6">
      <client-form
        :client="client"
        @submit="saveClient"
        @cancel="returnToClients"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientForm from "../components/clients/ClientForm.vue";
import { defaultClient } from "../models/Client";

export default defineComponent({
  name: "CreateClient",
  components: {
    ClientForm,
  },
  data() {
    return {
      client: { ...defaultClient },
    };
  },
  methods: {
    returnToClients() {
      this.$router.push({ name: "clients" });
    },
    saveClient(client: Client) {
      this.$store
        .dispatch("clients/createClient", client)
        .then(this.returnToClients);
    },
  },
});
</script>
