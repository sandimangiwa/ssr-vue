<script setup lang="ts">
import { ref } from "vue";
import Breadcrumb from "primevue/breadcrumb";
const home = ref({
  icon: "pi pi-home",
  label: "Home",
  to: "/",
});
interface props {
  title: string;
  breadcrumb?: { label: string }[];
}
const props = defineProps<props>();
</script>
<template>
  <div class="flex justify-content-between">
    <div class="text-2xl font-bold text-black">{{ title }}</div>
    <Breadcrumb :home="home" :model="breadcrumb" />
  </div>
</template>
