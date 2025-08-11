<script setup lang="ts">
import Chapter from "./components/Chapter.vue";
// import VIfFor from './components/v-if-for.vue';
// import VIf from './components/v-if.vue';
// import Model from './components/Model.vue';
// import RefVsReactive from './components/RefVsReactive.vue';

import TodoApp from "./components/Todo/TodoApp.vue";
import ScoreProvider from "./store/scoreProvider.vue";
</script>

<template>
  <TodoApp />

  <ScoreProvider>
    <Chapter />
  </ScoreProvider>
  <!-- <hr> -->
  <!-- <RefVsReactive /> -->
  <!-- <Model /> -->
  <!-- <v-if /> -->
  <!-- <v-if-for /> -->
</template>

<style scoped></style>
