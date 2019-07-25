<template>
  <div class="new-users clear">
    <ul class="fl">
      <li>
        <i class="f"></i>
        <span>淘宝天猫特卖1折起</span>
      </li>
      <li>
        <i class="s"></i>
        <span>全场9.9元包邮</span>
      </li>
      <li>
        <i class="t"></i>
        <span>100%验货质检</span>
      </li>
    </ul>
    <div class="update-time fr">
      <div class="txt fl">
        每天 10:00 上新
        <br />
        <span>距下次更新还有</span>
      </div>
      <div class="times ml15 fl" id="end_date_0" data-time="1563933600">
        <span class="hours">
          <em>16</em>
          <i>小时</i>
        </span>
        <span class="minutes">
          <em>48</em>
          <i>分</i>
        </span>
        <span class="seconds">
          <em>24</em>
          <i>秒</i>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/*new-users by HuaMeiwangluo start*/
.new-users ul li {
  display: inline;
  float: left;
  font-size: 16px;
  font-family: "微软雅黑", "宋体";
  margin-left: 25px;
  line-height: 42px;
}
.new-users ul li i {
  display: inline;
  float: left;
  width: 42px;
  height: 42px;
  margin-right: 10px;
}
.new-users ul li i.f {
  background-position: right -103px;
}
.new-users ul li i.s {
  background-position: right -146px;
}
.new-users ul li i.t {
  background-position: right -189px;
}
.new-users ul li span {
  display: inline;
  float: left;
  color: #333;
}
.new-users ul.only {
  margin-left: 200px;
}
.new-users .update-time {
  height: 38px;
  font-family: "微软雅黑", "宋体";
  margin-right: 20px;
}
.new-users .update-time .txt {
  line-height: 20px;
  text-align: right;
  color: #333;
  font-size: 18px;
  width: 130px;
  height: 38px;
}
.new-users .update-time .txt span {
  font-size: 14px;
  color: #666;
}
.new-users .update-time .times span em {
  display: inline-block;
  height: 38px;
  width: 30px;
  text-align: center;
  background: #ff517d;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 38px;
  font-size: 20px;
}
.new-users .update-time .times span i {
  font-size: 14px;
  color: #666;
  margin: 0 10px;
}
/*new-users by HuaMeiwangluo end*/
.w1200 .new-users {
  width: 1180px;
  margin: 30px auto;
}
.w1200 .new-users ul li {
  margin-left: 60px;
}
.w1200 .new-users .update-time {
  margin-right: 35px;
}
</style>
