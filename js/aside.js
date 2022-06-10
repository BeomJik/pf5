$(document).ready(
    function(){
        $("aside a.top").click(function(){
            $("html,body").animate({scrollTop:"0px"},1000); // 뒤에 숫자는 시간 1000 = 1초
            return false;
        }); 

        // top 클릭
        $("aside a.up").click(function(){
            $(this).toggleClass("rot");
            $("aside ul").toggleClass("slideup");
            return false;
        });
        
        // 스크롤 이벤트
        $(window).scroll(function(){
            if($(window).scrollTop()>$("main").height()){
                $("aside a.top").addClass("asidetopShow");
            }
            if($(window).scrollTop()<$("main").height()){
                $("aside a.top").removeClass("asidetopShow");
            }
        });    
    }
);