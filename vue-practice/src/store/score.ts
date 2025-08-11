
// 타입 정의

import type { InjectionKey, Ref } from "vue"

export type ScoreContext = {
  score:Ref<number>;
  comment:Ref<string>;
  updateScore:(v:number) => void;
  updateComment:(v:string) => void;
}

// key 정의

export const scoreKey: InjectionKey<ScoreContext> = Symbol('score')