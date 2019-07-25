<template>
  <center>
    <div class="bottom1">
      <div class="bottom_tp">
        <span>最新文章</span>
        <a class="kanmore" href="/article/" target="_blank">
          <b class="txt">查看更多</b>
        </a>
      </div>
      <div class="mains2">
        <div class="content_text" style="margin: auto 20px">
          <ul>
            <li v-for="i in 5" :key="i">
              <a href="/article/read/id/8881.html" target="_blank">四维彩超中的奥秘，你真的了解吗？</a>
              <span>2019-03-27</span>
            </li>
          </ul>
        </div>
        <div class="clr"></div>
      </div>
    </div>
  </center>
  <!--文章系统end-->
</template>
<script>
export default {};
</script>
<style scoped>
.bottom1 {
  width: 1200px;
  background: url(../../../assets/images/abg1.png) top repeat-x;
  padding-bottom: 10px;
  margin: auto 0;
}
.bottom_tp {
  width: 1200px;
  height: 50px;
}
.bottom_tp span {
  float: left;
  display: block;
  width: 633px;
  height: 30px;
  line-height: 30px;
  text-align: right;
  font-size: 16px;
  font-family: "宋体";
  margin-top: 5px;
  color: #666;
}
.bottom_tp a {
  float: right;
  display: block;
  line-height: 38px;
  padding-right: 20px;
  color: #000;
  margin-right: 20px;
}
.bottom1 ul {
  overflow: hidden;
}
.bottom1 ul li {
  float: left;
  width: 580px;
  margin-left: 0px;
  border-bottom: 1px dotted #ccc;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
}
.bottom1 ul li img {
  border: 1px solid #ccc;
}
.bottom1 ul li p {
  line-height: 20px;
}
.bottom1 ul li span {
  display: block;
  float: right;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 0 0px;
  text-align: center;
  width: 110px;
}
*html .bottom1 ul li span {
  line-height: 20px;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #bb0305;
}
.bottom1 ul li a.go {
  float: right;
  line-height: 25px;
  color: #2571bd;
  text-decoration: underline;
  padding-right: 10px;
}
.mains2 {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
.newpage2 {
  border-bottom: 1px dashed #cccccc;
  margin: 0 auto;
}
.news001 {
  border-bottom: 1px solid #ffffff;
  height: 30px;
}
.news001 a {
  color: #666666;
  display: block;
  float: left;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  width: 500px;
}
.news001 span {
  display: block;
  float: right;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  text-align: center;
  width: 250px;
}
.news002 {
  color: #999999;
  height: 65px;
  line-height: 20px;
  overflow: hidden;
  text-align: left;
  width: 980px;
}
img,
a,
ul,
li,
input,
textarea,
select {
  outline: medium none;
}
.content_text .page .pageNav {
  padding-top: 0px;
}
</style>
