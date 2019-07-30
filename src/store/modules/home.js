import {queryFeatured} from '@/api/api'


const home ={
  state: {
    itemList:[],
    searchValue:'',
    materialId:"9660"
  },
  mutations: {
    initHomeList(state,data){
      state.itemList = data;
    },

  },
  actions: {

    queryHomeProduct({state, commit},pageNo){
      var _this = this
      queryFeatured({
        "materialId" : state.materialId,
        "pageNo":pageNo
      }).then(res =>{
        commit('initHomeList',res.data)
      })
    }
  }
}
export default home
