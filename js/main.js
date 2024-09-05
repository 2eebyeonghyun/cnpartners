$(document).ready(function () {
    var body = document.getElementById('body');

    if (window.innerWidth > 1024) { // 다바이스 크기가 1024이상일때

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= ($('.main_cont1').offset().top - 600)) {
                    $('.motion').addClass('active');
                } else {
                    $('.motion').removeClass('active');
                }
            });
        });

    } else {

        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() >= ($('.main_cont1').offset().top - 600)) {
                    $('.motion').addClass('active');
                } else {
                    $('.motion').removeClass('active');
                }
            });
        });

    }
})

var autoHyphen = function (target) { // 예약확인 하이픈추가
    target.value = target
        .value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
}

var autoHyphen2 = function (target) { // 예약확인 하이픈추가
    target.value = target
        .value
        .replace(/[^0-9]/g, '')
        .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/, "$1-$2-$3");
}

$OBJ = {
    'win': $(window),
    'doc': $(document),
    'html': $('html')
}

function winW() { //창 너비
    return $OBJ
        .win
        .width();
}

function winH() { // 창 높이
    return $OBJ
        .win
        .height();
}

function winSh() { // 스크롤 값
    return $OBJ
        .win
        .scrollTop();
}

$(document).ready(function () {
    AOS.init({once: true});
});
