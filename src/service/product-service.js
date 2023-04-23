/*
* @Author: Lizh
* @Date:   2018-05-02 19:48:23
* @Last Modified by:   Lizh
* @Last Modified time: 2018-05-15 16:32:07
*/


var _mm = require('util/mm.js');

var product = {
    // 加载商品列表
    getProductList : function(listInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/list.do'),
            data    : listInfo,
            success : resolve,
            error   : reject
        });
    },
    // 加载商品详情的数据
    getProductDetail: function(detailInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/product/detail.do'),
            data    : detailInfo,
            success : resolve,
            error   : reject
        });
    }
    
    
};
module.exports = product;