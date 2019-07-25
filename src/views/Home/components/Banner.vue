<template>
  <div>
    <div class="top_bar">
      <ul id="banner_list" class="banner" style>
        <li
          style="background-image: url(http://www.tool168.cn/data/upload/banner/1902/25/5c7382f16cb99.png); z-index: 1; opacity: 1; background-position: 50% 50%; background-repeat: no-repeat no-repeat;"
        >
          <a target="_blank" title="商品历史价格" href="/history/" class="pic center"></a>
        </li>
      </ul>
    </div>
    <div class="top_wrap">
      <div class="top_box">
        <div class="banner_l">
          <dl>
            <dd>
              <a href="/index/cate/cid/1.html">
                <i class="ct-icon ct-icon-nvzhuang"></i>女装
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/2.html">
                <i class="ct-icon ct-icon-nanzhuang"></i>男装
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/3.html">
                <i class="ct-icon ct-icon-xiezi"></i>鞋包
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/10.html">
                <i class="ct-icon ct-icon-shuma"></i>数码家电
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/12.html">
                <i class="ct-icon ct-icon-jiafang"></i>家居家装
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/7.html">
                <i class="ct-icon ct-icon-muying"></i>母婴
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/6.html">
                <i class="ct-icon ct-icon-meizhuang"></i>美妆
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/4.html">
                <i class="ct-icon ct-icon-peishi"></i>珠宝饰配
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/5.html">
                <i class="ct-icon ct-icon-jujia"></i>运动户外
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/8.html">
                <i class="ct-icon ct-icon-meishi"></i>美食
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/9.html">
                <i class="ct-icon ct-icon-neiyi"></i>内衣
                <em class="ct-line"></em>
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/15.html">
                <i class="ct-icon ct-icon-xiangbao"></i>其他
              </a>
            </dd>
          </dl>
        </div>
        <div class="banner_r" style="background:#f7f7f7;box-shadow:none">
          <dl>
            <dd>
              <a href="/history/" target="_blank" class="right" title="右一">
                <img src="/static/549f927773c84.jpg" alt />
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/2.html" target="_blank" class="right" title="右二">
                <img src="/static/549f9289deb32.jpg" alt />
              </a>
            </dd>
            <dd>
              <a href="/jiangjia/" target="_blank" class="right" title="右三">
                <img src="/static/549f929a550f2.jpg" alt />
              </a>
            </dd>
            <dd>
              <a href="/index/cate/cid/3.html" target="_blank" class="right" title="右四">
                <img src="/static/549f92b11aa33.jpg" alt />
              </a>
            </dd>
            <dd class="last">
              <a href="/jiu/" target="_blank" class="right" title="新版轮播右下长方形广告位">
                <img src="/static/5684d22ced9f5.jpg" alt />
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/*this is top_bar*/
.top_bar {
  background-color: #f7f7f7;
  height: 360px;
  overflow: hidden;
  width: 1200px;
  margin: 0 auto;
}
.top_bar .banner {
  position: relative;
  height: 350px;
  width: 720px;
  z-index: 0;
  overflow: hidden;
}
.w1200 .top_bar .banner {
  margin-left: 210px;
  margin-top: 10px;
}
.top_bar .banner li {
  padding-left: 220px;
  display: block !important;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  filter: alpha(opacity=0);
}
.top_bar .banner .pic {
  height: 360px;
  display: block;
  width: 940px;
  margin: 0 auto;
}
/*this is top_wrap*/
.top_wrap {
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  _height: 1px;
  _overflow: hidden;
}
.top_wrap .top_box {
  position: relative;
  width: 100%;
  height: 0;
  min-width: 1200px;
}
.top_wrap .banner_l {
  position: relative;
  top: -360px;
  z-index: 10;
  width: 210px;
  display: block;
}
.w1200 .top_wrap .banner_l {
  left: 0;
}
.w1200 .top_bar .banner li {
  padding-left: 0;
}
.top_wrap .banner_l dl {
  width: 180px;
  height: 357px;
  overflow: hidden;
  padding: 2px 10px 1px;
  background-color: #fff;
}
.top_wrap .banner_l dl dd {
  float: left;
  width: 50%;
  height: 51px;
  overflow: hidden;
  line-height: 50px;
  text-align: center;
  background: url(../../../assets/images/dotted_line.png) repeat-x bottom;
}
.top_wrap .banner_l dl dd a {
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #fff;
  font-size: 14px;
  position: relative;
}
.ct-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  position: relative;
  top: -2px;
  background: url(../../../assets/images/ct_icons.png) no-repeat 0 0;
  margin-right: 5px;
}
.ct-icon-nvzhuang {
  background-position: 0 0;
}
.ct-icon-nanzhuang {
  background-position: -24px 0;
}
.ct-icon-xiezi {
  background-position: -48px 0;
}
.ct-icon-xiangbao {
  background-position: -72px 0;
}
.ct-icon-muying {
  background-position: -96px 0;
}
.ct-icon-meizhuang {
  background-position: -120px 0;
}
.ct-icon-jujia {
  background-position: -144px 0;
}
.ct-icon-jiafang {
  background-position: -168px 0;
}
.ct-icon-wenti {
  background-position: -192px 0;
}
.ct-icon-meishi {
  background-position: -216px 0;
}
.ct-icon-shuma {
  background-position: -240px 0;
}
.ct-icon-dianqi {
  background-position: -264px 0;
}
.ct-icon-neiyi {
  background-position: -288px 0;
}
.ct-icon-peishi {
  background-position: -312px 0;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-nvzhuang {
  background-position: 0 -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-nanzhuang {
  background-position: -24px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-xiezi {
  background-position: -48px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-xiangbao {
  background-position: -72px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-muying {
  background-position: -96px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-meizhuang {
  background-position: -120px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-jujia {
  background-position: -144px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-jiafang {
  background-position: -168px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-wenti {
  background-position: -192px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-meishi {
  background-position: -216px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-shuma {
  background-position: -240px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-dianqi {
  background-position: -264px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-neiyi {
  background-position: -288px -24px;
}
.top_wrap .banner_l dl dd a:hover .ct-icon-peishi {
  background-position: -312px -24px;
}
.ct-line {
  float: right;
  width: 1px;
  height: 15px;
  background-color: #eee;
  margin-top: 18px;
}

.banner_arrow {
  display: none;
}
.banner_arrow .arrow_prev,
.banner_arrow .arrow_next {
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: block;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  position: absolute;
  top: -210px;
  width: 29px;
  z-index: 12;
}
.banner_arrow .arrow_prev {
  left: 220px;
}
.banner_arrow .arrow_next {
  right: 0;
}
.banner_arrow .arrow_prev:hover,
.banner_arrow .arrow_next:hover {
  background-color: rgba(0, 0, 0, 0.4);
}
.banner_arrow .arrow_prev i,
.banner_arrow .arrow_next i {
  cursor: pointer;
  display: block;
  height: 21px;
  margin: 12px 0 0 9px;
  overflow: hidden;
  width: 13px;
}
.banner_arrow .arrow_prev i {
  background-position: top left;
}
.banner_arrow .arrow_next i {
  background-position: top right;
}
.top_wrap .banner_r {
  height: 360px;
  position: absolute;
  right: 0;
  top: -360px;
  width: 250px;
  z-index: 10;
  background: #e8e8e8;
  box-shadow: 0 -3px 2px rgba(102, 102, 102, 0.15);
  overflow: hidden;
}
.top_wrap .banner_r dl {
  width: 251px;
  height: 360px;
  overflow: hidden;
  background-color: #e2e2e2;
}
.top_wrap .banner_r dl dd {
  float: left;
  display: inline;
  width: 124.5px;
  height: 119px;
  overflow: hidden;
  text-align: center;
  background-color: #fff;
  margin: 0 1px 1px 0;
}
.top_wrap .banner_r dl dd img {
  width: 124px;
  max-height: 119px;
}
.top_wrap .banner_r dl dd.last {
  width: 250px;
  height: 120px;
}
.top_wrap .banner_r dl dd.last img {
  width: 250px;
  max-height: 120px;
}
.top_wrap .banner_r dl dd a:hover {
  opacity: 0.8;
  filter: alpha(opacity=80);
}
.top_wrap .round {
  position: absolute;
  margin-right: -210px;
  top: -25px;
  width: 200px;
  right: 50%;
}
.top_wrap .round .adType {
  text-align: center;
}
.top_wrap .round .adType a {
  background: #e2e2e2;
  border-radius: 10px;
  cursor: pointer;
  display: inline-block;
  height: 13px;
  margin-right: 7px;
  width: 13px;
  overflow: hidden;
}
.top_wrap .round .adType a.current {
  background: #ff2d5e;
}
</style>
