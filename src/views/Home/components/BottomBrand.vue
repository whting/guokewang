<template>
  <div>
    <div class="intBrand w1200">
      <div class="tit">
        <h2>淘宝评价语</h2>
        <a href="/pingjia/" target="_blank">更多评价</a>
      </div>
    </div>
    <div id="ju_tags_search" class="w1200">
      <ul>
        <li v-for="i in 5" :key="i">
          <a href="/pingjia/pingyu/id/4452.html" target="_blank">实用的淘宝安瓶、原液评价语的集锦</a>
        </li>
      </ul>
    </div>
    <div>
      <div class="intBrand w1200">
        <div class="tit">
          <h2>降价商品</h2>
          <a href="/jiangjia/" target="_blank">更多降价直播</a>
        </div>
      </div>
      <div class="main sj_content clear" style="margin-top:10px" id="mainJiangjiaId">
        <div class="sj_price_list" total>
          <div class="list_title">
            <ul>
              <li class="tg_info" style="width:50%">
                今日部分降价商品信息
                <span></span>
              </li>
              <li class="tg_price" style="width:16%">当前价格</li>
              <li class="tg_zhe">降价折扣</li>
              <li class="tg_agoprice">历史之前价</li>
              <li class="tg_minprice">历史最低价</li>
            </ul>
          </div>
          <div class="list_content">
            <ul class="clear">
              <li v-for="i in 5" :key="i">
                <div class="lg lg_info" style="width:50%">
                  <div class="img">
                    <a href="/jiangjia/item/id/76278.html" target="_blank">
                      <img
                        src="/static/fefda4f094f11d31.jpg"
                        data-bimg="http://m.360buyimg.com/n1/jfs/t1/11043/40/7641/411710/5c62640cEd6614ee2/fefda4f094f11d31.jpg"
                        alt="361° 361度童鞋 女童跑鞋小童鞋 2019年春季新品网面印花休闲跑步鞋 碳黑/荧光贝玲粉 30+凑单品,降价幅度21.6%"
                        class="J_lazy lazy"
                        style="display: inline;"
                      />
                    </a>
                  </div>
                  <div class="title">
                    <a
                      href="/jiangjia/item/id/76278.html"
                      target="_blank"
                      title="361° 361度童鞋 女童跑鞋小童鞋 2019年春季新品网面印花休闲跑步鞋 碳黑/荧光贝玲粉 30+凑单品,降价幅度21.6%"
                    >361° 361度童鞋 女童跑鞋小童鞋 2019年春季新品网面印花休闲跑步鞋 碳黑/荧光贝玲粉 30+凑单品,降价幅度21.6%</a>
                  </div>
                  <div class="tag">
                    <div class="time">
                      时间：2019-07-23 15:43
                      <span class="de-mall-type mall-self2">京东自营</span>
                    </div>
                    <div class="sj_from_mall">
                      <a
                        href="/data/pub/jump.php?vid=76278"
                        rel="nofollow"
                        target="_blank"
                        class="go_buy zhe_010"
                      >去抢购</a>
                    </div>
                  </div>
                </div>
                <div class="lg lg_price" style="width:16%">109.0</div>
                <div class="lg lg_zhe">
                  <span class="zhe_8">
                    7.8
                    <i>折</i>
                  </span>
                </div>
                <div class="lg lg_agoprice">139.0</div>
                <div class="lg lg_minprice">109.0</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#mainJiangjiaId .sj_price_list .list_title li {
  width: 10%;
}

#mainJiangjiaId li .lg {
  width: 10%;
}

#mainJiangjiaId li .lg_info .title {
  width: 480px;
}
.sj_content {
  width: 1200px;
  margin: 0px auto;
}

.sj_content .sj_price_list {
  background-color: #ffffff;
  float: left;
  width: 100%;
  margin-bottom: 20px;
}

.sj_content .sj_price_list .list_title {
  line-height: 45px;
  float: left;
  height: 45px;
  width: 100%;
  color: #000000;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #f1f1f1;
  font-size: 14px;
  background-color: #ffffff;
}

.list_content li {
  float: left;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: #eaeaea;
  padding-top: 5px;
  padding-bottom: 5px;
}

.list_content li:hover {
  background-color: #fdf6f6;
}

.list_content li .lg {
  float: left;
  width: 8%;
  text-align: center;
  line-height: 50px;
  color: #333333;
  position: relative;
}

#mainJiangjiaId li .lg_info {
  width: 58%;
  text-align: left;
  padding-left: 10px;
}

.list_content li .lg_info .img {
  float: left;
  height: 60px;
  width: 60px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: center;
}

.list_content li .lg_info .img a {
  width: 60px;
  height: 60px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.list_content li .lg_info .img img {
  max-width: 60px;
  max-height: 60px;
  vertical-align: middle;
}

.list_content li .lg_info .title {
  float: left;
  line-height: 40px;
  color: #000000;
  width: 510px;
  font-size: 14px;
  margin-bottom: 5px;
  padding-top: 5px;
}

.list_content li .lg_info .title a {
  text-decoration: none;
  color: #333333;
  -webkit-transition: color 0.1s linear;
  -moz-transition: color 0.1s linear;
  -o-transition: color 0.1s linear;
  transition: color 0.1s linear;
  font-size: 14px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list_content li .lg_info .title a:hover {
  color: #ff3333;
}

.list_content li .lg_info .tag {
  float: left;
}

.list_content li .lg_info .tag .time {
  float: left;
  font-size: 12px;
  color: #666666;
  line-height: normal;
  margin-right: 20px;
}

.list_content li .lg_price {
  font-weight: bold;
  color: #ff0101;
  font-size: 14px;
}

.list_content li .lg_zhe span {
  font-size: 14px;
  height: 24px;
  line-height: 24px;
  width: 50px;
  text-align: center;
  margin: 0px auto;
  display: block;
  color: #ffffff;

  border-radius: 10px;
  padding-top: 2px;
  padding-right: 7px;
  padding-bottom: 2px;
  padding-left: 7px;
  margin-top: 11px;
}

.zhe_0 {
  background: none repeat scroll 0 0 #b00066;
  color: #ffffff;
}
.zhe_1 {
  background: none repeat scroll 0 0 #e80b00;
  color: #ffffff;
}
.zhe_2 {
  background: none repeat scroll 0 0 #ff7f33;
  color: #ffffff;
}
.zhe_3 {
  background: none repeat scroll 0 0 #a6d23e;
}
.zhe_4 {
  background: none repeat scroll 0 0 #3eccd4;
}
.zhe_5 {
  background: none repeat scroll 0 0 #8de3b9;
}
.zhe_6 {
  background: none repeat scroll 0 0 #bbd0ec;
}
.zhe_7 {
  background: none repeat scroll 0 0 #e2b0bf;
}
.zhe_8 {
  background: none repeat scroll 0 0 #ffd97b;
  color: #baba02;
}
.zhe_9 {
  background: none repeat scroll 0 0 #adadad;
}
.zhe_10 {
  background: none repeat scroll 0 0 #adadad;
}
.zhe_0 a,
.zhe_1 a,
.zhe_2 a,
.zhe_3 a {
  color: #ffffff !important;
}

.list_content li .lg_agoprice {
  color: #333333;
}

.list_content li .lg_minprice {
  color: #e64854;
}

.list_content li .lg_info .tag .sj_from_mall {
  float: left;
}

.list_content li .lg_info .tag .sj_from_mall {
  float: left;
}
.list_content li .lg_info .tag .de-mall-type {
  display: inline-block;
  border-radius: 2px;
  padding: 0 4px;
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  vertical-align: 2px;
  margin-left: 10px;
  position: relative;
}
.list_content li .lg_info .tag .de-mall-type:before {
  position: absolute;
  top: 6px;
  left: -4px;
  display: inline-block;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-top: 4px solid transparent;
  content: "";
}

.list_content li .lg_info .tag .mall-self2 {
  background: #da5254;
  position: relative;
  top: 2px;
}

.list_content li .lg_info .tag .mall-notself {
  background: #999999;
  position: relative;
  top: 2px;
}

.list_content li .lg_info .tag .mall-self1 {
  background: #fe7b40;
  position: relative;
  top: 2px;
}

.list_content li .lg_info .tag .mall-self3 {
  background: #fe7b40;
  position: relative;
  top: 2px;
}

.list_content li .lg_info .tag .mall-self-share {
  background: #ff69b4;
  position: relative;
  top: 2px;
}

.sj_content .sj_price_list .list_title li.tg_info {
  width: 58%;
  text-indent: 20px;
  text-align: center;
}

.sj_content .sj_price_list .list_title li {
  float: left;
  width: 8%;
  text-align: center;
  font-weight: bold;
  color: #333333;
}
.go_buy {
  color: #ffffff;
  font-size: 12px;
  background-color: #00bb9c;
  text-decoration: none;
  width: 55px;
  border-radius: 2px;
  -webkit-transition: background-color 0.2s linear;
  -moz-transition: background-color 0.2s linear;
  -o-transition: background-color 0.2s linear;
  transition: background-color 0.2s linear;
  line-height: 25px;
  display: block;
  text-align: center;
  height: 25px;
}
</style>
