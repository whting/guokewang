<template>
  <div class="home">
    <!-- 首页banner -->
    <banner />
    <div class="main w1200">
      <!-- 首页品牌列表 -->
      <!-- <brand-list /> -->
      <!-- 产品刷新提示 -->
      <!-- <product-tips-bar /> -->
      <!-- 产品列表 -->
      <product-list />
      <!--文章系统-->
      <article-list />
      <!-- 底部品牌与降价商品 -->
      <bottom-brand />
    </div>
    <!-- 首页底部导航 -->
    <bottom-nav />
  </div>
</template>


<script>
import Banner from './components/Banner';
import BrandList from './components/BrandList';
import ProductTipsBar from './components/ProductTipsBar';
import ProductList from './components/ProductList';
import ArticleList from './components/ArticleList';
import BottomBrand from './components/BottomBrand';
import BottomNav from './components/BottomNav';
export default {
  name: "home",
  components: {
    Banner,
    BrandList,
    ProductTipsBar,
    ProductList,
    ArticleList,
    BottomBrand,
    BottomNav,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {

  }
};
</script>
<style scoped>

</style>
