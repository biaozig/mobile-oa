		$(document).ready(function () {
			;(function () {
//				导航
				$('section.to-nav').on('click',function(){
					$('section.zhezhao.fn-hide').removeClass('fn-hide');
					$('nav.nav.fn-hide').removeClass('fn-hide');
				});
				$('section.zhezhao.fn-hide').on('click',function(){
					$(this).addClass('fn-hide');
					$('nav.nav').addClass('fn-hide');
				});
//  			start 筛选
				$('.layer-screening').height($(window).height());

				$('#sider_open').on('click',function(){
					$('.layer-shadow.fn-hide').addClass('shadowopen');
					$('.layer-screening').addClass('screenopen');
				});
				$('.layer-shadow').on('click', function () {
					$('.layer-shadow.fn-hide').removeClass('shadowopen');
					$('.layer-screening').removeClass('screenopen');
				});

				$('.J-project-type li').on('click',function(){
					var n = $(this).index();
					$('.J-project-type li').removeClass('current')
					$(this).addClass('current');
					$('.sidebar ul.screening-conditions').addClass('fn-hide');
					$('.sidebar ul.screening-conditions').eq(n).removeClass('fn-hide');
				});
				var bOk = false;
				$('.sidebar ul.screening-conditions li.menu').find('em').on('click',function(){
					bOk = !bOk;
					if(bOk){
						$(this).parent().next('ul.sidebar-list').show();
						$(this).parent().find('em i').css(
								{
									'transition':'.3s all ease',
									'transform':'rotate(135deg)'
								}
						);
					}else{
						$(this).parent().next('ul.sidebar-list').hide();
						$(this).parent().find('em i').css(
								{
									'transition':'.3s all ease',
									'transform':'rotate(225deg)'
								}
						);
					}
				});
//				单选
				$('.sidebar ul.screening-conditions li ul li').on('click', function () {
					if($(this).children('em').is(':hidden')){
						$(this).children('em').show();
					}else{
						$(this).children('em').hide();
					}
				});
//				全选/全不选 - 当前项
				var bF = false;
				$('.sidebar ul.screening-conditions li.menu').find('span').on('click',function(){
					bF = !bF;
					if(bF){
						$(this).parent().next('ul').find('li em').show();
					}else{
						$(this).parent().next('ul').find('li em').hide();
					}
				});
//				清空全部选中
				$('.J-filter-clear').on('click',function(){
					$('.sidebar ul.screening-conditions li ul li').children('em').hide();
				});
				$('#btn_filter_ok').on('click',function(){
					$('.layer-shadow.fn-hide.shadowopen').removeClass('shadowopen');
					$('.layer-screening.screenopen').removeClass('screenopen');
				});
			})();
			<!--end 筛选 -->
//
			;(function () {
				$('section.part-main .tabmenu-list-3 ul li').on('click',function(){
					$('section.part-main .tabmenu-list-3 ul li').removeClass('active');
					$(this).addClass('active');
				})
			})();
		});