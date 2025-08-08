<script setup lang="ts">
import { ref } from 'vue';


const cheer = ref(false);
const type =ref('active');

const toggle = () => {
  cheer.value = !cheer.value;
}
</script>

<template>
<button type="button" @click="toggle">토글 버튼</button>
<h1 v-if="cheer">화이팅!</h1>
<!-- <h1 v-if="type === 'active'">화이팅!</h1> -->
<h1 v-else>힘내자!</h1>
<!-- <h1 v-show="cheer">힘내자!</h1> -->
</template>

<style scoped>

</style>