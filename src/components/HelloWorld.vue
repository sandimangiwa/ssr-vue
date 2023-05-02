<template>
  <div>
    <div class="text-center">
      <h2>{{ stores.count }}</h2>
      <div class="card flex justify-content-center flex-wrap gap-3">
        <Button label="Add" severity="primary" @click="onAdd"></Button>
        <Button label="Min" severity="danger" @click="onMin"></Button>
      </div>
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
