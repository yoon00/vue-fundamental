<script setup lang="ts">
import { reactive, ref, watchEffect, watch } from 'vue';


const objRef = ref({name:'seon'});

const objReactive = reactive({
  inner: { name:'seon' }
})

// ref의 변화 감지
watchEffect(()=>{
  // console.log(objRef.value);

  
})

// reactive의 변화 감지
watchEffect(()=>{
  // console.log(objReactive.inner);
})

watch(objRef,(newVal)=>{
  // console.log(objRef.value);
  console.log(objReactive.inner);
})





const updateObject = () => {
  const newObj = {name:'tiger'};
  // objRef.value = {...newObj};
  objReactive.inner = {...newObj};
  
}


</script>

<template>
  <div>
    <h2>반응성 테스트</h2>
    <div>
      <p>ref: {{objRef}}</p>
      <p>reactive {{ objReactive.inner }}</p>
    </div>

    <button type="button" @click="updateObject">새 객체로 재할당!</button>
  </div>
</template>

<style scoped>

</style>