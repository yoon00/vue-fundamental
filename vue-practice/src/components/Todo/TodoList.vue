<script setup lang="ts">

import TodoItem from './TodoItem.vue';
import type { Todo } from './type';



defineProps<{
  todos: Todo[]
}>()

const emit = defineEmits<{
  'toggle-todo':[id:number],
  'delete-todo':[id:number],
}>()

const handleToggle = (id:number) => {
  emit('toggle-todo',id)
}

const handleDelete = (id:number) => {
  emit('delete-todo',id)
}


</script>


<template>
  <ul class="todo-list" v-if="todos.length > 0">
    <TodoItem 
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="handleToggle"
      @delete="handleDelete"
    />
  </ul>
  <div class="empty-state" v-else>
    <p>할 일이 없습니다~  <br/> 새로운 할 일을 추가해보세요.</p>
  </div>
</template>

<style scoped>

.todo-list{
  padding: 0;
  border: 1px solid #ddd;
  list-style: none;
  
}

.empty-state{
  padding: 40px;
  color: #888
}

</style>