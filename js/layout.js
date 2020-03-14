$(document).ready(function () {

    $("#menu_bar").click(function () {
        $("#site_menu").slideToggle();
        $("#search_box").slideToggle();
        $(".btn-login").slideToggle();
    });


    $(document).on("click", "#btn_login", function () {
        $("#login_form").fadeToggle("1000");
    });

    $(document).on("click", "#close_modal", function () {
        $("#login_form").fadeOut("1000");
    });

    if (window.innerWidth <= 991) {
        $("#course").click(function () {
            $("#course_submenu").slideToggle("1000");
        });

        $("#categories").click(function () {
            $("#categories_submenu").slideToggle("1000");
        });
    }
});

