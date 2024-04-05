import { defineStore } from 'pinia'

export const usePlayingStore = defineStore({
  id: 'PlayingStore',
  state: () => ({
    quest: null,
    imageView: null,
    ans1: null,
    ans2: null,
    ans3: null,
    ans4: null,
    time: null
  }),
  actions: {
    setQuestion(quest) {
      this.quest = quest
    },
    setImage(imageView) {
      this.imageView = imageView
    },
    setAns1(ans1){
      this.ans1 = ans1
    },
    setAns2(ans2){
      this.ans2 = ans2
    },
    setAns3(ans3){
      this.ans3 = ans3
    },
    setAns4(ans4){
      this.ans4 = ans4
    }
  },
  getters: {
    getQuestion() {
      return this.quest
    },
    getImage() {
      return this.imageView
    },
    getAns1() {
      return this.ans1
    },
    getAns2() {
      return this.ans2
    },
    getAns3() {
      return this.ans3
    },
    getAns4() {
      return this.ans4
    }
  },

})