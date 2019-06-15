/* 
* @Author: Administrator
* @Date:   2019-06-13 14:59:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-15 14:00:02
*/
'use strict';
$(function(){
	// 星星
	$(".foot_1").toggle(
		function () {
    $(".foot_s11").show();
    $(".foot_s1").hide();
  },
  function () {
     $(".foot_s11").hide();
    $(".foot_s1").show();
  }  
)
	// 点赞
	$(".foot_3").toggle(
		function () {
    $(".foot_s33").show();
    $(".foot_s3").hide();
    $('.mix').show();
  },
  function () {
     $(".foot_s33").hide();
    $(".foot_s3").show();
    $('.mix').hide();
  } 
)
})
