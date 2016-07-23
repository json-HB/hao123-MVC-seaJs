//slider 周杰伦的图片轮播
define(function(require){
	var MVC=require("MVC");
	var PicFade=require("tool/picFade");
	MVC.addModel("leftbannerv2",{
		data:[
			{
				src:"img/sliderPic/43ffb7f4bf24766ae03b2cdf92747582.jpg",
			},
			{
				src:"img/sliderPic/07232144.jpg",
			},
			{
				src:"img/sliderPic/e6eb92457630ed9a64b39e9f8a551082.jpg",
			}
		]
	})
	.addView("leftbannerv2",function(model,template){

		var dom=$('<div class="layout-content-slider" id="layout-content-slider">');
		var data=model.get("leftbannerv2");
		var tpl=[
				'<div class="leftbannerv2" id="leftbannerv2">',
				'<span class="left">&lt;</span>',
				'<span class="right">&gt;</span>',
				'<ul>{#litpl#}',
					// '<li>',
					// '<img src="h1/43ffb7f4bf24766ae03b2cdf92747582.jpg" alt="">',
					// '</li>',
					// '<li>',
					// 	'<img src="h1/07232144.jpg" alt="">',
					// '</li>',
					// '<li>',
					// 	'<img src="h1/e6eb92457630ed9a64b39e9f8a551082.jpg" alt="">',
					// '</li>',
				'</ul>'
		].join("")
		var html=lihtml="";
		var liTpl="<li><img src={#src#}></li>";
		$.each(data.data,function(index,value){
			lihtml+=template(liTpl,value);
		})

		html=template(tpl,{
			litpl:lihtml
		})
		dom.html(html).appendTo(".frame-body");
	
	})
	.addCtrl("leftbannerv2",function(model,view){
		var dom=view.create("leftbannerv2");
		PicFade("leftbannerv2",1000,2500);

	})

})
