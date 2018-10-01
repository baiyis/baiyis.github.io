
// 导航栏的滑块移动事件
// 获取滑块相对于ul的left和li的宽度
weizhi = $('#yiL_nav .collapse .nav .actscroll').css('left');
liWidth = $('#yiL_nav .collapse .nav li').width();
// 给ul添加鼠标移动事件
$('#yiL_nav .collapse .nav').mousemove(function(e){
	var $navX = $('#yiL_nav .collapse .nav').offset().left;
	var leftX = e.pageX - $navX;
	x = leftX - leftX%liWidth;
	$('#yiL_nav .collapse .nav .actscroll').css('left',x);
});
// 鼠标离开返回原来的位置
$('#yiL_nav .collapse .nav').mouseleave(function(e){
	$('#yiL_nav .collapse .nav .actscroll').css('left',weizhi);
});
