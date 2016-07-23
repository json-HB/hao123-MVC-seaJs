define(function (require) {
// 引入MVC模块
var MVC = require('MVC')

MVC
.addModel('skin', {
	// chooseSkinId: 'noSkin'
	// 表示当前选中的图片
	chooseSkinId: '05',
		"data": [
		{
			"id": "01",
			"src": "small_01.jpg",
			"title": "飞船"
		},
		{
			"id": "02",
			"src": "small_02.jpg",
			"title": "LOVE"
		},
		{
			"id": "03",
			"src": "small_03.jpg",
			"title": "kenny的海洋"
		},
		{
			"id": "04",
			"src": "small_04.jpg",
			"title": "匹诺曹"
		},
		{
			"id": "05",
			"src": "small_05.jpg",
			"title": "可爱萌宠"
		},
		{
			"id": "06",
			"src": "small_06.jpg",
			"title": "绿意盎然"
		},
		{
			"id": "07",
			"src": "small_07.jpg",
			"title": "高圆圆"
		},
		{
			"id": "08",
			"src": "small_08.jpg",
			"title": "约会ladycc"
		},
		{
			"id": "09",
			"src": "small_09.jpg",
			"title": "罗小黑战绩"
		},
		{
			"id": "10",
			"src": "small_10.jpg",
			"title": "艾米莉爱梦想"
		},
		{
			"id": "11",
			"src": "small_11.jpg",
			"title": "无知熊猫"
		},
		{
			"id": "12",
			"src": "small_12.jpg",
			"title": "牛轰轰四叶草"
		}
	]
})
.addView('skin', function (model, template) {
	// 第一步创建视图容器
	var dom = $('<div id="skin" class="skin"></div>');
	// 第二步获取数据
	var data = model.get('skin');
	// 第三步创建模板
	var tpl = [
		'<div class="skin-header"><div class="container">',
			'<span class="tabs">最新推荐</span>',
			'<span class="no-use-btn">不使用皮肤</span>',
			'<span class="save-btn">保存</span>',
			'<span class="cancel-btn">取消</span>',
		'</div></div>',
		'<div class="skin-content">',
			'<ul class="container">{#skinList#}</ul>',
		'</div>'
	].join('');
	var skinItem = '<li data-id="{#id#}"><img src="img/skin/{#src#}" alt="" /><p>{#title#}</p><i></i></li>';
	// 定义模板字符串
	var skinItemsHtml = '';
	// 格式化模板
	$.each(data.data, function (index, obj) {
		skinItemsHtml += template(skinItem, obj);
	})
	// 将视图插入到页面中
	var html = template(tpl, {
		skinList: skinItemsHtml
	});
	dom.html(html);
	dom.prependTo('body');
	// dom.html(template(tpl, {
	// 	skinList: skinItemsHtml
	// })).prependTo('body');
	return dom;
})
.addCtrl('skin', function (model, view, observer) {
	
	var dom=null;
	var skinId = model.get('skin.chooseSkinId');
	// 页面不存在我就要创建一个页面
	function init () {
				dom = view.create('skin')
				// 为页面中的元素绑定事件
				bindEvent();
				// 将视图显示出来
				showSkin();
		
	}

	// 为模块添加交互逻辑的
	function bindEvent () {
		dom.delegate('.save-btn', 'click', function () {
			observer.fire('closeSkinLayer')
		})
		.delegate('.cancel-btn', 'click', function () {
			// 我们点击取消按钮的时候，我们不能保存该图片，所以我们在closeSkinLayer传递数据notSaveSkin值是true
			observer.fire('closeSkinLayer', {
				notSaveSkin: true
			})
		})
		.delegate('.container li', 'click', function () {
			// 获取当前元素绑定的data-id属性
			var value = $(this).attr('data-id');
			// 缓存该id
			skinId = value;
			// 设置页面背景
			setBodyBg(value);
		})
		// 点击不使用皮肤按钮
		.delegate('.no-use-btn', 'click', function () {
			skinId = 'noSkin';
			setBodyBg(skinId)
		})
	}

	// 设置页面的背景的方法
	function setBodyBg (value) {
		if (value === 'noSkin') {
			$('body').css('background', '#fff');
		} else {
			$('body').css('background', 'url(img/skin/big_' + value + '.jpg) center top no-repeat')
		}
	}

	// 展示skin浮层
	function showSkin () {
		dom.slideDown();
	}
	// 关闭skin浮层
	function hideSkin () {
		dom.slideUp()
	}

	// 注册打开页面的消息
	observer.regist('openSkinLayer', function () {
		// init方法只能初始化一次，
		if(dom){
			showSkin();
		}else{
			init()
		}
			// dom不存在，说明没有被初始化，我们就要调用init方法初始化
			
		
	})
	// 订阅关闭浮层消息
	.regist('closeSkinLayer', function (data) {
		// 我们保存图片id是往哪保存？
		// 要往mode，skin.chooseSkinId保存，
		// 取消操作，不能保存图片的，只有点击保存按钮和换肤按钮才能保存

		// 该分支是点击取消按钮
		if (data && data.data && data.data.notSaveSkin) {
			// setBodyBg(model.get('skin.chooseSkinId'))

		//该分支表示点击保存或者换肤按钮
		} else {
			model.add('skin.chooseSkinId', skinId)
			// $.psot('url', {skin: skinid}, function)
			// setBodyBg(model.get('skin.chooseSkinId'))
		}

		setBodyBg(model.get('skin.chooseSkinId'))
		hideSkin();
	})

	// 渲染页面中的默认图片
	setBodyBg(model.get('skin.chooseSkinId'))
})
})
