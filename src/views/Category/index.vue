<template>
  <div>
    <div class="nav">
      <el-radio-group v-model="selected" v-for="c in category" :key="c.value" size="mini"  @change="change">
        <el-radio-button :label="c.name" ></el-radio-button>
      </el-radio-group>
    </div>

    <product-list/>

  </div>
</template>

<script>

import ProductList from './components/ProductList';
  export default {
    data() {
      return {
        selected: '女装',
        category: [{
            name: "女装",
            value: "9658"
          },
          {
            name: "男装",
            value: "9654"
          },
          {
            name: "鞋包配饰",
            value: "9648"
          },
          {
            name: "数码家电",
            value: "9656"
          },
          {
            name: "家具家装",
            value: "9655"
          },
          {
            name: "母婴",
            value: "9650"
          },
          {
            name: "美妆个护",
            value: "9653"
          },
          {
            name: "运动户外",
            value: "9651"
          },
          {
            name: "美食",
            value: "9649"
          },
          {
            name: "内衣",
            value: "9652"
          },
          {
            name: "综合",
            value: "9660"
          },

        ]
      }
    },
    created(){
      this.selected = this.$route.params.selected
      var materialId = this.category.find((c)=>c.name === this.selected).value;
      this.$store.commit("changeMaterialId",materialId)

    },
    components:{
      ProductList
    },
    methods:{
      change(val){
        var materialId = this.category.find((c)=>c.name === this.selected).value;
        this.$store.commit("changeMaterialId",materialId)

        this.$store.dispatch('queryCategoryProduct',1)
      }
    }
  }

</script>

<style lang="css" scoped>
.nav{
  margin: 0 240px
}
</style>
