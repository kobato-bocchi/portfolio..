$(".openbtn").click(function () {
    $(this).toggleClass('active');
    // $("#g-nav").toggleClass('panelactive');
    // $(".circle-bg")toggleClass('circleactive');
});
// $("#g-nav a").click(function () {
//     $(".openbtn").removeClass('active');
//     $("#g-nav").removeClass('panelactive');
//     $(".circle-bg").removeClass('circleactive');
// });

// 追従toppage
$(function () {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    // 100px スクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});