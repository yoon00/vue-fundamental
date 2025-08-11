

<script setup lang="ts">


const props = defineProps<{
  score: number,
  comment: string
}>()



const emit = defineEmits<{

  // interface type  함수 시그니쳐 
  // (e:'update:score',value:number): void;
  // (e:'update:comment',value:string): void;

  // tuple type
  'update:score':[value:number],
  'update:comment':[value:string],
}>()


// const handleInput = (e) => {
//     props.score = e.target.value
// }


</script>

<template>
  <div>
    <input 
      type="range" 
      min="0" 
      max="5"
      :value="score"
      @input="emit('update:score', +($event.target as HTMLInputElement).value)"      
    >
    
    <textarea
      :value="comment"
      @input="emit('update:comment', ($event.target as HTMLInputElement).value)"      
    ></textarea>

  </div>

  <div>
    
    <p>
      anonymity slot : <slot></slot>
    </p>

    <hr>

    <p>
      named slot : <slot name="extra"></slot>
    </p>
    
  </div>
</template>

<style scoped>

</style>