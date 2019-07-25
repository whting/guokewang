<template>
  <div class="brand_index clear">
    <div class="brand_list"></div>
    <div class="brand-icons clear">
      <span class="txt fl">更多品牌特卖:</span>
      <ul class="fl">
        <li v-for="i in 8" :key="i">
          <a href="#" target="_blank">
            <img src="http://gju2.alicdn.com/tps/TB1TuapmxPI8KJjSspfXXcCFXXa" width="80px" alt />
          </a>
        </li>
      </ul>
      <a href="/brand/" target="_blank" class="see-all fr">
        <span class="fl">查看全部</span>
        <em class="go-icon fr"></em>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.brand_index {
  width: 915px;
  margin: 0 auto;
}
.brand_index .brand_list {
  background: #fff;
  padding: 20px 10px 0;
  height: auto;
  overflow: hidden;
  width: 875px;
}
.brand_index .brand_list ul li {
  float: left;
  width: 271px;
  margin: 0 10px;
}
.brand_index .brand_list ul li .brand-pic {
  display: table-cell;
  vertical-align: middle;
  width: 271px;
  height: 131px;
}
.brand_index .brand_list ul li .brand-pic img {
  display: block;
  margin: 0 auto;
  width: 271px;
}
.brand_index .brand_list ul li .link-box {
  background: none repeat scroll 0 0 #fff;
  border-bottom: 1px solid #dcdcdc;
  cursor: pointer;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  height: 181px;
}
.brand_index .brand_list ul li .link-box:hover .brand-pic img {
  opacity: 0.7;
}
.brand_index .brand_list ul li .card {
  height: 50px;
  line-height: 20px;
  background: none repeat scroll 0 0 #fff;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
}
.brand_index .brand_list ul li .card em.icon {
  border-color: transparent #f72862 #f72862 transparent;
  border-style: dashed solid solid dashed;
  border-width: 4px;
  bottom: 2px;
  content: "";
  font-size: 0;
  height: 0;
  position: absolute;
  right: 2px;
  width: 0;
}
.brand_index .brand_list ul li .card .brand-logo {
  float: left;
  height: 30px;
  margin: 10px 0 0 10px;
  width: 60px;
}
.brand_index .brand_list ul li .card .discount {
  color: #ff464e;
  float: right;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 15px;
}
.brand_index .brand_list ul li .card .title {
  color: #000;
  float: right;
  margin-right: 8px;
  margin-top: 15px;
}
.brand_index .brand-icons {
  width: 855px;
  height: 40px;
  background: #fff;
  padding: 10px 20px;
  line-height: 38px;
}
.brand_index .brand-icons .txt {
  color: #ff464e;
  font-size: 14px;
}
.brand_index .brand-icons ul {
  width: 678px;
  height: 40px;
  overflow: hidden;
}
.brand_index .brand-icons ul li {
  width: 80px;
  height: 40px;
  float: left;
  margin: 0 13px 0 20px;
}
.brand_index .brand-icons ul li a {
  display: block;
  width: 80px;
  height: 40px;
}
.brand_index .brand-icons ul li a:hover {
  opacity: 0.6;
}
.brand_index .brand-icons .see-all {
  width: 72px;
  color: #ff464e;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  margin-top: 10px;
}
.brand_index .brand-icons .see-all .go-icon {
  display: block;
  width: 11px;
  height: 9px;
  margin: 6px 0 0 3px;
}
.brand_index .brand-icons .see-all:hover span {
  text-decoration: underline;
  cursor: pointer;
}
.w1200 .brand_index {
  width: 1200px;
}
.w1200 .brand_index .brand_list {
  width: 1180px;
}
.w1200 .brand_index .brand_list ul li {
  width: 373px;
}
.w1200 .brand_index .brand_list ul li .brand-pic {
  height: 180px;
  width: 373px;
}
.w1200 .brand_index .brand_list ul li .brand-pic img {
  width: 373px;
}
.w1200 .brand_index .brand_list ul li .link-box {
  height: 230px;
}
.w1200 .brand_index .brand-icons {
  width: 1160px;
}
.w1200 .brand_index .brand-icons ul {
  width: 984px;
}
.w1200 .brand_index .brand-icons ul li {
  margin: 0 23px 0 20px;
}
</style>
