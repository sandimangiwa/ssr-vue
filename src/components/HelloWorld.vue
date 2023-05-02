<template>
  <div>
    <div class="text-center">
      <h2>{{ stores.count }}</h2>
      <Button @click="onAdd">add</Button>
      <Button @click="onMin">min</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";
const stores = useCounterStore();
const props = defineProps({
  msg: String,
});

function onAdd() {
  stores.add();
}

function onMin() {
  stores.min();
}
</script>
