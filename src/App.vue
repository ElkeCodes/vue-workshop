<template>
  <div class="w-full h-screen flex flex-col">
    <Header class="w-full" @toggleSideNav="isMenuOpen = !isMenuOpen"></Header>
    <div class="flex flex-1">
      <div class="h-full float-left max-w-lg">
        <SideNav :show="isMenuOpen"></SideNav>
      </div>
      <div class="flex-1 p-2">
        <router-view />
        <router-view name="modal" v-slot="{ Component }">
          <div
            v-if="Component"
            class="
              modal h-screen w-full fixed left-0 top-0
              flex justify-center items-center bg-black bg-opacity-50
            "
          >
            <div class="bg-white rounded shadow-lg w-1/2 pb-4">
              <component :is="Component" />
            </div>
          </div>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import SideNav from "./components/SideNav.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    SideNav,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
});
</script>
