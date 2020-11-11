window.onload=()=>{
    let keyword = document.getElementById("keyword-popover").getElementsByTagName("div");
     let talk_list =document.getElementById("talk-list");
     let task =document.getElementById("task");
    let message ;
    
    let message1;
    message1='<div class="chat__message--left"> '
    message1 +='<div class="chat__message--left__avatar"> '
    message1 +='<img class="chat__message__image" src="../images/index.jpg" alt="">'
    message1 +='</div>'
    message1 +='<div class="chat__message--left__content">'
    message1 +='<p class="chat__message__name">'
    message1 +='<span class="game-cate-name">页游</span>自助服务<span class="help-time"></span>'
    message1 +=' </p>'
    message1 +='<div class="chat__message__info chat__message__info--help">'
    message1 += '<p>您好，欢迎使用贪玩官方自助服务</p>'
    message1 +='<p>以下是您关心的问题吗：</p>'
    message1 +='<ol class="chat__help">'
    message1 +='<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>一般是由网络访问频繁或者不稳定导致，建议可以按照以下方法进行尝试操作：</p><p>1.清理电脑缓存后重启路由器10分钟再重新联网登陆；</p><p>2.重启路由器后还是无法登陆建议下载一个【<a href=&quot;https://www.xunyou.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>迅游加速器</a>】，加速稳定网络再尝试登陆；</p><p>3.以上操作还是无法解决，建议检查修复电脑DNS；</p><p>4.关闭游戏，等待网络自动修复后再尝试登陆</p><p>温馨提示：自行尝试以上方法均无效可以添加官方远程客服QQ：800190140查看是否存在其他原因导致无法登陆。</p>" href="#">登陆显示405、点击游戏开始没反应、登陆已失效</a><br></li>'
    message1 +='<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>一般是电脑垃圾缓存过多或者游戏插件失效导致，建议按照以下方法尝试：</p><p>1.使用电脑管家清理垃圾缓存后再尝试登陆；</p><p>2.尝试重新下载【<a href=&quot;https://www.flash.cn/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>flash</a>】；</p><p>3.修改电脑DNS；</p><p>温馨提示：自行尝试操作还是无效或者遇到不会操作的情况可以添加官方远程客服QQ：800190140进行协助。</p>" href="#">登陆游戏显示白屏</a><br></li>'
    message1 +='<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>可能存在以下原因：</p><p>1.您的账号可能存在封禁状态，建议点击【<a href=&quot;https://www.tanwan.com/help.php?act=closure&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>封禁申诉</a>】申请解封；</p><p>2.游戏插件flash失效，需要重新下载更新，点击【<a href=&quot;https://www.flash.cn/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>flash</a>】下载安装。（温馨提示：如遇到不会操作情况建议添加联系官方远程客服QQ：800190140进行协助）</p>" href="#">登陆游戏显示黑屏</a><br></li>'
    message1 += '<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>一般是由网络连接不稳定导致，建议尝试以下方法：</p><p>1.使用电脑管家清理缓存后重启路由器5分钟再联网登陆；</p><p>2.重启路由器后还是无法登陆建议下载一个【<a href=&quot;https://www.xunyou.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>迅游加速器</a>】，加速稳定网络再尝试登陆；</p><p>温馨提示：自行尝试以上方法均无效可以添加官方远程客服QQ：800190140查看是否存在其他原因导致。</p>" href="#">游戏经常掉线</a><br></li>'
    message1 +='<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>游戏维护/连接中。。。属于游戏更新维护、合服维护，建议登陆游戏官网查看游戏公告、合服公告。</p><p>真龙主宰游戏官网：<a href=&quot;http://zlzz.tanwan.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>http://zlzz.tanwan.com/</a></p><p>贪玩蓝月游戏官网：<a href=&quot;http://lanyue.tanwan.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>http://lanyue.tanwan.com/</a></p><p>传奇世界游戏官网：<a href=&quot;http://cqsj.tanwan.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>http://cqsj.tanwan.com/</a></p><p>贪玩创世游戏官网：<a href=&quot;http://cscq.tanwan.com/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>http://cscq.tanwan.com/</a></p><p>其他游戏官网可以点击链接查找：<a href=&quot;https://www.tanwan.com/game/&quot; rel=&quot;noopener noreferrer&quot; target=&quot;_blank&quot;>https://www.tanwan.com/game/</a></p>" href="#">进入区服后游戏提示维护/连接中。。。</a><br></li>'
    message1 += '<li class="chat__help__item"><a class="question-link-click chat__help__click" data-answer="<p>进入区服后卡加载、读条</p><p>一般是由于电脑缓存、网络不稳定导致，建议尝试以下方法：</p><p>1.使用电脑管家清理缓存后重启路由器5分钟再联网登陆；</p><p>2.修改电脑DNS；</p><p>温馨提示：自行尝试操作还是无效或者遇到不会操作的情况可以添加官方远程客服QQ：800190140进行协助。</p>" href="#">进入区服后卡加载、读条</a><br></li>'
    message1 += '<li class="chat__help__item"><a class="catalog-link-click chat__help__click" href="#">返回问题目录</a><br></li>'
    message1 +='</ol>'
    message1 +='</div>  </div> </div>'
    for(let i=0;i<keyword.length;i++){
        
        keyword[i].onclick=()=>{
            message ='<div class="chat__message--right">'
            message +='<div class="chat__message--right__avatar">'
            message += '<img class="chat__message__image" src="../images/index.jpg" alt="">'
            message +='</div>'
            message +='<div class="chat__message--right__content"> '
            message +='<p class="chat__message__name">'
            message +='<span class="help-time"> </span>'
            message +=' <span class="tw-name"> 游客</span> '
            message +='</p>'
            message +='<i class="right-load" style="display:none">'
            message +='</i> <i class="right-failure" style="display:none">!</i>'
            message +=' <div class="guest-info chat__message__player">'+keyword[i].innerText+'</div>'
            message +='</div>' 
            message +='</div>'
            talk_list.innerHTML+=message;
            console.log(i)
            if(i==1){
                talk_list.innerHTML+=message1;
            }
                
             task.scrollTop = task.scrollHeight;
            
           
        }
        
    }
}