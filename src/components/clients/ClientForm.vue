<template>
  <form class="w-full" @submit.prevent>
    <form-field v-model="client.firstName" label="First name" />
    <form-field v-model="client.lastName" label="Last name" />
    <form-field v-model="client.email" label="E-mail" />
    <form-field v-model="client.birthday" label="Birthday" />
    <form-field v-model="client.city" label="City" />
    <form-field v-model="client.zip" label="ZIP" />
    <div class="flex items-center">
      <div class="md:w-1/4"></div>
      <div class="md:w-3/4 flex">
        <div>
          <button
            type="submit"
            class="
              bg-primary-500
              text-white
              font-bold
              py-2
              px-4
              rounded
              hover:bg-primary-700
            "
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
import { Client } from "../../models/Client";
import FormField from "../../components/FormField.vue";

export default defineComponent({
  props: {
    client: {
      type: Object as () => Client,
      required: true,
    },
  },
  emits: ["submit", "cancel"],
  methods: {
    onSubmit() {
      this.$emit("submit", this.client);
    },
    onCancel() {
      this.$emit("cancel");
    },
  },
  components: {
    FormField,
  },
});
</script>
