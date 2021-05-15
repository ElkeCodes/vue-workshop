<template>
  <form class="w-full" @submit.prevent>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >First name</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="firstName"
          v-model="client.firstName"
        />
      </div>
    </div>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >Last name</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="lastName"
          v-model="client.lastName"
        />
      </div>
    </div>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >E-mail</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="email"
          v-model="client.email"
        />
      </div>
    </div>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >Birthday</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="birthday"
          v-model="client.birthday"
        />
      </div>
    </div>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >City</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="city"
          v-model="client.city"
        />
      </div>
    </div>
    <div class="flex items-center mb-6">
      <div class="w-1/4">
        <label
          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          >ZIP</label
        >
      </div>
      <div class="w-3/4">
        <input
          class="
            bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none
            focus:bg-white focus:border-primary-500
          "
          type="text"
          name="zip"
          v-model="client.zip"
        />
      </div>
    </div>
    <div class="flex items-center">
      <div class="md:w-1/4"></div>
      <div class="md:w-3/4 flex">
        <div>
          <button
            type="submit"
            class="
              bg-primary-500 text-white font-bold
              py-2 px-4 rounded hover:bg-primary-700
            "
            @click="onSubmit"
          >
            Save
          </button>
        </div>
        <button
          type="button"
          class="
            bg-transparent hover:bg-primary-700 border border-primary-500
            ml-4 py-2 px-4 rounded
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
});
</script>
