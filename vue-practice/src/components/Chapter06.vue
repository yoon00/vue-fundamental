<!-- 

vue의 리스트 렌더링은 v-for 디렉티브를 사용하여 만들 수 있습니다.
vue는 내부적으로 proxy를 사용하기 때문에 immutable 데이터를 강제하지 않습니다.


-->

<script setup lang="ts">
import { ref } from 'vue';


let id = 0;

interface Todo {
  id: number;
  text: string;
}

const todos = ref<Todo[]>([
  {id:id++, text:'HTML 배우기'},
  {id:id++, text:'CSS 배우기'},
  {id:id++, text:'JavaScript 배우기'},
  {id:id++, text:'Vue 배우기'},
])

const newTodo = ref('');


const removeTodo = (id:number) => {
  todos.value = todos.value.filter(todo => todo.id !== id);
}

const addTodo = () => {
  if(newTodo.value.trim()){
    todos.value.push({
      id: id++,
      text: newTodo.value.trim()
    })
    newTodo.value = '' // 입력 필드 초기화
  }
}

</script>


<template>

  <form @submit.prevent="addTodo">
    <input type="text" v-model="newTodo">
    <button type="submit">할 일 추가</button>
  </form>

  <div v-if="todos.length > 0">총 할 일 : {{ todos.length }} 개</div>
  <div v-else>할 일 끝!</div>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button type="button" @click="()=> removeTodo(todo.id)">❌</button>
    </li>
  </ul>

</template>

<style scoped>
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