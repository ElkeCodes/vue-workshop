<template>
  <header class="flex items-center flex-wrap bg-primary-500 p-6">
    <button
      class="
        flex
        items-center
        px-3
        py-2
        border
        rounded
        text-teal-200
        border-teal-400
        hover:text-white
        hover:border-white
      "
      @click="$emit('toggleSideNav')"
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
    <h1 class="pl-3">Hello Bold!</h1>
    <lock :isLocked="isLocked" @click="toggleLock"></lock>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Lock from "./Lock.vue";

export default defineComponent({
  name: "Header",
  emits: ["toggleSideNav"],
  components: {
    Lock,
  },
  computed: {
    ...mapGetters(["isLocked"]),
  },
  methods: {
    ...mapActions(["toggleLock"]),
  },
});
</script>
