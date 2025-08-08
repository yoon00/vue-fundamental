<script setup lang="ts">
import { ref } from 'vue';


/* 

select 선택에 따라 이미지가 조건부 렌더링 & p태그 조건부 렌더링 

1. 반응성 데이터 설정 (ref)
2. v-model 바인딩
3. 반응성 데이터에 따른 v-if 처리

*/

const weather = ref('');


const sunnyIcon = 'https://cdn-icons-png.flaticon.com/512/869/869869.png'
const cloudyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png'
const rainyIcon = 'https://cdn-icons-png.flaticon.com/512/1163/1163620.png'




</script>

<template>
  <div>
    <h2>오늘 날씨는 어떤가요?</h2>

    <select v-model="weather">
      <option value="">선택하세요</option>
      <option value="sunny">🌞 맑음</option>
      <option value="cloudy">☁️ 흐림</option>
      <option value="rainy">☔️ 비</option>
    </select>
    
    <div style="margin-top: 20px;">

      <!-- v-bind -->
      <img 
        v-if="weather === 'sunny'"
        :src="sunnyIcon" 
        alt='맑음'
        width="100"
      >
      <img 
        v-if="weather === 'cloudy'"
        :src="cloudyIcon" 
        alt='흐림'
        width="100"
      >
      <img 
        v-if="weather === 'rainy'"
        :src="rainyIcon" 
        alt='비'
        width="100"
      >

      <!-- 이미지 렌더링  -->

      <p v-if="weather === 'sunny'">맑은 날입니다. 산책 어떠세요?</p>
      <p v-else-if="weather === 'cloudy'">구름이 많네요,, 비가 올까요?</p> 
      <p v-else-if="weather === 'rainy'">비가 오고있어요! 우산 챙기셨나요?</p> 
      <p v-else>날씨를 선택해주세요.</p>
    </div>



  </div>
</template>

<style scoped>

</style>