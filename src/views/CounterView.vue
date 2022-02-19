<template>
  <h3>Counter View: {{ counterStore.counter }}</h3>
  <button @click="counterStore.increment(1)">+1</button>
  <button @click="counterStore.increment(3)">+3</button>
  <button @click="counterStore.increment(5)">+5</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>

<style>
button{
  margin: 0.3rem;
  border-radius: 0.5rem;
  width: 3rem;
  height: 1.9rem;
  border: none;
}
</style>