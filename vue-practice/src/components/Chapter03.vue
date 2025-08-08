

<!-- 
v-on 디렉티브를 사용하여 DOM 이벤트를 감지할 수 있습니다.
v-on의 축약 문법은 @ 기호를 사용합니다. 

vue는 setup 함수를 전체 다시 실행하지 않습니다.
- 컴포넌트가 최초로 마운트될 때 단 한번만 실행합니다.
- 이후 ref나 reactive가 변경되더라도
    컴포넌트는 다시 렌더링되지만
    setup은 다시 실행되지 않습니다.
-->


<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';


const count = ref(0);


onBeforeMount(()=>{
  console.log('beforeMount!');
  
})

onMounted(()=>{
  console.log('mounted!');
})

onBeforeUpdate(()=>{
  console.log('beforeUpdate!');
  
})

onUpdated(()=>{
  console.log('updated!');
  
})

const increment = () => {
  
  count.value++;
}

</script>

<template>
  <button type="button" @click="increment">숫자 세기 : {{ count }}</button>
</template>

<style scoped>

</style>