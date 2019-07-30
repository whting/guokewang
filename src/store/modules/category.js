import {queryFeatured} from '@/api/api'

const category ={
  state: {
    itemList:[],
    materialId:"9660"
  },
  mutations: {
    initCategoryList(state,data){
      state.itemList = data;
    },
    changeMaterialId(state,materialId){
      state.materialId = materialId
    }

  },
  actions: {
    queryCategoryProduct({state, commit},pageNo){
      console.log(state.materialId)
      var _this = this
      queryFeatured({
        "materialId" : state.materialId,
        "pageNo":pageNo
      }).then(res =>{
        commit('initCategoryList',res.data)
      })
    }
  }
}
export default category
