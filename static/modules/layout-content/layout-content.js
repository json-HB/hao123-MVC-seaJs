//导航网址大全模块
define(function(require){
	var MVC=require("MVC");
	require("m/layout-content/layout-content.css");
	var movePic=require("movePic");
	MVC.addModel("layoutContent",{
		picModel:[
		{item:{
			title:"审核",
				id:"lunbo1",
			tooltip1:"超市挖百具尸骨工作人员吓惨",
			tooltip2:"小伙带女孩过夜见其父亲跳楼",
			url:[
				{src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-03-08/62da73768a8159575e172c886714e875.jpg",tip:"惊爆价9.9包邮买好货"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10514842_1469180912419.jpg",tip:"膜法9周年庆，面膜底价抢"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_20099142_1467790890938.jpg",tip:"299治打鼾,5w用户口碑推荐"},
			]
		}
		},
		{
		item:{
			title:"财经",
			tooltip1:"岳云鹏与杨洋PK颜值 暴露缺陷",
			tooltip2:"向太抛犀利言论暗讽星爷老梗",
			id:"lunbo2",
			url:[
				{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-06-27/4954ccb0ff594c9e6c04d4f8fec7dd4c.jpg",tip:"坐家赚钱年终奖放这靠谱"},
				{src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2015-08-26/f449a1f10738a86fb1c435f6b4eaaa40.jpg",tip:"炒股初学者都要看什么书"},
				{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-01-15/daa311835335c49a3b2339f22dd36956.png",tip:"这么理财比放银行赚钱"},
			]
		}
		},
		{
				item:{
			title:"热门",
			tooltip1:"绅士国王在女儿房间装摄像头",
			tooltip2:"曝:林志颖是爱打擦边球的boy",
				id:"lunbo3",
			url:[
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21079580_1467095195703.jpg",tip:"女主播们的日常"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21326881_1469162842591.jpg",tip:"23岁征婚，父母催，带我走"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21326881_1468569142265.jpg",tip:"一人在外，想找个真心对我的"},
			]
		}
	},
	{
		item:{
			title:"汽车",
				id:"lunbo4",
			tooltip1:"惊现最贵观赏鱼天价18万一条",
			tooltip2:"机场上现不明飞行物 场面壮观",
			url:[
				{src:"https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2015-09-14/7d25a53118fb4a247d9d010b547fd668.jpg",tip:"汽车信息在这一应俱全"},
				{src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-01-15/afa2831d190a1257f59531ba3c85ab79.png",tip:"便宜又省油的SUV推荐"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_19519938_1462448605903.jpg",tip:"二手车0首付，代办过户"},
			]
		}

	}],

		game:{
			pic1:[
				{src:"https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-05-24/693aefcdcd240a42c019d13d13f723a2.jpg",title:"快刀切水果"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_7627920_1443169689977.jpg",title:"装备全靠打"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_19231983_1459252993843.png",title:"乱世三国"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_19231983_1459252994626.jpg",title:"一统天下"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_19231983_1466148527054.png",title:"魔界召唤"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10410890_1431658849175.jpg",title:"魔幻觉醒"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10410890_1431658849175.jpg",title:"领麻痹戒指"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10410890_1438849120347.jpg",title:"传奇世界"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_11184988_1464252343924.png",title:"赤月传说Ⅱ"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10410890_1432520372172.png",title:"传奇1.75版"}	
			],
			pic2:[			
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_19231983_1467858929070.jpg",title:"技定江山"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10410890_1431678793439.jpg",title:"经典传奇"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_7627920_1441699798095.png",title:"一秒满级"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21055573_1469078924355.png",title:"满屏爆元宝"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_7627865_1421034164479.jpg",title:"龍字传奇"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10897470_1459149425311.jpg",title:"雪鹰领主"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_7627865_1410850844582.png",title:"超变态MU"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_7627865_1422592288679.jpg",title:"传奇霸业"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10897470_1468382951366.jpg",title:"决战武林"},
				{src:"https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_10897470_1468383124098.jpg",title:"变态MU"}
			]
			}
		
		
	})
	.addView("layoutContent",function(model,template){
		var dom=$('<div class="right-section" id="right-section"></div>');
		var tpl=[
	'<div class="layout-content-ct">',
		'<div class="layout-content">',
			'<div class="box-site">',
			'<span class="shezhi"></span>',
			'<span class="tianjia"></span>',
				'<ul>',
					'<li class="huaquan"><span class="pic"></span><a href="">百度</a><em>·</em><a href="">贴吧</a><i>实时热点</i></li>',
					'<li><span class="pic"></span><a href="">新浪</a><em>·</em><a href="">微博</a></li>',
					'<li><span class="pic"></span><a href="">搜狐</a><em>·</em><a href="">视频</a></li>',
					'<li><span class="pic"></span><a href="">腾　讯</a></li>',
					'<li><span class="pic"></span><a href="">网　易</a></li>',
					'<li><span class="pic"></span><a href="">优 酷 网</a></li>',
					'<li><span class="pic"></span><a href="">天　猫</a></li>',
					'<li><span class="pic"></span><a href="">凤 凰 网</a></li>',
					'<li><span class="pic"></span><a href="">淘 宝 网</a></li>',
					'<li><span class="pic"></span><a href="">免费游戏</a></li>',
					'<li class="huaquan"><span class="pic"></span><a href="">4399游戏</a><i>双人合集</i></li>',
					'<li><span class="pic"></span><a href="">体育</a><em>·</em><a href=""> NBA</a></li>',
					'<li><span class="pic"></span><a href="">京东商城</a></li>',
					'<li><span class="pic"></span><a href="">聚 划 算</a></li>',
					'<li class="huaquan"><span class="pic"></span><a href="">今日特价</a><i>碎花服饰</i></li>',
					'<li><span class="pic"></span><a href="">hao123影视</a></li>',
					'<li><span class="pic"></span><a href="">汽车之家</a></li>',
					'<li><span class="pic"></span><a href="">彩票开奖</a></li>',
				'</ul>',
				'<p class="xian"></p>',
			'</div>',
			'<div class="box-famoussite">',
				'<div class="content">',
					'<ul>',
						'<li><a href="javascript:;">东方财富</a><em>·</em><a>理财</a></li>',
						'<li><a href="javascript:;">58 同 城</a></li>',
						'<li  class="active"><a href="javascript:;">搜 房 网</a></li>',
						'<li><a href="javascript:;">携程旅行网</a></li>',
						'<li><a href="javascript:;">百度地图</a></li>',
						'<li><a href="javascript:;">12306</a><em>·</em><a>旅游</a></li>',
						'<li><a href="javascript:;">世纪佳缘</a></li>',
						'<li><a href="javascript:;">赶 集 网</a></li>',
						'<li><a href="javascript:;">易 车 网</a></li>',
						'<li><a href="javascript:;">去哪儿网</a></li>',
						'<li><a href="javascript:;">工商银行</a></li>',
						'<li><a href="javascript:;">天涯社区</a></li>',
						'<li><a href="javascript:;">唯 品 会</a></li>',
						'<li><a href="javascript:;">阿里旅行</a></li>',
						'<li><a href="javascript:;">途牛旅游网</a></li>',
						'<li><a href="javascript:;">微信网页版</a></li>',
						'<li class="bank">',
						'<a class="gongshang" href="javascript:;">工商银行</a>',
						'<i></i>',
						'<div class="moreBank">',
							'<a>建设银行</a>',
							'<a>北京银行</a>',
							'<a>农业银行</a>',
							'<a>中国银行</a>',
							'<a>华夏银行</a>',
						'</div>',
						'</li>',
						'<li><a href="javascript:;">斗 鱼 TV</a></li>',
						'<li><a href="javascript:;">哔哩哔哩</a></li>',
						'<li><a href="javascript:;">看 房 网</a></li>',
						'<li class="zhongdian"><a href="javascript:;">太平洋汽车</a><b></b><i>车市行情</i><em></em></li>',
						'<li><a href="javascript:;">唯 品 会</a></li>',
						'<li><a href="javascript:;">海淘</a><em>·</em><a>手机</a></li>',
						'<li><a href="javascript:;">爱 淘 宝</a></li>',
						'<li class="active suning"><a href="javascript:;">苏宁易购</a></li>',
						'<li><a href="javascript:;">直 播 吧</a></li>',
						'<li><a href="javascript:;">在线学习</a></li>',
						'<li><a href="javascript:;">国美在线</a></li>',
						'<li><a href="javascript:;">海 淘</a></li>',
						'<li><a href="javascript:;">亚 马 逊</a></li>',
					'</ul>',
				'</div>',
			'</div>',
		'</div>',
	'</div>',
	'<div class="layout-adbar">',
		'<div class="content">',
			'<a href="javascript:;">聚划算</a>',
			'<a href="javascript:;">创业找项目</a>',
			'<a href="javascript:;">传奇霸业</a>',
			'<a href="javascript:;">传奇1.85</a>',
			'<a href="javascript:;">理财赚钱</a>',
			'<a href="javascript:;">景点门票</a>',
			'<a href="javascript:;">9块9包邮</a>',
			'<a href="javascript:;">女装满减</a>',
			'<a href="javascript:;">特价酒店</a>',
			'<a href="javascript:;">电影票团购</a>',
		'</div>',
	'</div>',
	'<div class="guesslikesite-block">',
	'<div class="content">',
	'<div class="guess"></div>',
	'<div class="rightBtn"></div>',
		'<div class="main">',
			'<div class="model">',
				'<div class="list1 list">',
					'<p class="orange">游戏</p>',
					'<div class="new0">',
						'<ul>',
							'<li><a>宝莉连连看</a></li>',
							'<li><a>变色怪冒险</a></li>',
							'<li><a>泡泡龙500</a></li>',
							'<li class="hot"><a>变形剑龙</a></li>',
							'<li><a>怪物碎片</a></li>',
							'<li><a>射击怪物</a></li>',
							'<li><a>蘑菇王诅咒</a></li>',
						'</ul>',
						'<a class="changenews chang1">换一换</a>',
					'</div>',
				'</div>',
				'<div class="list2 list">',
					'<p>热门</p>',
					'<div class="new0">',
						'<ul>',
							'<li><a>9.北京新楼盘</a></li>',
							'<li><a>微信炒股群</a></li>',
							'<li><a class="active">瓜子网</a></li>',
							'<li><a>北京买新房</a></li>',
							'<li><a>小额贷款</a></li>',
							'<li><a>P2P理财</a></li>',
							'<li><a>人人车卖车</a></li>',
						'</ul>',
						'<a class="changenews chang2">换一换</a>',
					'</div>',
				'</div>',
				'<div class="list3 list">',
					'<p>军事</p>',
					'<div class="new0">',
						'<ul>',
							'<li><a>最新军情</a></li>',
							'<li><a>劲爆头条</a></li>',
							'<li><a>2016大战争</a></li>',
							'<li><a>今日新军情</a></li>',
							'<li><a>特大军情</a></li>',
							'<li><a class="active">81军事网</a></li>',
							'<li><a>最新军情</a></li>',
						'</ul>',
						'<a class="changenews chang3">换一换</a>',
					'</div>',
				'</div>',
			'</div>',
		'</div>',
	'</div>',
	'</div>',
	'<div class="g-br3" id="g-br3">',
		'<div class="heade header1">',
			'<a>电视剧</a>',
			'<a>电影</a>',
			'<a>头条</a>',
			'<a>娱乐</a>',
			'<a>军事 </a>',
			'<a>小游戏</a>',
			'<a>特价</a>',
			'<a>海淘</a>',
			'<a>综艺</a>',
			'<a>软件</a>',
			'<a>学习</a>',
			'<a>理财</a>',
		'</div>',
		'<div class="moreNew">',
			'<ul>',
				'<li class="active">',
					'<span class="left">推 荐</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>京东热卖</a>',
						'<a>找工作</a>',
						'<a class="active">教你理财</a>',
						'<a>同城交友</a>',
						'<a>美食外卖</a>',
						'<a>百度网盘</a>',
						'<a class="qianlong">千龙网</a>',
					'</div>',
				'</li>',
				'<li>		',
					'<span class="left">视屏</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>爱奇艺高清</a>',
						'<a class="leshi">乐视视频</a>',
						'<a>优酷网</a>',
						'<a>百度视频</a>',
						'<a>搜狐视频</a>',
						'<a>影视大全</a>',
						'<a>中国新歌声</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">影视</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">					',
						'<a>电视剧</a>',
						'<a class="leshi">电影•购票</a>',
						'<a>动漫</a>',
						'<a>综艺</a>',
						'<a>电视直播</a>',
						'<a>2016热映大片</a>',
						'<a>热点资讯</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">游戏</span>',
					'<span class="right gameUPDown">收起&gt;&gt;</span>',
					'<div class="content">',
					'',
						'<a>4399游戏</a>',
						'<a>7k7k游戏</a>',
						'<a>1717337游戏</a>',
						'<a>LOL直播</a>',
						'<a>hao123</a>',
						'<a>小游戏</a>',
						'<a class="xiaoyouxi">hao123小游戏</a>',
					'</div>',
				'</li>',
				'<li class="teshu">',
					'<span class="left"></span>',
					'<span class="right"></span>',
					'<ul>',
						'<li class="firstP">{#lihtml1#}',
						'</li>',
						'<li class="secondP">{#lihtml2#}',
						'</li>',
					'</ul>',
				'</li>',
				'<li>',
					'<span class="left">新 闻</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="zuire">新浪新闻</a>',
						'<a>腾讯新闻</a>',
						'<a>搜狐新闻</a>',
						'<a>百度新闻</a>',
						'<a>网易新闻</a>',
						'<a>澎湃新闻</a>',
						'<a>环球网</a>						',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">军 事</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>中华军事</a>',
						'<a>凤凰军事</a>',
						'<a>铁血军事</a>',
						'<a>米尔军事</a>',
						'<a>军事头条</a>',
						'<a>环球新军</a>',
						'<a class="active">事强国军事</a>',
						'<a>腾讯军事</a>',
					'</div>',
				'</li>',
			'</ul>',
		'</div>',
		'<div class="heade header2">',
			'<ul>',
				'<li>新闻</li>',
				'<li>娱乐</li>',
				'<li>军事</li>',
				'<li>体育</li>',
				'<li>直播</li>',
				'<li>NBA</li>',
				'<li>足球</li>',
				'<li>美女秀</li>',
				'<li>搞笑</li>',
				'<li>游戏</li>',
				'<li>漫画</li>',
				'<li>小说</li>',
			'</ul>',
		'</div>',
	'<div class="moreNew moreNew1">',
			'<ul>',
				'<li class="active">',
					'<span class="left">体 育</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>新浪•NBA</a>',
						'<a>搜狐体育</a>',
						'<a>CCTV5</a>',
						'<a>虎扑体育</a>',
						'<a>国足</a>',
						'<a>直播吧</a>',
						'<a class="active">体育比分</a>',
						'<a>体育直播</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">购 物</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>淘宝网</a>',
						'<a>京东商城</a>',
						'<a>天猫精</a>',
						'<a>选苏宁易购</a>',
						'<a>聚划算</a>',
						'<a>全球购</a>',
						'<a>女装精选</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">商 城</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>天猫</a>',
						'<a>唯品会</a>',
						'<a>国美在线</a>',
						'<a>手机特惠</a>',
						'<a>特价商城</a>',
						'<a>母婴爆款</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">旅 游</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="travel">携程网</a>',
						'<a>去哪儿网</a>',
						'<a>途牛旅游网</a>',
						'<a class="huochepiao">机票•酒店•火车票</a>',
						'<a>蚂蜂窝</a>',
						'<a>携程机票</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">小 说</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="shuqitejia">起点中文网</a>',
						'<a>百度书城</a>',
						'<a class="active">纵横中文网</a>',
						'<a class="kk">17K小说</a>',
						'<a>小说排行</a>',
						'<a>热门小说</a>',
						'<a>小说阅读网</a>',
					'</div>',
				'</li>',
					'<li>',
					'<span class="left">手 机</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>移动•联通•电信</a>',
						'<a>中关村在线</a>',
						'<a>太平洋手机</a>',
						'<a>91助手</a>',
						'<a>乐视手机</a>',
						'<a>IT之家</a>',
						'<a>zealer测评</a>',
					'</div>',
				'</li>',
			'</ul>',
		'</div>',
		'<div class="heade header2">',
			'<ul>',
				'<li>特价</li>',
				'<li>海淘</li>',
				'<li>团购</li>',
				'<li>门票</li>',
				'<li>银行</li>',
				'<li>汽车</li>',
				'<li>房产</li>',
				'<li>社区</li>',
				'<li>交友</li>',
				'<li>QQ</li>',
				'<li>音乐</li>',
				'<li>菜谱</li>',
			'</ul>',
		'</div>',
		'<div class="moreNew moreNew2">',
			'<ul>',
				'<li class="active">',
					'<span class="left">社 交</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>百度贴吧</a>',
						'<a>世纪佳缘</a>',
						'<a>百合网</a>',
						'<a>珍爱网</a>',
						'<a>天涯社区</a>',
						'<a>QQ空间</a>',
						'<a>非诚勿扰</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">直 播</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>六间房秀场</a>',
						'<a>YY美女直播</a>',
						'<a>美女秀场</a>',
						'<a>熊猫TV</a>',
						'<a class="active">虎牙直播</a>',
						'<a>战旗TV</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">生 活</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>58同城</a>',
						'<a>赶集网</a>',
						'<a class="soufang">搜房网</a>',
						'<a class="78ye">78创业商机</a>',
						'<a>房多多房产</a>',
						'<a>查询助手</a>',
						'<a>驾校一点通</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">服 务</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>租车出行</a>',
						'<a>签证办理</a>',
						'<a>交通违章</a>',
						'<a>快递查询</a>',
						'<a>上门推拿</a>',
						'<a>实用百科</a>',
						'<a>特价门票</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">招 聘</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>智联招聘</a>',
						'<a>前程无忧</a>',
						'<a>>赶集招聘</a>',
						'<a>猎聘网</a>',
						'<a>应届生求职网</a>',
						'<a>58同城招聘</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">汽 车</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="dijiacar">汽车之家</a>',
						'<a>易车网</a>',
						'<a>>太平洋汽车</a>',
						'<a>优信二手车</a>',
						'<a>新浪汽车</a>',
						'<a>精选二手车</a>',
					'</div>',
				'</li>',
				'',
			'</ul>',
				'</div>',
		'<div class="heade header2">',
			'<ul>',
				'<li>小游戏</li>',
				'<li>星座</li>',
				'<li>爱的</li>',
				'<li>手机</li>',
				'<li>软件</li>',
				'<li>考试</li>',
				'<li>学外语</li>',
				'<li>在线学</li>',
				'<li>学外语</li>',
				'<li>大学</li>',
				'<li>性趣</li>',
			'</ul>',
		'</div>',
			'<div class="moreNew moreNew3">',
			'<ul>',
				'<li class="active">',
					'<span class="left">页 游</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>九阴绝学</a>',
						'<a>蓝月传奇</a>',
						'<a>主宰西游</a>',
						'<a>大闹天宫OL</a>',
						'<a>龙骑士传</a>',
						'<a>风暴大陆</a>',
						'<a>剑雨江湖</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">网 游</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>传奇盛世</a>',
						'<a>武神赵子龙</a>',
						'<a class="fight">决战武林</a>',
						'<a>魔兽世界</a>',
						'<a>梦幻西游</a>',
						'<a class="tianya">天涯明月刀</a>',
						'<a>地方冒险岛2是</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">动 漫</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="dongman">少儿动画</a>',
						'<a>萌主页</a>',
						'<a>漫画大全</a>',
						'<a class="active">热点动漫</a>',
						'<a>AcFun弹幕</a>',
						'<a>暴走漫画</a>',
						'<a>动漫之家</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">音 乐</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>百度音乐</a>',
						'<a>一听音乐</a>',
						'<a>酷狗音乐</a>',
						'<a>酷我音乐</a>',
						'<a>QQ音乐</a>',
						'<a>经典老歌</a>',
						'<a>音乐随心听</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">金 融</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>证券之星</a>',
						'<a>新浪财经</a>',
						'<a>股票•理财</a>',
						'<a>大数据</a>',
						'<a>第一财经</a>',
						'<a>同花顺</a>',
						'<a>百度金融</a>',
					'</div>',
				'</li>',
					'<li>',
					'<span class="left">财 经</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>东方财富</a>',
						'<a>精选理财</a>',
						'<a>易通贷理财</a>',
						'<a>股吧</a>',
						'<a>和讯网</a>',
						'<a>金融界</a>',
						'<a>雪球</a>',
					'</div>',
				'</li>',
				'<li>	',
			'</ul>',
		'</div>',
		'<div class="heade header2">',
			'<ul>',
				'<li>彩票</li>',
				'<li>双色球</li>',
				'<li>旅游</li>',
				'<li>女性</li>',
				'<li>美图</li>',
				'<li>母婴</li>',
				'<li>儿童</li>',
				'<li>地方</li>',
				'<li>壁纸</li>',
				'<li class="active">摄影</li>',
				'<li>灾难</li>',
				'<li>看点</li>',
			'</ul>',
		'</div>',
		'<div class="moreNew moreNew4">',
			'<ul>',
				'<li class="active">',
					'<span class="left">女 性</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>天猫女装</a>',
						'<a>瑞丽女性</a>',
						'<a>漂亮女人</a>',
						'<a>海报时尚网</a>',
						'<a>娱乐八卦</a>',
						'<a>太平洋女性</a>',
						'<a>网易女人</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">健 康</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a class="jiankang">百度医生</a>',
						'<a>39健康</a>',
						'<a>养生保健</a>',
						'<a>养生堂视频</a>',
						'<a>亲子育儿</a>',
						'<a>大夫在线</a>',
						'<a>好健康体检</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">彩 票</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>中彩网</a>',
						'<a>中国体彩</a>',
						'<a>全国开奖</a>',
						'<a>走势图表</a>',
						'<a>百度彩票</a>',
						'<a>双色球</a>',
						'<a>足球彩票</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">银 行</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>工商银行</a>',
						'<a>建设银行</a>',
						'<a>农业银行</a>',
						'<a>中国银行</a>',
						'<a>交通银行</a>',
						'<a>招商银行</a>',
						'<a>百度钱包</a>',
						'<a>返现支付宝</a>',
					'</div>',
				'</li>',
				'<li>',
					'<span class="left">邮 箱</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>163邮箱</a>',
						'<a class="active">126邮箱</a>',
						'<a>阿里云邮箱</a>',
						'<a>新浪邮箱</a>',
						'<a>QQ邮箱</a>',
						'<a>139手机邮箱</a>',
						'<a>地方是</a>',
					'</div>',
				'</li>',
					'<li>',
					'<span class="left">酷 站</span>',
					'<span class="right">更多&gt;&gt;</span>',
					'<div class="content">',
						'<a>在线翻译</a>',
						'<a class="active huangduanzi">糗事百科</a>',
						'<a>下厨房</a>',
						'<a>豆瓣</a>',
						'<a>奇闻趣事</a>',
						'<a>养眼美图</a>',
						'<a>网易公开课</a>',
						'<a>好看学院</a>',
					'</div>',
				'</li>',
			'</ul>',
		'</div>',
		'</div>',
	'<div class="layout-guess-pic">',
		'<span class="tuijian"></span>',
		'<span class="left-btn"></span>',
		'<span class="right-btn"></span>',
		'<ul>{#PicModel#}',
			/*'<li>',
				'<h3>',
					'<span>审核</span>',
					'<span class="line"></span>',
				'</h3>',
				'<div class="imgBox">',
					'<div class="toppicture0" id="tuijianPic1">',
							'<span class="left"></span>',
							'<span class="right"></span>',
								'<ul>',
									'<li class="active">',
									'<img src="https://gss1.bdstatic.com/5eN1dDebRNRTm2_p8IuM_a/res/r/image/2016-01-15/f787599b4418949416f754a4c0e85efc.png" alt="">',
									'<span></span>',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
								'</ul>',
						'</div>',
				'</div>',
				'<p class="itemNew0">车辆违章查询一键搞定</p>',
				'<p class="itemNew1">婚博会门票免费到家</p>',
			'</li>',
			'<li>',
				'<h3>',
					'<span>財經</span>',
					'<span class="line"></span>',
				'</h3>',
				'<div class="imgBox">',
					'<div class="toppicture0" id="tuijianPic1">',
							'<span class="left"></span>',
							'<span class="right"></span>',
								'<ul>',
									'<li class="active">',
									'<img src="https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21203092_1468052176188.jpg" alt="">',
									'<span></span>',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
								'</ul>',
						'</div>',
				'</div>',
				'<p class="itemNew0">车辆违章查询一键搞定</p>',
				'<p class="itemNew1">婚博会门票免费到家</p>',
			'</li><li>',
				'<h3>',
					'<span>热门</span>',
					'<span class="line"></span>',
				'</h3>',
				'<div class="imgBox">',
					'<div class="toppicture0" id="tuijianPic1">',
							'<span class="left"></span>',
							'<span class="right"></span>',
								'<ul>',
									'<li class="active">',
									'<img src="https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21203092_1468052176188.jpg" alt="">',
									'<span></span>',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
								'</ul>',
						'</div>',
				'</div>',
				'<p class="itemNew0">车辆违章查询一键搞定</p>',
				'<p class="itemNew1">婚博会门票免费到家</p>',
			'</li><li>',
				'<h3>',
					'<span>汽车</span>',
					'<span class="line"></span>',
				'</h3>',
				'<div class="imgBox">',
					'<div class="toppicture0" id="tuijianPic1">',
							'<span class="left"></span>',
							'<span class="right"></span>',
								'<ul>',
									'<li class="active">',
									'<img src="https://gss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/upload_21203092_1468052176188.jpg" alt="">',
									'<span></span>',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
									'<li>',
									'<img src="" alt="">',
									'<span>撒旦法阿斯蒂芬</span>',
									'</li>',
								'</ul>',
						'</div>',
				'</div>',
				'<p class="itemNew0">车辆违章查询一键搞定</p>',
				'<p class="itemNew1">婚博会门票免费到家</p>',
			'</li>',*/
		'</ul>',
	'</div>'
		].join('');
		var html="";
		var data=model.get("layoutContent");
		var tpl1='<p><img src="{#src#}" alt=""><a>{#title#}</a></p>';
		var tpl2='<p><img src="{#src#}" alt=""><a>{#title#}</a></p>';
		var picTpl=[
			'<li>',
				'<h3>',
					'<span>{#item.title#}</span>',
					'<span class="line"></span>',
				'</h3>',
				'<div class="imgBox">',
					'<div class="toppicture0" id="{#id#}">',
							'<span class="left"></span>',
							'<span class="right"></span>',
								'<ul>{#urlmodel#}',
								'</ul>',
						'</div>',
				'</div>',
				'<p class="itemNew0">{#tooltip1#}</p>',
				'<p class="itemNew1">{#tooltip2#}</p>',
			'</li>'
		].join("");
		var urltpl=['<li class="active">',
					'<img src="{#src#}" alt="">',
					'<span></span>',
					'<span>{#tip#}</span>',
					'</li>'].join("");
		var urlhtml="";
		var srchtml1=srchtml2=srchtml3=srchtml4="";
		var srcArr=[];
		data.picModel.forEach(function(value,index){
			srcArr[index]=[]
			value.item.url.forEach(function(data1,index1){
				srcArr[index].push(template(urltpl,data1))
			})
		})
		data.picModel.forEach(function(value,index){
			urlhtml+=template(picTpl,{
				urlmodel:srcArr[index].join(""),
				item:{
					title:value.item.title
				},
				tooltip1:value.item.tooltip1,
				tooltip2:value.item.tooltip2,
				id:value.item.id
			})
		})
		var lihtml1=lihtml2="";
		data.game.pic1.forEach(function(value){
			lihtml1+=template(tpl1,value)
		})
		data.game.pic2.forEach(function(value){
			lihtml2+=template(tpl2,value)
		})
		html=template(tpl,{
			lihtml1:lihtml1,
			lihtml2:lihtml2,
			PicModel:urlhtml

		})
		dom.html(html).appendTo("body")
		return dom;


	})
	.addCtrl("layoutContent",function(model,view){
		var dom=view.create("layoutContent");
		var status=true;
		dom.delegate(".zhongdian b","mouseenter",function(){
			$(this).hide().nextAll().show();
		})
		.delegate(".zhongdian em","mouseleave",function(){
			$(this).hide().prev().hide().prev().show();
		})
		.delegate(".bank i","click",function(){
			if($(this).hasClass("shang")){
				$(this).removeClass("shang").next().hide();
			}else{
				$(this).addClass("shang").next().show();
			}
		})
		.delegate(".moreBank a","click",function(){
			var value=$(this).html();
			$(".gongshang").html(value);
			$(this).parent().hide();
			$(".bank i").removeClass("shang")
		})
		//小游戏轮播事件
		.delegate(".teshu .left","click",function(){
			if($(".teshu li").is(":animated")) return;
			if(status){
			$(".secondP").css("left",-868);
			$(".firstP").animate({"left":868},700);
			$(".secondP").animate({"left":0},700,function(){
				$(".firstP").css("left",-868);
			});
			status=false;
		}else{
			$(".firstP").css("left",-868);
			
			$(".secondP").animate({"left":868},700,function(){
				$(".secondP").css("left",-868);
			});
			$(".firstP").animate({"left":0},700);
			status=true;
		}
			
		})
		.delegate(".teshu .right","click",function(){
			if($(".teshu li").is(":animated")) return;
			if(status){
			$(".secondP").css("left",868);
			$(".firstP").animate({"left":-868},700);
			$(".secondP").animate({"left":0},700,function(){
				$(".firstP").css("left",868);
			});
			status=false;
		}else{		
			$(".secondP").animate({"left":-868},700,function(){
				$(".secondP").css("left",868);
			});
			$(".firstP").animate({"left":0},700);
			status=true;
		}

		})
		//收起game事件
		.delegate(".gameUPDown","click",function(){
			if($(".teshu").is(":hidden")){
				$(".teshu").slideDown()
				$(this).text("收起>>")
			}
			else{
				$(".teshu").slideUp()
				$(this).text("展开>>")
			}
			
		})
		//guess 模块的交互事件
		var guess={
			demo1:{
				item1:["1刀99999级","一刀999级","新仙剑","满级试玩","上线领SS装","蓝月传奇","变态龙城"],
				item2:["非R玩家入","装备无限爆","传奇999级","装备满地爆","满级试玩","狂野变态版","蓝月传奇"],
				item3:["一刀爆橙装","剑侠传奇","装备无限爆","新皇图","装备靠打卖","秒升100级","出身带神装"]
			},
			demo2:{
				item1:["女士征婚","创业加盟网","二手车买卖","本田二手车","贡茶加盟","二手车网站","贡茶加盟"],
				item2:["创业好项目","创业好选择","北京新楼盘","北京二手车","微信炒股群","瓜子直卖网","低价二手车"]
			},
			demo3:{
				item1:["最新军事","劲爆头条","今日新军情","特大军情","最新军情","2016大战争","军情大揭秘"],
				item2:["劲爆头条","一线军情","军情谍报网","十大元帅","李鸿章最冤","汪精卫卖国","中国造航母"],
			}
		}
		var itemNum1=itemNum2=itemNum3=0;
		dom.delegate(".chang1","click",function(){
			var item4="item"+(++itemNum1%3+1);
			dom.find(".list1 li a").each(function(index,value){
				$(".list1 li a").eq(index).html(guess.demo1[item4][index]);
			})
		})
		.delegate(".chang2","click",function(){
			var item5="item"+(++itemNum2%2+1);
			dom.find(".list2 li a").each(function(index,value){
				$(".list2 li a").eq(index).html(guess.demo2[item5][index]);
			})
		})
		.delegate(".chang3","click",function(){
			var item6="item"+(++itemNum3%2+1);
			dom.find(".list3 li a").each(function(index,value){
				$(".list3 li a").eq(index).html(guess.demo3[item6][index]);
			})
		})
		//下面的图片事件
		for(var i=1;i<5;i++){
			movePic("lunbo"+i);
		}

	})
})
