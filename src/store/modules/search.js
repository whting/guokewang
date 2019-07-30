import {query} from '@/api/api'


const search ={
  state: {
    itemList:[],
    searchValue:'',
  },
  mutations: {
    initSearchList(state,data){
      state.itemList = data;
    },

  },
  actions: {

    query({state,commit},pageNo){
      query({
        "q":state.searchValue,
        "pageNo":pageNo
      }).then(res =>{
        commit('initSearchList',res.data)
      })
    }
  }
}
export default search
