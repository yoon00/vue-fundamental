<!-- 
    
      1. TodoForm 컴포넌트 만들기
      2. input 값 ref로 가져오기
      3. 가져온 값 emit으로 부모 컴포넌트에 전달하기 
      4. 전달된 emit 함수 실행하기

    -->

<script setup lang="ts">
import { computed, ref } from "vue";
import TodoList from "./TodoList.vue";
import TodoStats from "./TodoStats.vue";
import TodoForm from "./TodoForm.vue";
import TodoFilter from "./TodoFilter.vue";

const todos = ref([
  { id: 1, text: "Vue 학습하기", completed: false },
  { id: 2, text: "컴포넌트 분리하기", completed: true },
  { id: 3, text: "emit 이해하기", completed: false },
]);

const nextId = ref(4);
const filtered = ref(false);

function handleAddTodo(todoText: string) {
  todos.value.push({
    id: nextId.value++,
    text: todoText,
    completed: false,
  });
}

function handleDeleteTodo(id: number) {
  const index = todos.value.findIndex((t) => t.id === id);
  if (index > -1) {
    todos.value.splice(index, 1);
  }
}

function handleToggleTodo(id: number) {
  const todo = todos.value.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}

// 파생 상태
const completedCount = computed(
  () => todos.value.filter((t) => t.completed).length
);
const filteredTodo = computed(() =>
  filtered.value ? todos.value.filter((t) => !t.completed) : todos.value
);
</script>

<template>
  <div class="todo-app">
    <h1>할 일 목록</h1>

    <TodoForm @add-todo="handleAddTodo" />

    <TodoStats :total="filteredTodo.length" :completed="completedCount" />

    <TodoList
      :todos="filteredTodo"
      @toggle-todo="handleToggleTodo"
      @delete-todo="handleDeleteTodo"
    />

    <TodoFilter
      :active="filtered"
      :remainder="todos.length - completedCount"
      @toggle="filtered = !filtered"
    />
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 600px;
  /* margin-top: 0 auto; */
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 1rem;
}
</style>
