//监听滚轮滚动事件
window.onscroll = function () {
    const scrollT = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollT > 500) {
        const returnTop = document.getElementsByClassName("tool_returnTop")[0];
        const fixNav = document.getElementById("fixedNav");
        fixNav.style.display = 'block';
        returnTop.style.display = 'block';
    } else {
        const returnTop = document.getElementsByClassName("tool_returnTop")[0];
        const fixNav = document.getElementById("fixedNav");
        fixNav.style.display = 'none';
        returnTop.style.display = 'none';
    }
};

// 客服显示
const customerService = document.getElementsByClassName("tool_customerService")[0];

function customerServiceAppear() {
    const toolHeader = document.getElementsByClassName("tool_header")[0];
    toolHeader.style.display = "block"
}

customerService.addEventListener("mouseenter", customerServiceAppear);

function customerServiceDisappear() {
    const toolHeader = document.getElementsByClassName("tool_header")[0];
    toolHeader.style.display = "none"
}

customerService.addEventListener("mouseleave", customerServiceDisappear);

//轮播图按钮
$("#banner").mouseenter(function () {
    $(".swiper-button-prev").animate({
        marginLeft: '80px'
    });
    $(".swiper-button-next").animate({
        marginRight: '80px'
    })
}).mouseleave(function () {
    $(".swiper-button-prev").animate({
        marginLeft: '-100px'
    });
    $(".swiper-button-next").animate({
        marginRight: '-100px'
    })
});

//二维码显示
$(".tool_ercode").mouseenter(function () {
    $(".tool_body_ercode .image").animate({
        height: '80px'
    })
}).mouseleave(function () {
    $(".tool_body_ercode .image").animate({
        height: '0'
    })
});

// 显示隐藏导航栏
function nav(tag, card) {
   tag.mouseenter(function () {
        card.slideDown("slow");
    }).mouseleave(function (e) {
        // 获取鼠标当前y坐标
        let y = e.pageY;
        let x = e.pageX;
        const giftLi = card;
        // 获取隐藏的导航栏的高度
        var y1 = giftLi.offset().top;
        var y2 = y1 + giftLi.height();
        const x1 = giftLi.offset().left;
        const x2 = x1 + giftLi.width();
        if (y < y1 || y > y2 || x < x1 || x > x2) {
           card.slideUp("slow");
        }
    });

    card.mouseleave(function (e) {
        let y = e.pageY;
        let x = e.pageX;
        const giftLi = tag;
        const giftDiv = card;
        // y1 y2 是导航栏标签的上下坐标
        const y1 = giftLi.offset().top;
        const y2 = giftLi.offset().top + giftDiv.height();
        // y3 是展开后的卡片的最下面坐标
        const y3 = giftDiv.offset().top + giftDiv.height();
        // x1 x2 是导航栏标签的左右坐标
        const x1 = giftLi.offset().left;
        const x2 = x1 + giftLi.width();

        if (y < y1 || y > y3 || (y > y1 && y < y2 && x > x2) || (y > y1 && y < y2 && x < x1)) {
           card.slideUp("slow");
        }
    });
}

nav( $(".nav_list_gift"), $(".navHide_gift"));
nav( $(".nav_list_ring"), $(".navHide_ring"));
nav( $(".nav_list_customized"), $(".navHide_Customized"));
nav( $(".nav_list_world"), $(".navHide_world"));


//隐藏导航栏中的图片变换
function imgChange(tag, image){
    tag.mouseenter(function () {
    const img = document.querySelectorAll(".navHide_gift_right img");
    for (var i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }
    image.fadeIn("slow")
});
}

imgChange($(".navHide_gift .bottom_middle_dolphin"), $(".navHide_gift_right .dolphin"));
imgChange($(".navHide_gift .bottom_middle_meeting"), $(".navHide_gift_right .meeting"));
imgChange($(".navHide_gift .bottom_middle_F"), $(".navHide_gift_right .F"));
imgChange($(".navHide_gift .bottom_middle_caibao"), $(".navHide_gift_right .caibao"));
imgChange($(".navHide_gift .bottom_middle_more"), $(".navHide_gift_right .more"));