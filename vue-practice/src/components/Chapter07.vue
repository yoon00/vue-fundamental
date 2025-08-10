<!-- 

vue의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있습니다.
vue는 내부적으로 proxy를 사용하기 때문에 immutable 데이터를 강제하지 않습니다.

vue에서는 다른 반응형 데이터 소스를 기반으로 .value를 계산할 때 computed()를 사용할 수 있습니다.
computed는 결과를 캐시하고 의존성이 변경될 때 자동으로 업데이트 합니다.
- 계산된 결과를 여러곳에서 사용해야 될 때 
- 무거운 연산 (정렬, 필터링, etc...)
- 반응형 데이터에 의존하는 계산 

computed는 useMemo 비슷함


computed는 자동으로 의존성 값을 추적합니다. 필요할 때만 업데이트 되기 때문에 성능 낭비 없이 여러 파생 상태를 만들 수 있습니다.
React의 useMemo는 남발하면 오히려 가독성이 떨어지고, 의존성 배열 관리가 더 복잡해진다.
vue의 computed는 자동 추적이라 side Effect(부수효과)가 적습니다.

- 템플릿 로직에 3줄 이상 들어간다? computed.
- 하나의 computed안에서 너무 많은 책임이 이루어진다? computed.


-->

<script setup lang="ts">
import { computed, ref } from 'vue';

let id = 0;

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const todos = ref<Todo[]>([
  {id:id++, text:'HTML 배우기', done:false},
  {id:id++, text:'CSS 배우기', done:false},
  {id:id++, text:'JavaScript 배우기', done:false},
  {id:id++, text:'Vue 배우기', done:false},
])

const newTodo = ref('');
const hideCompleted = ref(false);
const forceRenderCount = ref(0);

const removeTodo = (id:number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

const addTodo = () => {
  if(newTodo.value.trim()){
    todos.value.push({
      id: id++,
      text: newTodo.value.trim(),
      done: false
    })
    newTodo.value = '' // 입력 필드 초기화
  }
}

// 파생 상태
const filteredTodo_ = () => {
  console.log('normal 파생 상태');
  return hideCompleted.value ? todos.value.filter(t => !t.done) : todos.value
}


// 계산된 파생 상태
const filteredTodo = computed(()=>{
  console.log('computed 파생 상태');
  return hideCompleted.value ? todos.value.filter(t => !t.done) : todos.value
})



</script>


<template>

  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button type="submit">할 일 추가</button>
  </form>

  <div v-if="todos.length > 0">총 할 일 : {{ filteredTodo.length }} 개</div>
  <div v-else>할 일 끝!</div>
  <ul>
    <li v-for="todo in filteredTodo" :key="todo.id">
      <input type="checkbox" :id="`${todo.id}`" v-model="todo.done">
      <label :for="`${todo.id}`">
        <span :class="{done:todo.done, text:'newValue'}">{{ todo.text }}</span>
      </label>
      <button type="button" @click="()=> removeTodo(todo.id)">❌</button>
    </li>
  </ul>

  <button type="button" @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'show all' : 'hide completed' }}
  </button>
  
  <button type="button" @click="forceRenderCount++">
    강제 리-렌더링
    {{ forceRenderCount }}
  </button>

</template>

<style scoped>

.done{
  text-decoration: line-through;
}

form{
  margin-bottom: 1rem;
}

ul{
  li{
    margin-bottom: 1rem;
  }
}

button{
  margin-left: 2rem;
}

</style>