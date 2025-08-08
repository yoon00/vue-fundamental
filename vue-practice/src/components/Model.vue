
<!-- 

v-bind와 v-on을 합칠 수 있는 v-model을 사용해서 반응형 데이터 렌더링 

모든 항목을 ref로 관리할 경우, 폼이 커지면 중복이 많아지고 관리가 불편해짐.
이를 해결하기 위해 반응형(성)데이터를 객체로 만들어 관리합니다 (reactive)

vue는 반응성 데이터인 객체를 구조분해할경우 반응성을 상실합니다.
그때 toRefs, toRef가 해당 문제를 해결해줄 수 있습니다.


-->

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue';



// const text = ref('');
// const agree = ref(false);
// const gender = ref('남성');
// const selected = ref('');

const form = reactive({
  text:'',
  agree:false,
  gender:'남성',
  selected:''
});

const style = {
  display:'flex',
  gap:'2rem'
}

const { text, agree, gender, selected } = toRefs(form);

// console.log( text, agree, gender, selected  );



</script>

<template>
  <div>
    <label :style="style">
      <p>이름 : {{ text }} </p>
      <input type="text" placeholder="이름 입력" v-model="text">
    </label>

    <hr>

    <label>
      <p>동의 여부 : {{ agree }}</p>
      <input type="checkbox" v-model="agree">
    </label>

    <hr>

    <label>
      <span>남자</span>
      <input type="radio" name="gender" value="남성" v-model="gender">
    </label>
    <label>
      <span>여자</span>
      <input type="radio" name="gender" value="여성" v-model="gender">
    </label>
    <p>성별 : {{ gender }}</p>
    
    <hr>

    <select v-model="selected">
      <option disabled value="">언어 선택</option>
      <option>JavaScript</option>
      <option>TypeScript</option>
      <option>React</option>
      <option>Vue</option>
    </select>
    <p>선택한 언어 : {{ selected }} </p>

  </div>
</template>

<style scoped>
  label{
    display: flex;
    gap:2rem
  }
</style>