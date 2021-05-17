<template>
  <transition name="slide">
    <nav
      v-if="show"
      class="p-6 border-r border-black h-full flex-grow-0 flex-shrink-0"
    >
      <ul>
        <li v-for="item in items">
          <router-link :to="item.to">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideNav",
  props: {
    show: Boolean,
  },
  data() {
    return {
      items: [
        { label: "Clients", to: { name: "clients" } },
        { label: "Products", to: { name: "products" } },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.4s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
