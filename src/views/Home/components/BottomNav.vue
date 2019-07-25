<template>
  <div class="nav-main">
    <div class="main e-nav w1200">
      <div class="nav-item fl">
        <div class="item-list">
          <ul>
            <li>
              <a href="/" class="active">全部</a>
            </li>
            <li v-for="i in 5" :key="i">
              <a href="/index/cate/cid/1.html" title="女装">女装</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-other fl">
        <ul>
          <li>
            <a href="/xinpin/">
              <i class="today"></i>
              <span>今日新品</span>
            </a>
          </li>
          <li>
            <a href="/yugao/">
              <i class="tw"></i>
              <span>明日预告</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.nav-main {
  width: 100%;
  height: 35px;
  background: #fff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  z-index: 79;
  position: relative;
}
.nav-main.fixed {
  position: fixed;
  top: 0px;
  margin-top: 0;
  opacity: 0.95;
}
.e-nav {
  position: relative;
  height: 35px;
  margin: 0 auto;
}
.nav-item {
  height: 35px;
  position: relative;
}
.item-list ul li {
  display: block;
  float: left;
  margin-right: 5px;
  display: inline;
}
.item-list ul li a,
.e-nav .n_h a {
  position: relative;
  display: inline-block;
  height: 33px;
  line-height: 35px;
  color: #666;
  font-size: 12px;
  padding: 0 10px;
  min-width: 26px;
  text-align: center;
}
.item-list ul li a.active,
.e-nav .n_h a.active {
  color: #ff4785;
  font-weight: bold;
  text-decoration: none;
}
.item-list ul li a:hover,
.e-nav .n_h a:hover {
  text-decoration: none;
  color: #ff4785;
  border-bottom: 2px solid #ff4785;
}

.nav-other {
  position: relative;
  padding-left: 20px;
}
.nav-other ul li {
  float: left;
  margin-right: 15px;
  display: inline;
}
.nav-other ul li a {
  padding: 0 6px;
  display: inline-block;
  color: #666;
  font-size: 12px;
  cursor: pointer;
  height: 35px;
  line-height: 35px;
  _height: 20px;
  _margin-top: 16px;
}
.nav-other ul li a.advance {
  padding: 0 6px;
  text-align: center;
  color: #a3370f;
  font-weight: 700;
  border-bottom: 2px solid #a9441f;
  text-decoration: none;
  line-height: 42px;
  height: 38px;
  *line-height: 35px;
}
.nav-other ul li a.advance:hover {
  color: #a3370f;
}
.nav-other ul li a:hover {
  text-decoration: none;
  color: #ff4785;
}
.nav-other ul li a:hover span {
  text-decoration: none;
}
.nav-other ul li a.advance.active:hover {
  text-decoration: none;
  color: #a3370f;
}
.nav-other ul li a.advance.active:hover span {
  text-decoration: none;
}
.nav-other ul li a.advance.active:hover {
  text-decoration: none;
}
.nav-other ul li a.advance.active:hover span {
  text-decoration: none;
}
.nav-other ul li em.l2 {
  left: 175px;
}
.nav-other ul li a .today {
  width: 14px;
  height: 14px;
  background: url(../../../assets/images/global/today.gif) no-repeat;
  display: inline-block;
  vertical-align: -4px;
  *vertical-align: -1px;
  _vertical-align: -2px;
  margin-right: 1px;
}
.nav-other ul li a .tw {
  width: 14px;
  height: 14px;
  background: url(../../../assets/images/global/tomorrow.gif) no-repeat;
  display: inline-block;
  vertical-align: -4px;
  *vertical-align: -1px;
  _vertical-align: -2px;
  margin-right: 1px;
}

.n_h {
  float: right;
  color: #999;
  height: 35px;
}
</style>
