<template>
  <h3>Home View: {{ counterStore.counter }}</h3>
  <h3>Numero de cambios: {{ counterStore.changes }}</h3>
</template>

<script lang="ts" setup>
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
</script>
