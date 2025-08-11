
<!-- 

자식 컴포넌트는 props를 통해 부모로부터 값을 입력받을 수 있습니다.
defineProps를 사용해 전달받은 props의 타입을 정의할 수 있습니다.
props의 기본값이 필요한 경우 withDefaults를 사용해 기본값을 정의할 수 있습니다.

자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달하기 위해선 defineEmit 함수를 사용할 수 있습니다.
defineEmit으로 정의된 이벤트는 emit의 값으로 전달되며 부모 컴포넌트가 해당 이벤트를 사용할 수 있습니다.

-->


<script setup lang="ts">

// 컴파일 타임 매크로 

// 타입 인자 방식 : 제네릭 타입 선언 컴파일 시점에 타입 확정
// const props = withDefaults(defineProps<{
//   msg:string,
//   onHandle:()=> void,
//   size?:string
// }>(),{
//   size:'md'
// })

const props = defineProps<{
  msg:string
}>()


// const _props = defineProps({
//   msg: String
// })

const emit = defineEmits(['response']);



const handleClick = () => {
  emit('response',id.value);
}



</script>


<template>
  <div>
    {{ msg }}
  </div>
  <button type="button" @click="handleClick">CTA</button>
</template>

<style scoped>

</style>