<script setup lang="ts">


import { ref } from 'vue';
import ChildComp from './ChildComp.vue';


const message = ref('hello world');


const handler = () => console.log('clicked');


</script>

<template>
  
  <div>
    <!-- v-bind를 사용해 props를 전달할 수 있습니다.-->
    <ChildComp :msg="message" @response="msg => message = msg"/>
      {{ message }}
  </div>

</template>

<style scoped>

</style>s