/*
* @Author: Lizh
* @Date:   2018-04-18 15:15:50
* @Last Modified by:   Lizh
* @Last Modified time: 2018-05-15 17:22:37
*/
require('./index.css');
var _mm = require ('util/mm.js');
require('page/common/nav-simple/index.js');
$(function(){
	var type 	= _mm.getUrlParam('type') || 'defualt',
	 	orderNo = _mm.getUrlParam('orderNo');
	$element = $('.' + type + '-success');
	// 当为支付结果页面时将订单号添加到href后面
	 if(type === 'payment'){
	 	var $order = $element.find('.order');
	 	$order.attr('href',$order.attr('href') + orderNo);
	 }
	// 显示对应的提示元素
	$element.show();
});