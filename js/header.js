$(document).ready(
    function(){
        $("ul.gnb").mouseenter(
            function(){
                $("ul.gnb .bg").remove();
                $("ul.gnb").prepend("<div class='bg'></div>");
                $("ul.gnb ul.sub").show();
                $("ul.enb").show();
            } 
        );
        $("#title,#subtitle,main").mouseenter(
            function(){
                $("ul.gnb .bg").remove();
                $("ul.gnb ul.sub,ul.enb").hide();
            }
        ); 
        $("ul.enb").hide();   
    }
);