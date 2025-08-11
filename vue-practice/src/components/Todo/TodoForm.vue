<script setup lang="ts">
import { ref } from 'vue';


const newTodo = ref('');

const emit = defineEmits<{
    'add-todo':[text:string];
}>()

const addTodo = () => {
    if(newTodo.value.trim()){
        emit('add-todo', newTodo.value.trim())
        newTodo.value = '';
    }
    
}
</script>

<template>
    <form class="add-form" @submit.prevent="addTodo">
        <input type="text" v-model="newTodo"/>
        <button type="button">추가</button>
    </form>
</template>

<style scoped>

</style>