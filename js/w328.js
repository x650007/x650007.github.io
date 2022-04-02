$(document).ready(function(){
    // $(document.body).on('mousedown', e => {
    //     e.preventDefault()
    // })

    $(".bgImg").animate({"opacity":"1"});

    //鼠标移动至search_Box改变透明度
    // $(".search_Box").hover(function(){
    //     $(this).animate({"opacity":"1"});
    //     },function(){
    //     $(this).animate({"opacity":"0.6"});
    //   });
    // 点击空白弹窗消失
    $(document).click(function(e){
        var target=$(e.target)
        if(target.closest($(".search_Box")).length==0){ //点击的元素
            $('.se_list').hide() //需要点击空白处消失的弹窗
            $(".search_Box").animate({"opacity":"0.6"});
            $(".bgImg").animate({"opacity":"1"});            
            if($(".bgImg").hasClass("bgImga1")){
                $(".bgImg").removeClass("bgImga1");
                $(".bgImg").addClass("bgImga2");
            }            
        }
    })

    //禁止鼠标右键
    $('body').bind('contextmenu', function() {
        return false;
    });

    //点击搜索引擎logo事件
    $(".se_logo").click(function(){
        $(".se_list").fadeToggle();
        $(".search_Box").animate({"opacity":"1"});
        $(".bgImg").animate({"opacity":"0.5"});
        $(".bgImg").removeClass("bgImga2");
        $(".bgImg").addClass("bgImga1");
    });

    //点击搜索框事件
    $(".search_Input_Text").focus(function(){
        $(".search_Box").animate({"opacity":"1"});
        $(".bgImg").animate({"opacity":"0.5"});
        $(".bgImg").removeClass("bgImga2");
        $(".bgImg").addClass("bgImga1");
    });

    //切换搜索引擎事件
    $(".se_list li").click(function(){
        if($(this).children("i").hasClass("icon-baidu")){
            $(".search_Input_Text").attr("name","wd");
            $(".search_form").attr("action","https://www.baidu.com/s");
            $(".se_logo").children("i").removeClass("icon-baidu");
            $(".se_logo").children("i").removeClass("icon-bing");
            $(".se_logo").children("i").addClass("icon-baidu");
        }
        if($(this).children("i").hasClass("icon-bing")){
            $(".search_Input_Text").attr("name","q");
            $(".search_form").attr("action","https://cn.bing.com/search");
            $(".se_logo").children("i").removeClass("icon-baidu");
            $(".se_logo").children("i").removeClass("icon-bing");
            $(".se_logo").children("i").addClass("icon-bing");
        }
        $(".se_list").fadeOut();
    });


// 百度搜索：https://www.baidu.com/s?wd=关键字
// Bing搜索：https://cn.bing.com/search?q=关键字
// <input type="text" name="q" class="search_Input_Text"></input>
// <form class="search_form" action="https://cn.bing.com/search" target="_blank"></form>
// <div class="se_logo"><i class="w_icon icon-bing"></i></div>
   
    // $(".search_Input_Text").blur(function(){
    //     $(".search_Box").animate({"opacity":"0.6"});
    // });
    // $(".search_Input_Text").blur(function(){
    //     $(".search_Box").css({
	// 		"background-color":"rgba(245, 245, 245, 0.6)"
	// 	});
    // });


    
    // $(".search_Input_Text").focus(function(){
    //     $(".bgImg").addClass("bgImga");
    // });
    // $(".search_Input_Text").blur(function(){
    //     $(".bgImg_img").removeClass("bgImga");
    // });
   // .bgImg_img_transform { transform:scale(1.4); filter:blur(10px);}
  
});
//时间事件
myformatter(new Date());
function myformatter(date){
    var y = date.getFullYear();
    var m = date.getMonth()+1;
    var d = date.getDate();
    var week = date.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var w_date=y+'年'+(m<10?('0'+m):m)+'月'+(d<10?('0'+d):d)+'日  ' + weeks[week];
    var w_time=(h<10?('0'+h):h)+':'+(min<10?('0'+min):min)+':'+(s<10?('0'+s):s);
    jQuery(".date_box").html(w_date);
    jQuery(".time_box").html(w_time);
    setTimeout("myformatter(new Date());", 1);
}
//IP城市运营商
function testJson(obj) {
    document.getElementById("obj_ip").innerHTML += obj.ip;
    document.getElementById("obj_pro").innerHTML += obj.pro;
    document.getElementById("obj_city").innerHTML += obj.city;
    document.getElementById("obj_region").innerHTML += obj.region;
    document.getElementById("obj_addr").innerHTML += obj.addr;
}