<template>
  <button type="button" @click="isMenuOpened = !isMenuOpened">
    Actions
    <span aria-hidden="true">▾</span>
  </button>
  <div
    v-if="isMenuOpened"
    class="absolute flex flex-col items-start border p-2 gap-2 bg-white"
  >
    <slot><button @click="closeMenu">Close</button></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isMenuOpened: false,
    };
  },
  methods: {
    closeMenu() {
      this.isMenuOpened = false;
    }
  }
});
</script>
