<template>
    <div class="foot">
      <div class="white_bg">
        <div class="foot-con">
          <div class="con-box-n clear">
            <div class="app-side-box fl">
              <p class="app-show">
                <img src="~@/assets/images/592c26206f909.jpg" />
              </p>
              <p class="app-txt">扫描二维码打开</p>
            </div>
            <div class="con-left-info fl">
              <dl class="update">
                <dt>关于我们</dt>
                <dd v-for="i in 5" :key="i">
                  <a href="/help/read/id/1.html" target="_blank" rel="nofollow">
                    <i></i>关于我们
                  </a>
                </dd>
              </dl>
              <dl class="cooperation">
                <dt>用户中心</dt>
                <dd v-for="i in 5" :key="i">
                  <a href="/user/like.html" target="_blank" rel="nofollow">
                    <i></i>我的收藏
                  </a>
                </dd>
              </dl>
              <dl class="help-info" style="width:160px">
                <dt>网站导航</dt>
                <dd v-for="i in 5" :key="i">
                  <a href="/pingjia/daquan/" target="_blank">淘宝好评大全</a>
                </dd>
              </dl>
            </div>
          </div>
          <p class="ft-company">
            过客网&nbsp;&nbsp;
            <a href="http://www.miibeian.gov.cn/" target="_blank">浙ICP备17015408号</a> Copyright © 2010 - 2016 http://www.tool168.cn All Rights Reserved
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/*foot by HuaMeiwangluo start*/
.foot{
    width:100%;
	min-width:1200px;
	position:relative;
	_position: static;
	margin:0 auto;
	margin-top:40px;
	background:#f9f9f9;
	border-top:#ce003f solid 1px;
	clear:both;
}
.foot .white_bg{border-top:#f8285c solid 3px;}
.foot .links{
	height:20px;
	overflow:hidden;
	padding:10px 0px;
	border-bottom:1px dotted #ccc;
	color:#999999;
	white-space:nowrap;
	overflow:hidden;
	margin:0 auto;
}
.foot .links span{
	display:block;
	overflow:hidden;
	float:left;
}
.foot .links .links_list_box{
	float: left;
	width:760px;
    height: 20px;
	position:relative;
	overflow:hidden;
}
.foot .links .links_list_box a {margin-left:10px; float:left; margin-bottom:10px;}
.foot .links .links_list{
	overflow:hidden;
	white-space:nowrap;
	overflow:hidden;
	position:relative;
}
.foot .links .links_list li{
	height:20px;
	white-space:nowrap;
	overflow:hidden;
	position:relative;
	margin-bottom:5px;
}
.foot .links .more{
	float:right;
	color: #999999;
}
.foot .links a.more:hover{

	color: #0289cd;
}

.foot .links a{
	color:#999999;
}
.foot .links .links_list li a{
	margin-right:10px;
}
.foot .links .links_list li a:hover{text-decoration:underline;}
.foot .logo{
	color:#999999;
	text-align:center;
	padding-top: 10px;
}
.foot .logo img{
	margin-right:27px;
}
.foot .logo .no{ border:none;}
.foot-con{ width: 880px; padding:0 50px;margin: 0 auto;padding-bottom: 30px;}
.con-box-n{ padding-top: 25px;margin:0 auto;}
.con-left-info{ padding-left:65px;width:auto;overflow:hidden;}
.con-left-info dl{ float: left;display: inline;width:150px;}
.con-left-info dt{  font-size: 14px; color: #333; font-weight: bold; margin-bottom: 10px;padding-left: 7px;}
.con-left-info dd{ margin-bottom: 5px; color: #666;}
.con-left-info dl a{ color: #666;}
.con-left-info dl .revEmail{ padding-left: 10px; line-height: 28px;}
.con-left-info dd i{width: 4px;  height: 4px; overflow:hidden;border-radius: 50%; background: #c6c6c6; display: inline-block; margin-right: 5px;float:left;margin-top:8px;}
.con-left-info .help-info{width:140px;}
.con-left-info .help-info dd{margin-left: 8px}

.con-menu{  margin-top: 35px;}
.con-menu a{display: block; width: 86px; height: 35px;}
.con-menu .service-add{  background-position: 0 -5px;}
.con-menu .service-add:hover{ background-position: 0 -52px;}
.con-menu .service-time{ padding-left:10px;width:65px;}
.con-menu .service-time p{ color: #919191; line-height: 18px;}

.foot-con .ft-company{ text-align: center; padding-top: 20px; color: #c6c6c6;}
.foot-con .ft-company a{ color: #c6c6c6; }
.foot-con .ft-company a:hover{ text-decoration: underline;}
.foot-con .app-side-box{width:90px;}
.foot-con .app-side-box .app-txt{font-size:12px;margin:10px 0;}
</style>
