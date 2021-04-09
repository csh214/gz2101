"use strict";

var input = document.getElementById('input');

input.onfocus = function () {
  if (this.value === '输入关键词搜索...') {
    this.value = '';
  }

  this.style.color = '#333';
};

input.onblur = function () {
  if (this.value === '') {
    this.value = '输入关键词搜索...';
    this.style.color = '#999';
  }
}; // ---------------------------------------------------------------------------------------


var btns = document.querySelectorAll('.btn');
var content = document.querySelector('#item');

for (var i = 0; i < list.length; i++) {
  content.innerHTML += "<li>\n                                <div class=\"item_img fl\">\n                                    <a href=\"\" class=\"\"><img src=\"".concat(list[i].img, "\" alt=\"\"></a>\n                                    <a href=\"\">").concat(list[i].type, "</a>\n                                </div>\n                                <div class=\"item_content fl\">\n                                    <h2><a href=\"\">").concat(list[i].title, "</a></h2>\n                                    <div>\n                                        <p>").concat(list[i].content, "</p>\n                                    </div>\n                                    <div>\n                                        <span class=\"fl\">").concat(list[i].time, "</span>\n                                        <div class=\"fr\">\n                                            <span><i>\uE9CE</i>").concat(list[i].view, "</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>");
}

btns.forEach(function (item, index) {
  item.index = index;

  item.onclick = function () {
    content.innerHTML = '';
    btns.forEach(function (item) {
      item.className = 'btn';
    });
    this.className = 'active btn';
    var n = this.index;

    if (n != 0) {
      var arr = list.filter(function (arrItem) {
        return arrItem.type == item.innerHTML;
      });

      for (var _n = 0; _n < 20; _n++) {
        content.innerHTML += "<li>\n                                <div class=\"item_img fl\">\n                                    <a href=\"\" class=\"\"><img src=\"".concat(arr[0].img, "\" alt=\"\"></a>\n                                    <a href=\"\">").concat(arr[0].type, "</a>\n                                </div>\n                                <div class=\"item_content fl\">\n                                    <h2><a href=\"\">").concat(arr[0].title, "</a></h2>\n                                    <div>\n                                        <p>").concat(arr[0].content, "</p>\n                                    </div>\n                                    <div>\n                                        <span class=\"fl\">").concat(arr[0].time, "</span>\n                                        <div class=\"fr\">\n                                            <span><i>\uE9CE</i>").concat(arr[0].view, "</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>");
      }
    } else {
      for (var _i = 0; _i < list.length; _i++) {
        content.innerHTML += "<li>\n                                <div class=\"item_img fl\">\n                                    <a href=\"\" class=\"\"><img src=\"".concat(list[_i].img, "\" alt=\"\"></a>\n                                    <a href=\"\">").concat(list[_i].type, "</a>\n                                </div>\n                                <div class=\"item_content fl\">\n                                    <h2><a href=\"\">").concat(list[_i].title, "</a></h2>\n                                    <div>\n                                        <p>").concat(list[_i].content, "</p>\n                                    </div>\n                                    <div>\n                                        <span class=\"fl\">").concat(list[_i].time, "</span>\n                                        <div class=\"fr\">\n                                            <span><i>\uE9CE</i>").concat(list[_i].view, "</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </li>");
      }
    }
  }; // 使btn双击不被选中


  item.setAttribute('onselectstart', 'return false');
}); // --------------------------------------------------------------------------------------------

var hotitems = document.getElementById('hotitems');

function fun() {
  var str = '';

  for (var i = 0; i < hotlist.length; i++) {
    str += "<li>\n                <div class=\"hotimg fl\">\n                    <a href=\"\"><img src=\"".concat(hotlist[i].img, "\" alt=\"\"></a>\n                </div>\n                <div class=\"fl\">\n                    <a href=\"\">").concat(hotlist[i].title, "</a>\n                    <p>").concat(hotlist[i].time, "</p>\n                </div>\n            </li>");
  }

  return str;
}

hotitems.innerHTML = fun();
var recitems = document.getElementById('recitems');

function fun2() {
  var str = '';

  for (var i = 0; i < reclist.length; i++) {
    str += "<li>\n                <div class=\"hotimg fl\">\n                    <a href=\"\"><img src=\"".concat(reclist[i].img, "\" alt=\"\"></a>\n                </div>\n                <div class=\"fl\">\n                    <a href=\"\">").concat(reclist[i].title, "</a>\n                    <p>").concat(reclist[i].time, "</p>\n                </div>\n            </li>");
  }

  return str;
}

recitems.innerHTML = fun2();
var classitems = document.getElementById('classitems');

function fun3() {
  var str = '';

  for (var i = 0; i < classlist.length; i++) {
    str += "<li>\n                <div class=\"hotimg fl\">\n                    <a href=\"\"><img src=\"".concat(classlist[i].img, "\" alt=\"\"></a>\n                </div>\n                <div class=\"fl\">\n                    <a href=\"\">").concat(classlist[i].title, "</a>\n                    <p>").concat(classlist[i].time, "</p>\n                </div>\n            </li>");
  }

  return str;
}

classitems.innerHTML = fun3();
var returntop = document.getElementById('returntop');
var sidebar = document.querySelector('.sidebar');
var header = document.querySelector('#header');
var headerHeight = header.offsetHeight + 25;

window.onscroll = function () {
  if (scrollY >= window.innerHeight) {
    returntop.style.display = 'block';
  } else {
    returntop.style.display = 'none';
  }

  var y = scrollY;
  var h = innerHeight;
  var sh = sidebar.offsetHeight;

  if (y >= sh - h + headerHeight && y <= 4454 - h + 84) {
    sidebar.style.position = 'fixed';
    sidebar.style.bottom = '0';
    sidebar.style.left = '50%';
    sidebar.style.marginLeft = 290 + 'px';
    sidebar.style.paddingBottom = 15 + 'px';
  } else if (y <= sh - h + headerHeight) {
    sidebar.style.position = '';
    sidebar.style.bottom = '';
    sidebar.style.left = '';
    sidebar.style.marginLeft = '';
    sidebar.style.paddingBottom = '';
  } else {
    sidebar.style.position = '';
    sidebar.style.bottom = '0';
    sidebar.style.left = '';
    sidebar.style.marginLeft = '';
    sidebar.style.paddingBottom = '';
  }
};

returntop.onclick = function () {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

$(".code").hover(function () {
  $(this).stop().children().eq(1).fadeTo(100, 1).animate({
    right: 55
  }, 100, 'linear');
}, function () {
  $(this).stop().children().eq(1).animate({
    right: 40
  }, 50, "linear").fadeTo(50, 0, function () {
    $(this).css("display", "none");
  });
});