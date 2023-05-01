<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onButtonClick">Click here</button>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  msg: String
})

function onButtonClick () {
  console.log('Button has been clicked upon');
  // eslint-disable-next-line no-alert
  alert('Button has been clicked upon');
}
</script>
