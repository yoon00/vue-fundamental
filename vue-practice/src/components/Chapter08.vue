
<!-- 


React는 useEffect 하나로 대부분을 다 처리합니다. cleanup포함

Vue는 목적에 따라 watchEffect, watch, onMounted 로 역할을 나눠 처리합니다.

기능별 분리된 이유 : 
반응형 시스템 (reactivity system)이 내장되어 있기 때문
상태 추적은 watchEffect/watch가 자동/명시적으로 처리
DOM의 생명주기 처리는 onMounted, onUpdated를 통해 명확한 시점을 훅킹


Vue는 왠만하면 내가 다 해줄게~~  : 성능/개발 편의성

React는 안 해주는게 아니야, 난 만들어 놨다? 골라서 써 (문제가 생겼을 때 ) 생태계/인력풀/커뮤니티/대규모


-->




<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { updateElementText } from '../utils/updateElementText';


const pElementRef = ref<HTMLParagraphElement | null>(null);


const isHTMLElement = (el:unknown): el is HTMLElement => {
  return el instanceof HTMLElement;
}


// 컴포넌트가 mount된 이후의 시점.
onMounted(()=>{
  
  // (pElementRef.value as HTMLParagraphElement).textContent = ''

  if(pElementRef.value){
    pElementRef.value.textContent = 'mounted!!!'
  }

  if(isHTMLElement(pElementRef.value)){
    pElementRef.value.textContent = 'mounted!!!'
  }

  updateElementText(pElementRef,'hello vue.js')

})


</script>

<template>
  <div>
    <p ref="pElementRef">hello world</p>
  </div>
</template>

<style scoped>

</style>