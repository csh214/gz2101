// 任意参数的之和
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// 求任意数的最大值
function max() {
    var max = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// 封装一个随机数的函数
// 封装函数的时候 需要知道函数有哪些参数，看这个函数中哪些值是可变（不固定）
// 返回值：把随机生成的随机数返回
function randomNumber(min, max) {
    var num;
    if (min > max) {
        num = parseInt(Math.random() * (min - max + 1) + max);
    } else {
        num = parseInt(Math.random() * (max - min + 1) + min);
    }
    return num;
}

// 封装一个随机颜色
// #十六进制  rgb(0-255,0-255,0-255)
// 返回值就是一个颜色

function randomColor() {
    // rga(0-255,0-255,0-255)
    // #十六进制
    // 0123456789abcdef
    var str = "0123456789abcdef";

    // 随机取str中取出 6个字符出 组成一个颜色
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += str[randomNumber(0, str.length - 1)];
    }

    return color;
}

// 时间差（计算两个时间的时间差）
function difference(d1, d2, callback) {
    var time1 = d1.getTime();
    var time2 = d2.getTime();

    var time = Math.abs(time1 - time2);
    var d = parseInt(time / 1000 / 60 / 60 / 24);
    var h = parseInt((time / 1000 / 60 / 60) % 24);
    var m = parseInt((time / 1000 / 60) % 60);
    var s = parseInt((time / 1000) % 60);
    // console.log(`两个时间相差${d}天${h}小时${m}分钟${s}秒`);

    var obj = {
        day: d,
        hours: h,
        min: m,
        sec: s,
    };

    callback(obj);
    // return obj;
}

// 获取样式的方法
function getStyle(ele, attr) {
    // 兼容的获取方法
    var style;
    if (window.getComputedStyle) {
        style = window.getComputedStyle(ele)[attr];
    } else {
        style = ele.currentStyle[attr];
    }

    return style;
}

// 封装一个 事件监听的函数
// 参数：事件源  事件类型  回调函数（事件处理函数）
function addEvent(ele, type, callback) {
    if (ele.addEventListener) {
        ele.addEventListener(type, callback);
    } else {
        ele.attachEvent("on" + type, callback);
    }
}

function format(d, f = "-") {
    // 设置函数参数的默认值
    // 当调用函数的时候 如果由传递 f这个参数 ，那么 就使用这个参数
    // 如果没有的时候  就是用 '-'
    // var f = f || "-";

    var years = d.getFullYear();
    var month = d.getMonth() + 1;
    // 3===>03
    month = month >= 10 ? month : "0" + month;
    var date = d.getDate();
    date = date >= 10 ? date : "0" + date;

    var hours = d.getHours();
    hours = hours >= 10 ? hours : "0" + hours;

    var min = d.getMinutes();
    min = min >= 10 ? min : "0" + min;

    var sec = d.getSeconds();
    sec = sec >= 10 ? sec : "0" + sec;

    // console.log(years, month, date, hours, min, sec);

    return `${years}${f}${month}${f}${date} ${hours}:${min}:${sec}`;
}

// 动画函数
function move(ele, obj, callback) {
    let index = 0;
    for (let attr in obj) {
        index++;
        clearInterval(ele[attr]);
        ele[attr] = setInterval(function () {
            let left;
            // 如果是透明度的时候 不需要取整的
            // 并且把 透明度的取值乘以100
            if (attr == "opacity") {
                left = getStyle(ele, attr) * 100;
            } else {
                left = parseInt(getStyle(ele, attr));
            }
            let x = (obj[attr] - left) / 10;
            // 0.9==》1   -0.9==>-1     -0.9 向上取整为0
            let speed = x > 0 ? Math.ceil(x) : Math.floor(x);

            left += speed;
            // console.log(left);

            // 如果是改变 opacity属性的值的时候 不需要加单位
            if (attr == "opacity") {
                // 因为声明的透明度的取值 乘以100 ，在设置的时候 需要除以100
                ele.style[attr] = left / 100;
            } else {
                ele.style[attr] = left + "px";
            }
            if (left == obj[attr]) {
                clearInterval(ele[attr]);
                index--;
                if (index == 0) {
                    callback && callback();
                }
            }
        }, 30);
    }
}
