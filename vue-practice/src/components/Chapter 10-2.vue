

<script setup lang="ts">

import { ref } from 'vue';
import ChildComp from './ChildComp.vue'


const score = ref(3);
const comment = ref('');




</script>

<template>
  <div>

    <ChildComp v-model:score="score" v-model:comment="comment">
      hello world  

      <template #extra>
        named slot
      </template>

      hola!
      
    </ChildComp>
    <p>score : {{ score }}</p>
    <p>comment : {{ comment }}</p>

  </div>
</template>

<style scoped>

</style>