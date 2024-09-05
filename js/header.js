$(function () {
    var close = $(".close-wrap");
    var item = $(".nav_item");

    $(".header .gnb")
        .clone()
        .appendTo(".o_gnb");

    $(".header .menu_wrap .menu-btn").on("click", function () {
        $(this).toggleClass("on");
        $(".header .menu_wrap .o_gnb").toggleClass("on");
    });

    close.on("click", function () {
        $(".header .menu_wrap .o_gnb").removeClass("on");
    });

    $(".nav_item").on("click", function () {
        $(".header .menu_wrap .o_gnb").removeClass("on");
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('header').addClass("white");
        } else {
            $('header').removeClass("white");
        }
    });
});

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

var sc = {
    init: function () {
        if ($('.liv').length > 0) {
            this.action();
        }
    },
    action: function () {
        var ele = $('.liv');
        var snb = $('.header .gnb');
        var snbA = snb.find('li');
        var scrNum = 0;
        var solh = [];
        var aniNum = [];

        function navActive(a) {
            snbA
                .eq(a)
                .addClass('active')
                .siblings()
                .removeClass('active');
        }

        function motionArea() {
            for (i = 0; i < ele.length; i++) {
                if (winSh() >= solh[i]) {
                    scrNum = i;
                    if (aniNum[i] == 0) {
                        aniNum[i] = 1;
                    }
                }
            }
            navActive(scrNum);
            //motion(scrNum);
        }

        ele.each(function (i) {
            aniNum[i] = 0;
        });

        function startScr() {
            ele.each(function (i) {
                solh[i] = parseInt(ele.eq(i).offset().top - (winH() - (winH() / 1.5)));
            });
            setTimeout(function () {
                motionArea();
                wheelNum = scrNum;
            }, 500);
        }
        startScr();

        $OBJ
            .win
            .on({
                'load': function () {
                    startScr();
                },
                'scroll': function () {
                    motionArea();
                }
            });

    }
}

$OBJ
    .doc
    .ready(function () {
        sc.init();
    });