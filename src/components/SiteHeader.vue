<template>
    <div class="header">
      <div class="area">
        <div class="logo logo1">
          <div class="fl">
            <a class="juan-logo fl" href="/" title="过客网">
              <img src="~@/assets/images/5b61b3865d289.png" />
            </a>
          </div>
        </div>
        <div class="head-search head-search-bijia">
          <div class="panel">
            <form action="/" method="get">
              <input type="hidden" name="m" value="search" />
              <input type="hidden" name="a" value="index" />
              <div class="sInput" style="position: relative; z-index: 0;">
                <input
                  type="text"
                  name="k"
                  id="ksearchId"
                  class="skey"
                  style="width:575px;"
                  autocomplete="off"
                  placeholder="请输入想要优惠比较的商品名称"
                />
              </div>
              <div class="sBtn">
                <input type="submit" value="搜索" name="btnSearch" class="btnSearch" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mainNav">
        <div class="nav">
          <ul class="navigation fl">
            <li class="current first">
              <a href="/">
                所有分类
                <em class="cur"></em>
              </a>
            </li>
            <li>
              <em class="icon-fanli">
                <img src="~@/assets/images/hot.gif" />
              </em>
              <a href="/history/">历史价格查询</a>
            </li>
            <li>
              <a href="/jiangjia/">降价监控</a>
            </li>
            <li>
              <a href="/shijiu/">白菜价</a>
            </li>
            <li>
              <a href="/jiu/">九块邮</a>
            </li>
            <li>
              <a href="/brand/">品牌特卖</a>
            </li>
            <li>
              <a href="/article/">文章资讯</a>
            </li>
            <li>
              <a href="/yiyuan/">一元凑单</a>
            </li>
          </ul>
          <div class="state-show fr" style="display:none">
            <a class="normal-a" href="/gift/" target="_blank">积分商城</a>
            <span id="signinid">
              <a href="/#" class="sign_btn signin normal-a dosign">
                <em class="icon-normal icon-sign"></em>
                <em class="text">签到领积分</em>
              </a>
              <div class="normal-side-box">
                <div class="box-tips">
                  <p>登陆后 签到奖励</p>
                  <p>
                    首次签到可得：
                    <span>
                      <b>5</b> 积分
                    </span>
                  </p>
                  <p>
                    连续签到
                    <span>8</span> 天
                  </p>
                  <p>
                    每日递增
                    <span>5</span> 积分
                  </p>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/*header by huameiwangluo start*/
.header{background:#fff;width:100%;margin:0 auto;min-width: 1200px;}
.header .area{
	width:100%;position:relative; height:85px;  margin:0 auto;
}
.header .search .smt,.new-users ul li i{ display:block; background:url(../assets/images/header-total.gif) no-repeat;}
.header .logo,.header .search,.header .protection{position:absolute;}
.header .logo{ left:-10px;width:231px; height:52px;}
.header .logo.other{height:54px;width:240px;top:20px;}
.header .logo.juan-brand{background-position:-78px -104px;}
.header .logo.juan-iphone{background-position:-78px -161px;}
.header .logo.juan-user{background-position:-78px -217px;}
.header .logo.juan-jf{background-position:-78px -274px;}
.header .logo.juan-fanli{background-position:-78px -334px;}
.header .logo div .juan-txt{height:50px; width:70px;}
.header .logo .go-old{position:relative;height:39px;width:40px;margin:2px 0 0 10px;}
.header .logo .go-old a{display:block;position:absolute;bottom:0;left:0;width:40px;height:12px;}
.header .logo .juan-logo{

    overflow: hidden;

}
.header .logo .juan-other-logo {
    height:0;
    width: 70px;
	padding-top:35px;
	overflow:hidden;
}
.header .logo .other-logo {
    height: 0;
    margin-left: 14px;
    overflow: hidden;
    padding-top: 34px;
    width: 89px;
}
/* about mac retina*/
.header .logo.juan-logo01{  width:165px; height: 45px; background-size: cover;padding: 0; text-indent: -999px;}
.header .logo.juan-logo01 .go-old{ position: absolute; left: 165px;}
.header .logo.juan-user01{ background-size: cover; height: 55px;}
.header .logo.juan-fanli01{ background-size: cover; height: 55px;}
.header .logo.juan-jifen01{ background-size: cover; height: 55px;}
.header .logo.juan-iphone01{ background-size: cover;height: 55px;}
.header .logo.juan-brand01{ background-size: cover;height: 55px;}
/*this is protection*/
.header .protection{background-position:0 0; height:32px; width:465px; top:28px; right:270px;}
.header .protection a{ display:block; float:left; height:16px; width:98px; margin:0 0px 0 34px;}
.header .protection a.lowest{ margin-left:75px;width:85px;}
.header .protection a.check{ margin-left:75px;width:85px;}
.header .protection01{background-size: cover;height: 33px;}
/*this is protection*/
.header .protection{background-position:0 0; height:39px; width:465px; top:28px; right:270px;}
.header .protection a{ display:block; float:left; height:16px; width:98px; margin:0 0px 0 34px;}
.header .protection a.lowest{ margin-left:75px;width:85px;}
.header .protection a.check{ margin-left:75px;width:85px;}
.header .protection01{background-size: cover;height: 30px;}
/*this is search*/
.header .search{top:25px; right:0; width:237px; height:35px;}
.header .search .search-area{ display:block; width:200px; height:35px; background:#efefef;}
.header .search .txt{ border:0 none; outline:0 none; background:#efefef; width:190px; height:30px; line-height:30px; margin:2px 0 0 10px; color:#d4d4d4;}
.header .search .smt{ background-position:right -65px; border:0 none; cursor:pointer; height:35px; width:37px;}
/*jky-login by huameiwangluo*/

/*mainNav by huameiwangluo start*/
.header .mainNav{ width:100%; height:38px; border-bottom: 2px solid #ff3366;min-width: 1200px;}
.header .mainNav .nav{  height:38px; margin:0 auto;}
.header .mainNav .nav .navigation li{ float:left; display:inline; height:38px;position:relative; z-index:11;}
.header .mainNav .nav .navigation li.fanli{background:#fff}
.header .mainNav .nav .navigation li.fanli a{color:#f8285c}
.header .mainNav .nav .navigation li a .cur{ background:url(../assets/images/cur.gif) no-repeat; width:7px; height:4px; display:inline-block; margin-left:3px;
vertical-align:3px;_vertical-align:-6px;
transition: all .4s;-webkit-transition: all .4s; -o-transition: all .4s; -moz-transition: all .4s;-webkit-backface-visibility:hidden;}
.header .mainNav .nav .navigation li .all-classify{ display:none; position:absolute; top:39px; left:0; width:102px; background:#f8f9f5; border:#f8285c solid 1px;box-shadow:3px 0px 5px rgba(145,145,145,0.4);}
.header .mainNav .nav .navigation li.open a .cur{
transform:rotate(180deg);-webkit-transform:rotate(180deg); -o-transform:rotate(180deg); -moz-transform:rotate(180deg);}
.header .mainNav .nav .navigation li.open .all-classify{ display:block;}
.header .mainNav .nav .navigation li .all-classify dd{ height:36px;line-height:36px; border-bottom:#e2e2e2 solid 1px; border-top:#fff solid 1px;}
.header .mainNav .nav .navigation li .all-classify dd a{ color:#777; padding:0; width:102px; height:36px;}
.header .mainNav .nav .navigation li .all-classify dd i,.header .mainNav .nav .navigation li .all-classify dd span{ display:inline; float:left;}
.header .mainNav .nav .navigation li .all-classify dd i{ width:22px; height:22px; margin:10px 10px 0 20px;}
.header .mainNav .nav .navigation li .all-classify dd i.nvzhuang{ background-position:0 -312px;}
.header .mainNav .nav .navigation li .all-classify dd i.nanzhuang{ background-position:0 0;}
.header .mainNav .nav .navigation li .all-classify dd i.xiebaopeishi{ background-position:0 -40px;}
.header .mainNav .nav .navigation li .all-classify dd i.muying{ background-position:0 -76px; margin-top:6px;}
.header .mainNav .nav .navigation li .all-classify dd i.jujia{ background-position:0 -117px;}
.header .mainNav .nav .navigation li .all-classify dd i.meizhuang{ background-position:0 -158px;}
.header .mainNav .nav .navigation li .all-classify dd i.shuma{ background-position:0 -198px;}
.header .mainNav .nav .navigation li .all-classify dd i.meishi{ background-position:0 -238px}
.header .mainNav .nav .navigation li .all-classify dd i.wenti{ background-position:0 -275px; margin-top:7px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover{ font-weight:bold; background:#fff;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .nvzhuang{ background-position:-38px -312px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .nanzhuang{ background-position:-38px 0;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .xiebaopeishi{ background-position:-38px -40px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .muying{ background-position:-38px -76px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .jujia{ background-position:-38px -117px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .meizhuang{ background-position:-38px -158px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .shuma{ background-position:-38px -198px;}
.header .mainNav .nav .navigation li .all-classify dd a:hover .meishi{ background-position:-38px -238px}
.header .mainNav .nav .navigation li .all-classify dd a:hover .wenti{ background-position:-38px -275px;}
.header .mainNav .nav .navigation li a{ float:left;cursor:pointer; padding:10px 24px 0; color:#333; font-size:14px; height:30px;}
.header .mainNav .nav .navigation li.last{ background:none;}
.header .mainNav .nav .navigation li.current{background:#f8285c;-webkit-border-radius: 6px 6px 0 0;-moz-border-radius: 6px 6px 0 0;border-radius: 6px 6px 0 0;}
.header .mainNav .nav .navigation li.first a {width: 152px;text-align: center;}
.header .mainNav .nav .navigation li.current a {color: #fff;}
.header .mainNav .nav .navigation li.first {width: 200px;}
.header .mainNav .nav .navigation li.current a:hover{ text-decoration:none;}
.header .mainNav .nav .navigation li a:hover{text-decoration:underline;}

.header .state-show{ line-height:38px; position:relative; z-index:100;}
.header .state-show .normal-a{ font-size:14px; color:#333;height:38px;float:left; display:inline; padding:0 15px;}
.header .state-show .on{background: #f8285c;}
.header .state-show .normal-side-box{ top:39px; right:0;}
.header .state-show  #signinid:hover .normal-side-box{display:block;}
.icon-normal{background-position:0 0;display:inline-block; vertical-align:-3px; margin-right:3px;}
.icon-sign{ background-position: -84px -38px; width:16px; height:16px; float:left; margin-top:13px; _margin-top:11px;}
.icon-phone{ background:url(../assets/images/icon-phone.gif) no-repeat;height:35px; width:12px; float:left;}
.icon-advance{ background-position:right top; width:15px; height:16px; float:left;margin-top:3px;}
.icon-fanli {float:left;width:0;top:-10px;position:relative;}
.icon-bag{background-position:0 -156px;width:16px;height:18px;float:left;margin:8px 11px 0 12px;}
.icon-bag-empty{background-position:0 -182px;width:25px;height:36px;float:left;margin-right:5px;}
.icon-clock{width:14px;height:14px;background-position:right -20px;}

.navigation .code-tips {
    display: none;
    position: absolute;
    left: -28px;
    top: 36px;
    background-color: #fff;
    border: #e2e2e2 solid 1px;
    padding: 5px;
    width: 148px;
    height: 173px;
    z-index: 100;
}
.navigation .code-tips .code {
    height: 148px;
    width: 148px;
}
.header .mainNav .nav .navigation li a #new-phone {
    margin-top: 3px;
}
#new-phone {
    margin-top: 12px;
    height: 16px;
}
#new-qcodes {
    top: 40px;
}
</style>
