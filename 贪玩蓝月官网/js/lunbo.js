

function lunbo1() {
    let speed = 3000;
    let lunbo = document.getElementById("lunbo_list");
    let lunboA = lunbo.getElementsByTagName("a");
    let zindex = 0; //每张图片的层大小
    let timer = null; //计时器
    let index = 0;
    let lunboBtn = document.getElementById("lunbo_btn").getElementsByTagName("li");


    function move() {
        //获取层、改变层，赋值层
        for (let i = 0; i < lunboA.length; i++) {
            zindex = parseInt(lunboA[i].style.zIndex);

            zindex++;
            //zindex=5->6->1 透明度为0,层变为1
            if (zindex > lunboA.length) {
                zindex = 1;
                lunboA[i].style.opacity = "0";
            }
            //zindex=4->5 透明度为1
            if (zindex == lunboA.length) {
                lunboA[i].style.opacity = "1"
                index = i;
            }
            lunboA[i].style.zIndex = zindex;
            addColor();
        }

    }

    function animate() {
        timer = setInterval(function () {
            move();
        }, speed);
    }

    // 小圆点  
    // 颜色变化
    function addColor() {
        for (let i = 0; i < lunboBtn.length; i++) {
            if (index == i) {
                lunboBtn[i].className = "on";
            } else {
                lunboBtn[i].className = "";
            }
        }
    }

    animate();
    addColor();
    // 鼠标进入与离开
    lunbo.onmouseenter = function () {
        clearInterval(timer);
    }
    lunbo.onmouseleave = function () {
        animate();
    }

    // 鼠标触碰小圆点
    for (let i = 0; i < lunboBtn.length; i++) {
        lunboBtn[i].index = i;
        lunboBtn[i].onmouseover = function () {
            move();
            index = this.index;
            addColor();
        }
    }
}
function lunbo2() {
    let list = document.getElementById("version_list");
    list.style.left="0px"
    let container = document.getElementById("version_container");
    let now_left = 0;
    let auto = null;

    // 绑定下一个图片的按钮事件
    function toLeft() {
        now_left = parseInt(list.style.left);
        console.log(now_left)
        let new_left = now_left - 1210;
        if (new_left < -2420) {
            new_left = 0;
        }
        animate(new_left);
    }

    // 绑定鼠标移动进轮播图时，自动轮播停止
    container.onmouseover = () => {
        clearInterval(auto);
    }

    // 绑定鼠标移动出轮播图时，自动轮播重新开启
    container.onmouseout = () => {
        autoPlay();
    }

    // 轮播动画的方法
    function animate(new_left) {
        now_left = parseInt(list.style.left);
        let offset = new_left - now_left;           // 总移动距离
        let interval = 10;                      // 速度的单位时间
        let speed = offset / (1000 / interval);    // 在总移动距离下每个单位时间内移动的距离，也就是速度

        function go() {
            now_left = parseInt(list.style.left);      // 当前位置
            let next_left = now_left + speed;           // 当前加上速度就是下一个单位时间所在位置
            list.style.left = next_left + "px";

            if (next_left >= new_left) {
                setTimeout(() => {
                    go();
                }, interval)
            } else {
                list.style.left = new_left + "px";
            }
        }
        go();
    }
    // 自动轮播图片的方法
    function autoPlay() {
        auto = setInterval(() => {
            toLeft();         // 每三秒触发下一个的按钮的事件
        }, 5000);
    }
    autoPlay();
}



