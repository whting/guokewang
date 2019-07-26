<template>
  <div id="J_sidebar" class="side_right">
    <div class="side-box">
      <ul class="side-oper">
        <li class="normal side-user" :class="[tipsVisible.login?'curr':'']" @mouseenter="toggleTips('login', true)" @mouseleave="toggleTips('login', false)">
          <a class="links" id="J_user" target="_blank" href="/user/">
            <i class="normal-icon i-user"></i>
          </a>
          <transition name="slide-left">
            <div
              v-show="tipsVisible.login"
              id="side-login"
              class="tab-tips tab-login"
            >
              <div class="user-box">
                <div class="pic">
                  <img src="/data/upload/avatar/default_64.jpg" />
                </div>
                <p class="txt">
                  快来
                  <a target="_blank" href="/user/login.html">登录</a>吧，么么哒！
                </p>
              </div>
              <i class="close">×</i>
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
        <li class="normal side-cart">
          <a class="links links-cart" id="J_cart" href="javascript:;">
            <i class="normal-icon i-cart"></i>
            <em class="num cartnum">0</em>
          </a>
        </li>
        <li class="normal side-love" :class="[tipsVisible.collection?'curr':'']" @mouseenter="toggleTips('collection', true)" @mouseleave="toggleTips('collection', false)">
          <a class="links" id="J_love" target="_blank" href="/user/like.html">
            <i class="normal-icon i-love"></i>
          </a>
          <transition name="slide-left">
            <div class="tab-tips" v-show="tipsVisible.collection">
              我的收藏
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
        <li class="normal side-quan" :class="[tipsVisible.gift?'curr':'']" @mouseenter="toggleTips('gift', true)" @mouseleave="toggleTips('gift', false)">
          <a class="links" id="J_quan" target="_blank" href="/user/gift.html">
            <i class="normal-icon i-quan"></i>
          </a>
          <transition name="slide-left">
            <div class="tab-tips" v-show="tipsVisible.gift">
              我的礼品
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
      </ul>
      <ul class="side-oper other">
        <li class="normal side-complain" :class="[tipsVisible.suggestion?'curr':'']" @mouseenter="toggleTips('suggestion', true)" @mouseleave="toggleTips('suggestion', false)">
          <a class="links" id="J_complain" target="_blank" href="/user/msg/do/send.html">
            <i class="normal-icon i-complain"></i>
          </a>
          <transition name="slide-left">
            <div class="tab-tips" v-show="tipsVisible.suggestion">
              意见反馈
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
        <li class="normal side-code" :class="[tipsVisible.qrcode?'curr':'']" @mouseenter="toggleTips('qrcode', true)" @mouseleave="toggleTips('qrcode', false)">
          <a class="links" id="J_code" href="javascript:;">
            <i class="normal-icon i-code"></i>
          </a>
          <transition name="slide-left">
            <div class="tab-tips" v-show="tipsVisible.qrcode">
              <div class="code-box">
                <p class="code">
                  <img src="~@/assets/images/592c26206f909.jpg" width="90px" />
                </p>
                <p class="txt">扫描下载二维码</p>
              </div>
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
        <li class="normal side-backtop" :class="[tipsVisible.gotop?'curr':'']" @mouseenter="toggleTips('gotop', true)" @mouseleave="toggleTips('gotop', false)">
          <a class="links" id="J_backtop" href="javascript:;">
            <i class="normal-icon i-backtop"></i>
          </a>
          <transition name="slide-left">
            <div class="tab-tips" v-show="tipsVisible.gotop">
              返回顶部
              <div class="arr-icon">◆</div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tipsVisible: {
        login: false,
        collection: false,
        gift: false,
        suggestion: false,
        qrcode: false,
        gotop: false,
      },  // 提示框的显示状态
    };
  },
  methods: {
    // 切换提示框的显示隐藏
    toggleTips(field, visible) {
      this.tipsVisible[field] = !!visible;
    },
  }
}
</script>
<style lang="css" scoped>
.side_right{
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    width: 36px;
    z-index: 102;
	background-color:#444;
	_display:none;}
.side_right .side-box {
background:#444;
    height: 100%;
    position: relative;
    z-index: 101;
	color:#fff;
}
.side_right .side-oper{position:absolute;top:150px;}
.side_right .side-oper.other{position:absolute;bottom:0;top:auto;}
.side_right .side-oper li.normal{margin-top:15px;position:relative;}
.side_right .side-oper li.normal.side-backtop{height:36px;}
.side_right .side-oper li.normal.side-user{margin-top:0;}
.side_right .side-oper li.normal.side-cart{border-top:#222 solid 1px;border-bottom:#222 solid 1px;}
.side_right .side-oper li.normal.side-cart .tab-login{display:none;}
.side_right .side-oper li.normal.side-cart.selected .tab-login{display:block;}
.side_right .side-oper li.normal.side-cart #side-empty{padding:10px 0 25px;z-index:5;}
.side_right .side-oper li.normal.side-cart #side-empty .arr-icon{top:50%;margin-top:-8px;}
.side_right .side-oper li.normal a.links{width:36px;padding:9px 0;display:block;cursor:pointer;}
.side_right .side-oper li.normal a.links.links-cart{border-top:#555 solid 1px;border-bottom:#555 solid 1px;}
.side_right i.normal-icon{display:block;background:url(../assets/images/sidebar/sidebar.png) no-repeat;}
.side_right i.normal-icon.i-user{background-position:0 0;width:18px;height:18px;margin-left:9px;}
.side_right i.normal-icon.i-cart{height:77px;width:18px;background-position:1px -24px;margin:0 0 0 9px;}
.side_right i.normal-icon.i-love{width:18px;height:18px;background-position:0 -110px;margin:0 0 0 9px;}
.side_right i.normal-icon.i-quan{width:18px;height:18px;background-position:0 -134px;margin:0 0 0 9px;}
.side_right i.normal-icon.i-complain{width:18px;height:18px;background-position:0 -208px;margin:0 0 0 9px;}
.side_right i.normal-icon.i-code{width:18px;height:18px;background-position:0 -160px;margin:0 0 0 9px;}
.side_right i.normal-icon.i-backtop{width:18px;height:18px;background-position:0 -187px;margin:0 0 0 9px;}
.side_right .side-oper li.normal:hover  a.links{background-color:#f36;text-decoration:none;}
.side_right .side-oper li.normal:hover  a.links .i-user{background-position:-26px 0;}
.side_right .side-oper li.normal:hover  a.links .i-cart{background-position:-25px -24px;}
.side_right .side-oper li.normal:hover  a.links .i-love{background-position:-26px -110px;}
.side_right .side-oper li.normal:hover  a.links .i-quan{background-position:-26px -134px;}
.side_right .side-oper li.normal:hover  a.links .i-complain{background-position:-26px -208px;}
.side_right .side-oper li.normal:hover  a.links .i-code{background-position:-26px -160px;}
.side_right .side-oper li.normal:hover  a.links .i-backtop{background-position:-26px -187px;}
.side_right .side-oper li.normal:hover  a.links .num{background:#fff;color:#f36;}
.side_right .side-oper li.normal.curr a.links{background-color:#f36;}
.side_right .side-oper li.normal.curr a.links .i-user{background-position:-26px 0;}
.side_right .side-oper li.normal.curr a.links .i-cart{background-position:-25px -24px;}
.side_right .side-oper li.normal.curr a.links .i-love{background-position:-26px -110px;}
.side_right .side-oper li.normal.curr a.links .i-quan{background-position:-26px -134px;}
.side_right .side-oper li.normal.curr a.links .i-complain{background-position:-26px -208px;}
.side_right .side-oper li.normal.curr a.links .i-code{background-position:-26px -160px;}
.side_right .side-oper li.normal.curr a.links .i-backtop{background-position:-26px -187px;}
.side_right .side-oper li.normal.curr a.links .num{background:#fff;color:#f36;}
.side_right .side-ad .tab-tips{ background:none; border:none; bottom:0px; top:-139px;  box-shadow:none; position: absolute; margin-right:40px;}
.side_right .side-oper  li.normal.curr a.links_ad,.side_right .side-oper li.normal:hover  a.links_ad{background:none important;}
.side_right .side-oper em.num {
    background:#f36;
    border-radius: 15px;
    color: #fff;
    display: block;
    font-family: "宋体";
    height: 18px;
    line-height: 18px;
	width:18px;
    text-align: center;
	margin:5px 0 0 9px;
}
.side_right .tab-tips {
    background-color: #444;
    box-shadow:0 0 4px rgba(0, 0, 0, 0.3);
    color: #fff;
    height: 36px;
    line-height: 36px;
    position: absolute;
    right: 36px;
    text-align: center;
    top: 0;
    width: 90px;
	border-radius:2px;
}
.side_right .tab-tag{top:40px;}
.side_right .tab-tips a {
    color: #ffffff;
    text-decoration: none;
}
.side_right .tab-tips a em{font-size:14px;font-family:"arial";}
.side_right .arr-icon {
    color: #444;
    font-family: "宋体";
    font-size: 16px;
    height: 16px;
    line-height: 16px;
    position: absolute;
    right: -6px;
    text-align: center;
    top: 14px;
    width: 16px;
}
.side_right .side-oper li.normal.side-code .tab-tips{top:auto;bottom:-46px;background-color:#fff;border:#e2e2e2 solid 1px;padding:5px;width:90px;height:115px;}
.side_right .side-oper li.normal.side-code .tab-tips .code-box{position:absolute;top:5px;left:5px;width:120px;width:90px;z-index:5;}
.side_right .side-oper li.normal.side-code .tab-tips .code{height:90px;width:90px;}
.side_right .side-oper li.normal.side-code .tab-tips .txt{color:#666;line-height:30px;}
.side_right .side-oper li.normal.side-code .tab-tips .arr-icon{color:#fff;top:55px;}
.side_right .side-oper li.normal .tab-login{  line-height: 36px;
    position: absolute;
    right: 36px;
    text-align: center;
    top: 0;  border-radius: 2px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    color: #fff;
    background:#fff;
    width:220px;
    height:106px;
    padding:20px 0;
    z-index:10;
  }
.side_right .side-oper li.normal .tab-login .arr-icon{color:#fff;}
.side_right .side-oper li.normal .tab-login a.head{display:block;width: 60px;height: 60px;margin: 0 auto 10px;}
.side_right .side-oper li.normal .tab-login .pic{border:#eee solid 2px;border-radius:50%;width:60px;height:60px;margin:0 auto 10px;}
.side_right .side-oper li.normal .tab-login .pic img{border-radius:50%;}
.side_right .side-oper li.normal .tab-login .txt{color:#333;background:#fff3f5;border-top:#ffd8d8 solid 1px;border-bottom:#ffd8d8 solid 1px;height:30px;line-height:30px;}
.side_right .side-oper li.normal .tab-login .txt a{color:#f36;}
.side_right .side-oper li.normal .tab-login .txt a:hover{text-decoration:underline;}
.side_right .side-oper li.normal .tab-login .time{color:#333;line-height:20px;}
.side_right .side-oper li.normal .tab-login .time em{color:#f36;padding:0 2px;}
.side_right .side-oper li.normal .tab-login .go_pay{display:block;width:74px;height:30px;line-height:30px;background:#f36;margin:7px auto 0;color:#fff;font-size:14px;border-radius:2px;}
.side_right .side-oper li.normal .tab-login .go_pay:hover{background:#ff517d;text-decoration:none;}
.side_right .side-oper li.normal .tab-login .duang-pic{width:44px;height:40px;margin:0 auto;}
.side_right .close{color:#ccc;display:block;width:10px;height:10px;font-size:16px;line-height:10px;position:absolute;top:15px;right:10px;cursor:pointer;}
.side_right .close:hover{color:#f36;}


.slide-left-enter-active, .slide-left-leave-active {
  transition: all .4s ease;
}

.slide-left-enter-to {
  opacity: 1;
}
.slide-left-leave-to, .slide-left-enter {
  opacity: 0;
  transform: translateX(-26px);
}
</style>
