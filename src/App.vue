<template>
  <div id="app">
    <header-tools/>
    <site-header/>
    <router-view/>
    <side-bar/>
    <site-footer/>
  </div>
</template>
<script>
import HeaderTools from '@/components/HeaderTools';
import SiteHeader from '@/components/SiteHeader';
import SideBar from '@/components/SideBar';
import SiteFooter from '@/components/SiteFooter';
export default {
  components: {
    HeaderTools,  // 头部工具栏
    SiteHeader,  // 网页页头
    SideBar,  // 网页侧边栏
    SiteFooter,  // 网页页脚
  },
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style>
@import "~@/assets/css/base.less";
@import "~@/assets/css/global.less";
  .head-search {
    float: right;
    padding: 25px 0px 8px 0px;
    width: 620px;
    text-align: left;
    margin-right: 100px;
  }

  .head-search .tabs {
    height: 25px;
  }

  .head-search .panel {
    background-color: #f8285c;
    padding: 2px 0 2px 2px;
    height: 34px;
    position: relative;
  }

  .head-search .panel .sInput {
    width: 535px;
    position: relative;
  }

  .head-search .panel .sInput label {
    line-height: 22px;
    position: absolute;
    top: 6px;
    left: 11px;
    color: #a9a9a9;
    height: 0px;
    cursor: text;
    touch-action: none;
    -ms-touch-action: none;
    pointer-events: none;
    -ms-pointer-events: none;
    -webkit-user-select: none;
    font-family: "Microsoft Yahei";
  }

  .head-search .panel .sInput input.skey {
    border: none;
    padding: 6px 0;
    text-indent: 10px;
    height: 22px;
    line-height: 22px;
    width: 530px;
    outline: 0;
    background: #ffffff;
    -webkit-appearance: none;
    display: block;
    font-family: "Microsoft Yahei";
    color: #5a5a5a;
    font-size: 12px;
  }

  .head-search .panel .sBtn {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 85px;
    height: 38px;
    overflow: hidden;
    text-align: center;
  }

  .head-search .panel .sBtn input.btnSearch {
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    background-color: #f8285c;
    cursor: pointer;
    height: 100%;
    border: none;
    width: 100%;
    outline: 0;
    -webkit-appearance: none;
    text-align: center;
  }
    </style>
