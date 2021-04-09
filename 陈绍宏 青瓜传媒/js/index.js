var input = document.getElementById('input');

input.onfocus = function () {
    if (this.value === '输入关键词搜索...') {
        this.value = '';
    }
    this.style.color = '#333'
}

input.onblur = function () {
    if (this.value === '') {
        this.value = '输入关键词搜索...';
        this.style.color = '#999';
    }
}
// ---------------------------------------------------------------------------------------

let btns = document.querySelectorAll('.btn');
let content = document.querySelector('#item');
for (let i = 0; i < list.length; i++) {
    content.innerHTML += `<li>
                                <div class="item_img fl">
                                    <a href="" class=""><img src="${list[i].img}" alt=""></a>
                                    <a href="">${list[i].type}</a>
                                </div>
                                <div class="item_content fl">
                                    <h2><a href="">${list[i].title}</a></h2>
                                    <div>
                                        <p>${list[i].content}</p>
                                    </div>
                                    <div>
                                        <span class="fl">${list[i].time}</span>
                                        <div class="fr">
                                            <span><i></i>${list[i].view}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>`
}
btns.forEach((item, index) => {
    item.index = index;
    item.onclick = function () {
        content.innerHTML = '';
        btns.forEach(item => {
            item.className = 'btn';
        })
        this.className = 'active btn';
        let n = this.index;
        if (n != 0) {
            let arr = list.filter(arrItem => {
                return arrItem.type == item.innerHTML;
            })
            for (let n = 0; n < 20; n++) {
                content.innerHTML += `<li>
                                <div class="item_img fl">
                                    <a href="" class=""><img src="${arr[0].img}" alt=""></a>
                                    <a href="">${arr[0].type}</a>
                                </div>
                                <div class="item_content fl">
                                    <h2><a href="">${arr[0].title}</a></h2>
                                    <div>
                                        <p>${arr[0].content}</p>
                                    </div>
                                    <div>
                                        <span class="fl">${arr[0].time}</span>
                                        <div class="fr">
                                            <span><i></i>${arr[0].view}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>`
            }
        } else {
            for (let i = 0; i < list.length; i++) {
                content.innerHTML += `<li>
                                <div class="item_img fl">
                                    <a href="" class=""><img src="${list[i].img}" alt=""></a>
                                    <a href="">${list[i].type}</a>
                                </div>
                                <div class="item_content fl">
                                    <h2><a href="">${list[i].title}</a></h2>
                                    <div>
                                        <p>${list[i].content}</p>
                                    </div>
                                    <div>
                                        <span class="fl">${list[i].time}</span>
                                        <div class="fr">
                                            <span><i></i>${list[i].view}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>`
            }
        }
    }
    // 使btn双击不被选中
    item.setAttribute('onselectstart', 'return false');
})

// --------------------------------------------------------------------------------------------
var hotitems = document.getElementById('hotitems');

function fun() {
    var str = '';
    for (var i = 0; i < hotlist.length; i++) {
        str += `<li>
                <div class="hotimg fl">
                    <a href=""><img src="${hotlist[i].img}" alt=""></a>
                </div>
                <div class="fl">
                    <a href="">${hotlist[i].title}</a>
                    <p>${hotlist[i].time}</p>
                </div>
            </li>`
    }
    return str;
}

hotitems.innerHTML = fun();

var recitems = document.getElementById('recitems');

function fun2() {
    var str = '';
    for (var i = 0; i < reclist.length; i++) {
        str += `<li>
                <div class="hotimg fl">
                    <a href=""><img src="${reclist[i].img}" alt=""></a>
                </div>
                <div class="fl">
                    <a href="">${reclist[i].title}</a>
                    <p>${reclist[i].time}</p>
                </div>
            </li>`
    }
    return str;
}

recitems.innerHTML = fun2();

var classitems = document.getElementById('classitems');

function fun3() {
    var str = '';
    for (var i = 0; i < classlist.length; i++) {
        str += `<li>
                <div class="hotimg fl">
                    <a href=""><img src="${classlist[i].img}" alt=""></a>
                </div>
                <div class="fl">
                    <a href="">${classlist[i].title}</a>
                    <p>${classlist[i].time}</p>
                </div>
            </li>`
    }
    return str;
}
classitems.innerHTML = fun3();

var returntop = document.getElementById('returntop');
let sidebar = document.querySelector('.sidebar');
let header = document.querySelector('#header');
let headerHeight = header.offsetHeight + 25;


window.onscroll = function () {
    if (scrollY >= window.innerHeight) {
        returntop.style.display = 'block';


    } else {
        returntop.style.display = 'none';
    }

    let y = scrollY;
    let h = innerHeight;
    let sh = sidebar.offsetHeight;
    if (y >= sh - h + headerHeight && y <= 4454 - h + 84) {
        sidebar.style.position = 'fixed';
        sidebar.style.bottom = '0';
        sidebar.style.left = '50%';
        sidebar.style.marginLeft = 290 + 'px';
        sidebar.style.paddingBottom = 15 + 'px'
    } else if (y <= sh - h + headerHeight) {
        sidebar.style.position = '';
        sidebar.style.bottom = '';
        sidebar.style.left = '';
        sidebar.style.marginLeft = '';
        sidebar.style.paddingBottom = ''
    } else {
        sidebar.style.position = '';
        sidebar.style.bottom = '0';
        sidebar.style.left = '';
        sidebar.style.marginLeft = '';
        sidebar.style.paddingBottom = ''
    }
};

returntop.onclick = function () {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

$(".code").hover(
    function () {
        $(this).stop().children().eq(1).fadeTo(100, 1).animate({
            right: 55
        }, 100, 'linear');
    },
    function () {
        $(this).stop().children().eq(1).animate({
            right: 40
        }, 50, "linear").fadeTo(50, 0, function () {
            $(this).css("display", "none");
        });
    }
)

