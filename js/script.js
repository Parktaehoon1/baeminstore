$(document).ready(function () {
    let header = $('.header');
    
    $(window).scroll(function(){
        let temp = $(window).scrollTop();
        if(temp > 0){
            header.addClass('header-fix');
        } else {
            header.removeClass('header-fix');
        }
    })
})

window.onload = function () {
    AOS.init();


    //     $("#wrapper").dotdotdot({
    //         wrapper  : 'div',  /*  콘텐트를 감쌀 요소. */
    //         ellipsis: '... ',  /*  말줄임표를 뭘로 할지 */
    //         wrap  : 'word',    /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
    //         after  : null,     /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
    //         watch  : false,    /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
    //         height  : null,     /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
    //         tolerance: 0       /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    //       });

    let visualSwiper = new Swiper('.sw-visual', {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".sw-next-bt",
            prevEl: ".sw-prev-bt",
        },
    })

    let mainItemSwiper = new Swiper('.sw-main-item', {
        loop: true,
        speed: 500,
        slidesPerView: 3,
        slidesPerGroup: 3,  
        spaceBetween : 6,
        navigation: {
            nextEl: ".main-item-prev",
            prevEl: ".main-item-next",
        },

    })
}