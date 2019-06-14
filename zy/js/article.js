/* 
* @Author: Administrator
* @Date:   2019-06-13 14:59:59
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-13 15:19:39
*/
'use strict';
window.onload=function(){
	var ofoot=document.getElementById('foot');
	var ofootli=ofoot.getElementsByTagName('span');
	var ofoot_s1=document.getElementById('foot_s1');
	// var ofoot_s2=document.getElementById('foot_s1');
	// var ofoot_s3=document.getElementById('foot_s1');
	for (var i = 0; i < ofootli.length; i++) {
	ofootli[i].onclick=function(){
		this.style.color='#D81E06';
	}
}
}
