<template>
    <div id="toolbar">
      <div class="bar-con">
        <ul class="topNav fl">
          <li>
            <a href="/">网站首页</a>
          </li>
          <li></li>
          <li>
            <a href="/top/">销量排行榜</a>
          </li>
          <li></li>
          <li>
            <a href="http://wap.tool168.cn/" target="_blank">
              <em class="icon-normal icon-phone"></em>手机版
            </a>
          </li>
        </ul>
        <div class="right-show fr">
          <div class="union-login">|</div>
          <div class="login-show">
            <a href="/user/login.html">登录</a>
            <a href="/user/register.html">免费注册</a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
/*toolbar by huameiwangluo start*/
#toolbar{ background:#f6f6f6;height:36px;min-width: 1200px;}
#toolbar .bar-con{ margin:0 auto; line-height:34px;}
#toolbar .bar-con .topNav li{ float:left; display:inline; border-right:#e2e2e2 solid 1px;}
#toolbar .bar-con .topNav li.first{ border-left:#e2e2e2 solid 1px;}
#toolbar .bar-con .topNav li a{ display:block; float:left; padding:0 25px; color:#666;height:36px;}
#toolbar .bar-con .topNav li a.red{ color:#ee4e22;}
#toolbar .bar-con .topNav li a.active{background:#fff;color:#F8285C}
#toolbar .bar-con .topNav li a.active:hover{ text-decoration:none;}
#toolbar .bar-con .right-show div{ display:block; float:left; color:#e2e2e2;}
#toolbar .bar-con .right-show div a{ margin-left:10px; color:#333;}
#toolbar .bar-con .right-show div a .count{ width:12px; padding:0 3px; background:#ff3838; color:#fff; margin-left:2px;}
#toolbar .bar-con .right-show div.logined-show{ position:relative; z-index:12; height:36px;}
#toolbar .bar-con .right-show div.logined-show .normal-a{ display:block; margin-top:10px; line-height:normal; cursor:pointer;}
#toolbar .bar-con .right-show div.logined-show img{ margin-right:5px; float:left; display:inline; width:18px; height:18px; vertical-align:middle;}
#toolbar .bar-con .right-show div.logined-show a .user{ color:#ff3366; font-weight:bold; display:inline; float:left; max-width:64px;_width:64px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
#toolbar .bar-con .right-show div.logined-show a .cur{ display:inline; float:left; background:url(../assets/images/cur.gif) no-repeat; width:10px; height:5px;transition: all .4s;-webkit-transition: all .4s; -o-transition: all .4s; -moz-transition: all .4s; margin-left:2px; margin-top:6px;-webkit-backface-visibility:hidden;}
#toolbar .bar-con .right-show div.logined-show a:hover{ text-decoration:none;}
#toolbar .bar-con .right-show div.logined-show .normal-box{ position:absolute; top:35px; left:10px; width:200px; background:#fff; border:#f7dce0 solid 1px; width:92px; border-radius:5px; overflow:hidden; display:none; z-index:13;}
#toolbar .bar-con .right-show div.logined-show:hover .normal-box{display:block;}
#toolbar .bar-con .right-show div.hover .normal-box{ display:block;}
#toolbar .bar-con .right-show div.logined-show.hover a .cur{transform:rotate(180deg);-webkit-transform:rotate(180deg); -o-transform:rotate(180deg); -moz-transform:rotate(180deg);}
#toolbar .bar-con .right-show div.logined-show .login-box{ height:120px;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li{ height:30px; line-height:30px; border-bottom:#f7dce0 solid 1px;vertical-align:top;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a .icon{width:12px; height:14px; display:inline; margin:10px 5px 0 10px; float:left;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a span{ display:inline; float:left;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a .icon-01{ background-position:0 -49px;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a .icon-02{ background-position:0 -79px;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a .icon-03{ background-position:0 -108px;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a .icon-04{ background-position:0 -136px;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a{ display:block; margin-left:0; color:#ce003f;width:92px;height:30px; cursor:pointer;}
#toolbar .bar-con .right-show div.logined-show .normal-box ul li a:hover{ background:#fcf0f0; text-decoration:none;}
#toolbar .bar-con .right-show .personal-show a:hover{ text-decoration:none;}
#toolbar .bar-con .right-show .personal-show a:hover span{ text-decoration:underline;}
#toolbar .bar-con .right-show .logined-show img{ vertical-align:-5px; margin-right:5px;}
</style>
