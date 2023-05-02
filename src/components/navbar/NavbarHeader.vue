<template>
  <div class="card">
    <div class="flex card-container green-container">
      <div
        class="layout-sidebar overflow-x-hidden overflow-scroll min-h-screen"
      >
        <Menu :model="items" />
      </div>
      <div class="flex-grow-1 card overflow-hidden">
        <div class="card-container overflow-scroll min-h-screen p-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menu from "primevue/menu";
const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    to: "/",
  },
  {
    label: "About",
    icon: "pi pi-exclamation-circle",
    to: "/about",
  },
]);
</script>
