$().ready(
    function(){
        $("#philosophy ul.list li a").click(
            function(){
                $(this).addClass("current");
                $("#philosophy ul.list li a").not(this).removeClass("current");
                return false;
            }
        );
    }
);