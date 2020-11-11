window.onload = () => {

    let a = document.getElementById("right-f2").getElementsByTagName("a");
    for (let i = 0; i < a.length; i++) {
        a[i].onmouseover = () => {
            a[i].style.backgroundPositionY = '-19px';
        }
        a[i].onmouseleave = () => {
            a[i].style.backgroundPositionY = '15px';
        }
    }

    // 
    let arr1 = [
        { text: "贪玩传奇世界网页版是一款由贪玩独代的ARPG角色扮演类网页游戏，特效绚丽的技能，酣畅淋漓的战斗一定会让你有绝佳的体验。", src: "../images/cqsjwyb.jpg" },
        { text: "贪玩平台《蓝月传奇》是一款大型多人APRG游戏，完美还原传奇1.85合击玩法，通过简化操作、自动释放技能和创新的合击技玩法让玩家体验到高质量的战斗和pk。", src: "../images/lycq.jpg" },
        { text: "《战龙归来》是一款基于pc端的大型多人ARPG网络游戏。研发上，采用广受好评的html5技术，为实现更好的游戏体验提供了完整成熟的解决方案，以及酷炫的粒子特效让游戏画面更加华丽，打击感更加真实，游戏体验更加完美...", src: "../images/zlgl.jpg" },
        { text: "贪玩《真龙主宰》是一款以东方魔幻为题材的2D角色扮演类网页游戏。游戏中玩家作为身怀强大战斗技巧的传奇人物，在被妖兽和邪恶巨龙侵袭的幻想大陆中，不断粉碎邪恶势力的阴谋和破坏为主线故事，集合了BOSS无限刷，套...", src: "../images/zlzz.jpg" },
        { text: "《战神觉醒》依然传奇味，豪礼送不停，boss爆率高，熟悉的画风，不一样的体验，让你嗨翻天~", src: "../images/zsjx.jpg" },
        { text: "《裁决战神》是以是一款大型多人APRG游戏，游戏使用大型竞技网游核心技术，再现经典传奇PK爽感，让玩家真实体验激烈的爽快战斗，再次体验到经典传奇的PK快感，酣畅淋漓的战斗一定会让你有绝佳的体验。来吧，与兄弟并...", src: "../images/zsjx.jpg" },
        { text: "《神王》游戏故事发生在奇妙的封神世界中，商周时期，纣王贪婪无道，百姓民不聊生，为了驾驭臣民，纣王兴师动众，建造鹿台，鹿台耗时七年之久，死伤无数，百姓怨声载道、揭竿而起，纣王自知殷商气数已尽，点燃鹿台，...", src: "../images/sw.jpg" },
        { text: "贪玩神戒是一款以东方魔幻为题材的2D角色扮演类网页游戏，神戒拥有三大职业成长配平、自由PVP对抗、多角度交互等设定，重现沙城会战场面、全地图同场竞技的场面...", src: "../images/sj.jpg" },
        { text: "《贪玩创世》首款创新单职业MMORPG游戏，摒弃传统1人1兽模式，游戏中以玩家个人成长为本。采用最新网页游戏制作技术，带来流畅、火爆的游戏体验，游戏拥有切割、荣耀、生肖等特色系统，融合10多个全新世界活动、怪物...", src: "../images/twcs.jpg" },
        { text: "《逐鹿三国霸主》是一款全新SLG三国策略手游。游戏完美还原三国志战争场景，告别粗暴数值对撞，全服玩家实时观战，梦回远古，体验最真实的战场战斗！游戏首创连城式大地图玩法，在激情战斗的同时更是谋略的展现！策...", src: "../images/twcs.jpg" },
        { text: "《暗黑大天使》是一款以西方魔幻故事为题材的RPG网络游戏。游戏经典还原了当年奇迹MU的游戏场景和角色模型,沿袭了“Sandbox”设计理念在还原游戏乐趣的同时,最大限度的将游戏的主导权交到玩家手中，让您真正的体验回...", src: "../images/ahdts.jpg" },
        { text: "随着龙之大陆上禁锢上古妖兽的封印被解开，妖兽倾巢而出，要展开针对人类最残酷的报复，人类中的英雄拿起武器不断强大自己，不断粉碎妖兽的阴谋！", src: "../images/twms.jpg" }
    ];

    let b = document.getElementById("f2-bottom").getElementsByTagName("li");
    let allgames_f1 = document.getElementById("allgames-f1")
    allgames_f1.style.background = "url(" + arr1[0].src + ") no-repeat";
    for (let i = 0; i < b.length; i++) {
        b[i].onmouseover = () => {
            allgames_f1.style.background = "url(" + arr1[i].src + ") no-repeat";
            allgames_f1.getElementsByTagName("p")[0].innerHTML = arr1[i].text;
        }
    }

    // 改变开始游戏按钮的背景图片位置
    let startA = document.getElementById("start").getElementsByTagName("a")[0];
    startA.onmouseover = () => {
        startA.style.backgroundPositionY = "-232px";
    }
    startA.onmouseleave = () => {
        startA.style.backgroundPositionY = "0px";
    }

    // 更换主体部分新闻的目录
    let news_main_top = document.getElementById("news_main_top").getElementsByTagName("li");
    let news_main_bottom = document.getElementsByClassName("news_main_bottom");
    let index = 0;
    news_main_bottom[0].style.display = "block";

    for (let i = 0; i < news_main_top.length; i++) {
        news_main_top[i].onmouseover = () => {
            index = i;
            for (let i = 0; i < news_main_top.length; i++) {
                news_main_top[i].className = " ";
                news_main_bottom[i].style.display = "none";

            }
            news_main_top[index].className = "on";
            //  console.log(index)
             news_main_bottom[index].style.display = "block";
        }
    }

    // 选择服务器
    // 获取select选中的值

    let select = document.getElementById("select_server");
    let server_list = document.getElementsByClassName("server_main_bottom")[0].getElementsByTagName("ul");
    let index1 = 0;
    let index2 = select.selectedIndex;
    server_list[index2].style.display = "block";
    console.log(server_list)
    for (let i = 0; i < select.length; i++) {
        select[i].onclick = () => {
            index1 = i
            for (let i = 0; i < select.length; i++) {
                server_list[i].style.display = "none";
            }
            server_list[index1].style.display = "block";
        }

    }

    //更新职业目录
    let person_top = document.getElementById("person_top").getElementsByTagName("li");
    let person_bottom = document.getElementById("person_bottom").getElementsByTagName("ul");
    let p = 0;//索引
    person_bottom[0].style.display = "block"
    for (let i = 0; i < person_top.length; i++) {
        person_top[i].onmouseover = () => {
            p = i;
            for (let i = 0; i < person_top.length; i++) {
                person_top[i].className = "";
                person_bottom[i].style.display = "none"
            }
            person_top[p].className = "on";
            person_bottom[p].style.display = "block"
        }
    }

    //切换第一图片
    let about_show = document.getElementsByClassName("about-show");
    //  let classname = about_show[0].getElementsByTagName("a")[0];
    console.log(about_show.length);
    let p2;//索引
    for (let i = 0; i < about_show.length; i++) {
        about_show[i].getElementsByTagName("a")[0].onmouseover = () => {
            p2 = i;
            for (let i = 0; i < about_show.length; i++) {
                about_show[i].id = " ";
                about_show[i].getElementsByTagName("a")[0].style.display = "block"
                about_show[i].getElementsByClassName("diyi")[0].style.display = "none";
            }
            about_show[p2].id = "show";
            about_show[p2].getElementsByTagName("a")[0].style.display = "none"
            about_show[p2].getElementsByClassName("diyi")[0].style.display = "block";

        }
    }

    // 侧边栏的显示与隐藏

    window.onscroll = () => {
        if (document.documentElement.scrollTop >= 550) {
            document.getElementsByClassName("content-nav")[0].style.display = "block";
        } else {
            document.getElementsByClassName("content-nav")[0].style.display = "none";

        }
    }
    lunbo1();
    lunbo2();

}

