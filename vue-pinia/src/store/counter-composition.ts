
/* 
  Composition API  Vue3
  트리 쉐이킹, 가상 돔, 정적 트리 호이스팅 (SSG), IE 지원 X 
  
  setup()
*/


import {defineStore} from 'pinia';
import { computed, reactive, ref, toRefs } from 'vue';

export const useCounterStore = defineStore('counter',()=>{

  // const count = ref(0);
  // const name = ref('tiger');
  // const doubleCount = computed(()=> count.value * 2);

  // const increment = () => {
  //   count.value++;
  // }

  // const decrement = () => {
  //   count.value--;
  // }

  // const reset = () => {
  //   count.value = 0;
  // }


  // return {count,name,doubleCount,increment,decrement,reset}

  // const store = reactive({
  //   count:0,
  //   name:'tiger',
  //   get doubleCount(){
  //     return this.count * 2
  //   },
  //   increment(){
  //     this.count++;
  //   },
  //   decrement(){
  //     this.count--
  //   },
  //   reset(){
  //     this.count = 0;
  //   }
  // })

  // return store

  // 반응성 상태
  const state = reactive({
    count:0,
    name:'tiger'
  })

  // 파생 상태 
  const getters = {
    doubleCount: computed(()=> state.count * 2)
  }

  // actions method
  const actions = {
    increment(){
      state.count++;
    },
    decrement(){
      state.count--;
    }
  }

  return {
    ...toRefs(state),
    ...getters,
    ...actions
  }


})





















