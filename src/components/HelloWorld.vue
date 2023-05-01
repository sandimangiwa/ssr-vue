<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ stores.count }}</h2>
    <button @click="onAdd">add</button>
    <button @click="onMin">min</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const stores = useCounterStore()
const props = defineProps({
  msg: String
})

function onAdd () {
  stores.add()
}

function onMin () {
  stores.min()
}
</script>
