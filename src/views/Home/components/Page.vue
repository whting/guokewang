<template>
<div class="page">
 <el-pagination background layout="prev, pager, next" :total="1000" @current-change="currentChange">
  </el-pagination>
</div>

</template>
<script>

  export default {

    methods: {
      currentChange(pageNo){
        this.$store.dispatch('queryHomeProduct',pageNo)
      }
    }
  }

</script>
<style scoped>
  .page {
    padding: 0 0 45px;
    padding-top: 30px;
    clear: both;
    overflow: hidden;
    text-align: center;
  }
</style>
