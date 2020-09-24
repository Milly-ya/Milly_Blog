$().ready(function(){
	$(window).scroll(function(){
		var top=$("#nav_logo").offset().top;  //根据id获取指定位置
		var scrollTop=$(window).scrollTop();
		if(scrollTop>top){
			$(".navbar").addClass("active");
		}else{
			$(".navbar").removeClass("active");
		}
	})
})