import { defineStore } from "pinia";

const dely = (time: number) => new Promise(resolve => {setTimeout(resolve, time)})

interface IOrder {
  price?: number,
  num?: number
}
interface ITestStore {
  count: number,
  orderList: IOrder[]
}

export const useTestStore =  defineStore('test', {
  state: (): ITestStore => ({
    count: 0,
    orderList: []
  }), 
  actions: {
   async initList() {
     await dely(1000)
     this.orderList = [{price: 13, num:10},{price: 14, num: 10},{price: 16, num: 10}]
    }
  },
  getters: {
    getCount(state): Number {
      return state.count * 2
    }
  }
})