/* 
* @Author: Administrator
* @Date:   2019-06-13 14:59:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-15 10:30:02
*/
'use strict';
// window.onload=function(){
// 	var ofoot=document.getElementById('foot');
// 	var ofootli=ofoot.getElementsByTagName('span');
// 	var ofoot_s1=document.getElementById('foot_s1');
// 	// var ofoot_s2=document.getElementById('foot_s1');
// 	// var ofoot_s3=document.getElementById('foot_s1');
// 	for (var i = 0; i < ofootli.length; i++) {
// 	ofootli[i].onclick=function(){
// 		this.style.color='#D81E06';
// 	}
// }
// }
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
	$(".foot_3").click(function() {
		
	});


	// 转发




























})
