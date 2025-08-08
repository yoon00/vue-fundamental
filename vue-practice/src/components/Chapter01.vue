

<!-- 

ref : 
원시 값 (string,number,boolean)을 반응성으로 만들기 위해 사용
객체도 사용할 수 있음. .value로 접근해야 함.
내부적으로 proxy를 사용하여 속성 접근을 감시합니다.
shallow copy


reactive : 
객체 타입 (Object, Array, Function)을 깊은 반응성(deep reactive)으로 만들기 위한 방법
내부적으로 proxy를 사용하여 속성 접근을 감시합니다.
deep copy


vue v2+
object를 넣을 경우 ref는 재할당 하면 반응성을 유지함, reactive는 반응성 상실 

-->

<script setup lang="ts">
import { reactive, ref } from 'vue';


const message = ref('hello world');
const messageObj = reactive({
  message:'hello world'
})

console.log(message.value);
console.log(messageObj.message);

// const newData = {name:'tiger'};

// message.value = {...newData};
// messageObj.message = {...newData};

// console.log(message.value);
// console.log(messageObj.message);




</script>

<template>
  <h1> {{ message }} </h1>
  <h1> {{ messageObj.message }} </h1>
</template>

<style scoped>

</style>