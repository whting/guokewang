<template>
    <div class="page">
        <em></em>
        <div>
        <span class="pg-prev">上一页</span>
        <span>1</span>
        <a href>&nbsp;2&nbsp;</a>
        <a href>&nbsp;3&nbsp;</a>
        <a href>&nbsp;4&nbsp;</a>
        <a href>&nbsp;5&nbsp;</a>
        <i>...</i>
        <a href>125</a>
        <a href class="pg-next">
            下一页
            <em></em>
        </a>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.page {
    padding: 0 0 45px;
	padding-top:30px;
    clear: both;
    overflow: hidden;
    text-align: center;
}
.page div{margin: 0 auto;}

.page a,.page span,.page i{
	display:inline-block;
	/*float:left;*/
	background: none repeat scroll 0 0 #FFF;
	margin-left:1px;
    padding:10px 15px;
    overflow: hidden;
    color:#919191;
	font-size:14px;
	font-weight:bold;
	border-right:none;
	-moz-box-shadow: 1px 1px 0px rgba(204, 204, 204, 0.7);
	-webkit-box-shadow: 1px 1px 0px rgba(204, 204, 204, 0.7);
	box-shadow: 1px 1px 0px rgba(204, 204, 204, 0.7);
}
.page a.pg-next{width:60px; border-radius:0 20px 20px 0;box-shadow:1px 1px 3px rgba(204, 204, 204, 0.7);}
.page a.pg-next:hover{cursor:pointer;}
.page span.pg-prev{color:#bbb; font-weight:normal; background:#fff;width:60px; border-radius: 20px 0 0 20px;box-shadow:1px 1px 3px rgba(204, 204, 204, 0.7);}
.page span.pg-next{width:60px; border-radius:0 20px 20px 0;box-shadow: 2px 2px 3px #D0D0CD; background:#fff;  color:#bbb; font-weight:normal;}
.page a.pg-prev{background:#FFFFFF;width:60px; border-radius: 20px 0 0 20px;box-shadow: 2px 2px 3px #D0D0CD;}
.page span {
    background: #ff3366;
	border: medium none;
	color: #fff;
	font-weight: bold;
}

.page a:hover{
	text-decoration:none;
	color:#fff;
	background:#ff3366;
}

.page i{
    color: #919191
}
</style>
