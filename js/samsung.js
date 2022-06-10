$(document).ready(
    function(){                             
        
        // 헤더 애니메이션
        $("header").addClass("headerDown");
        
        //대메뉴 마우스 호버
        $("header").hover(
            function(){ 
                $("header ul.sub").addClass("subShow");
                $("header ul.enb").addClass("enbShow");  
                $(this).addClass("bgShow");

            },
            function(){
                $("header ul.sub").removeClass("subShow");
                $("header ul.enb").removeClass("enbShow");     
                $(this).removeClass("bgShow");
            }
        );

        // 타이틀 애니메이션 슬릭
        $(".slide").slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplayTime: 2000

        });

        // 사이드 메뉴 클릭시 올라옴
        $("aside .quickmenu a.up").click(function(){
            $(this).toggleClass("rot");
            $("aside .quickmenu ul").toggleClass("slideUp");
            return false;
        });

        // top 클릭 
        $("aside a.top").click(function(){
            $("html,body").animate({scrollTop:"0px"},1000); // 뒤에 숫자는 시간 1000 = 1초
            return false;
        }); 

        // 스크롤 이벤트
        var headerH = $("header").height(); 
        var titleH = $("#title").height();
        $(window).scroll(function(){
            if($(window).scrollTop() > headerH + titleH ){
                $("aside a.top").addClass("asidetopShow");
            }
            if($(window).scrollTop() < headerH + titleH ){
                $("aside a.top").removeClass("asidetopShow");
            }
            // 헤더 애니메이션
            if($(window).scrollTop() < headerH ){
                $("header").addClass("headerDown");
            }
            if($(window).scrollTop() > headerH ){
                $("header").removeClass("headerDown");
            }
            
        });

        // 서브페이지 스크롤 이벤트
        $(window).scroll(function(){
            if($(window).scrollTop()>$("header").height()+$("#subtitle").height()){
                $("aside a.top").addClass("asidetopShow");
            }
            if($(window).scrollTop()<$("header").height()+$("#subtitle").height()){
                $("aside a.top").removeClass("asidetopShow");
            }
            // 헤더 애니메이션
            if($(window).scrollTop() < headerH ){
                $("header").addClass("headerDown");
            }
            if($(window).scrollTop() > headerH ){
                $("header").removeClass("headerDown");
            }
        });
        
        //철학리스트 메뉴 클릭시 클래스 붙이기
        $("#philosophy ul.list li a").click(
            function(){
                $(this).addClass("current");
                $("#philosophy ul.list li a").not(this).removeClass("current");
                return false;
            }
        );
        $("#philosophy ul.list li:nth-child(1) a").addClass("current");

        //채용 프로세서 클릭 이벤트
        $("#hiring div .list li .detail").hide();
        $("#hiring div .list > li:nth-child(3) h4.h4").click(function(){
            // 화살표 회전
            $(this).toggleClass("rot180");
            $("#hiring div .list > li:nth-child(3) h4.h4").not(this).removeClass("rot180");
            // 전형 상세정보 슬라이드
            $(this).siblings("#hiring div .list li .detail").slideToggle();
            $(this).parent().parent().parent().siblings("#hiring .wrap > div").children(".list").children("li").children(".detail").slideUp();
            // 밑줄 생기기
            $(this).parent().parent("#hiring div .list").toggleClass("rot180");
            $(this).parent().parent().parent().siblings("#hiring .wrap > div").children("#hiring div .list").removeClass("rot180");                
        });

    }
);