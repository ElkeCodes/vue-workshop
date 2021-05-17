<template>
  <div class="pl-6 pr-6 divide-y divide-gray-400">
    <div class="relative" data-testid="page-header">
      <h1 class="pt-6 pb-6 text-xl">Edit client</h1>
      <div class="absolute top-0 right-0"></div>
    </div>
    <div class="pt-6">
      <client-form
        :client="client"
        @submit="editClient"
        @cancel="returnToClients"
      ></client-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientForm from "../components/clients/ClientForm.vue";

export default defineComponent({
  name: "EditClient",
  components: {
    ClientForm,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      client: {
        firstName: "",
        lastName: "",
        email: "",
        birthday: "",
        city: "",
        zip: "",
      } as Client,
    };
  },
  created() {
    fetch(`https://base-app-backend.herokuapp.com/clients/${this.$props.id}`)
      .then((response) => response.json())
      .then((client) => (this.client = client));
  },
  methods: {
    returnToClients() {
      this.$router.push({ name: "clients" });
    },
    editClient(client: Client): Promise<Response> {
      return fetch(
        `https://base-app-backend.herokuapp.com/clients/${this.$props.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(client),
        }
      ).then(this.returnToClients);
    },
  },
});
</script>
