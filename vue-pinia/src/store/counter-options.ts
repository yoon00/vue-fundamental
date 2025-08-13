/* 
  Options API 

  상태의 초깃값을 되돌리기 위해서 $reset함수가 내장되어 있습니다.
  
  
*/


import {defineStore} from 'pinia';


//  1단계 : 카운터 스토어 정의
export const useCounterStore = defineStore('counter',{
  // state: 데이터 저장소 (반드시 함수의 형태로 작성 후 값 반환)
  state: () => ({ 
    count: 0 
  }),

  getters:{
    doubleCount: (state) => state.count * 2
  },

  // actions: 상태를 변경하는 메서드들
  actions:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    },
    randomCounter(){
      this.count = Math.round(100 * Math.random())
    },
    // reset(){
    //   this.count = 0;
    // }
  }

})
























