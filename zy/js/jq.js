/* 
* @Author: Administrator
* @Date:   2019-06-13 09:33:39
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-13 10:20:04
*/

'use strict';
$(function(){
    $('.top li').click(function(){
        $('.top li').removeClass('add');
        $(this).addClass('add');
        $('.btm li').hide();
        $('.btm li').eq($(this).index()).show()
    })

})