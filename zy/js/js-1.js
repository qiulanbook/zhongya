/* 
* @Author: Administrator
* @Date:   2019-06-13 09:27:17
* @Last Modified by:   Administrator
* @Last Modified time: 2019-06-13 09:27:57
*/

'use strict';
window.onresize = function(){
            var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;

            var _html = document.getElementsByTagName('html')[0];
            view_width>640?_html.style.fontSize = 640 / 16 + 'px':_html.style.fontSize = view_width / 16 + 'px';
        }