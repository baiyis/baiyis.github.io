weizhi=$("#yiL_nav .collapse .nav .actscroll").css("left"),liWidth=$("#yiL_nav .collapse .nav li").width(),$("#yiL_nav .collapse .nav").mousemove(function(l){var a=$("#yiL_nav .collapse .nav").offset().left,e=l.pageX-a;x=e-e%liWidth,$("#yiL_nav .collapse .nav .actscroll").css("left",x)}),$("#yiL_nav .collapse .nav").mouseleave(function(l){$("#yiL_nav .collapse .nav .actscroll").css("left",weizhi)});