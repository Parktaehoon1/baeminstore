$(document).ready(function () {
    let header = $('.header');

    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 0) {
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
        spaceBetween: 6,
        navigation: {
            nextEl: ".main-item-prev",
            prevEl: ".main-item-next",
        },
    })

    // 데이터 받아보기
    fetch("itemlist.json")
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            let html = ``

            data.forEach(element => {
                // console.log(element)
                html += `
                     <div class="goods-list">
                    <img src="${element.url}" alt="gg">
                    <span class="goods-list-hover">
                        <img src="images/itemlist-hover.png" alt="">
                    </span>
                    <div class="goods-list-desc">
                        <p>${element.title}</p>
                        <p>${element.title}</p>
                    </div>
                    </div>
                    `;
            });
            html += ``;
            document.getElementById('item-list').innerHTML = html;
        })
        .catch(err => console.log(err))

    let dataPromise = function (_method, _url, _payload) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(_method, _url);
            xhr.setRequestHeader('Content-type', 'application/json');
            let jData = JSON.stringify(_payload);
            xhr.send(jData);

            xhr.onreadystatechange = function (e) {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    resolve(xhr.response);
                    console.log(xhr.responseText)
                } else {
                    reject(console.log("Error"));
                }
            }
        })
    }
    dataPromise('GET', 'itemlistmd.json')
        .then(JSON.parse)
        .then(show)
        .catch(console.error);

    function show(_obj) {
        console.log('성공', _obj);

        let html = ``

        _obj.forEach(element => {
            console.log(element.url)
            html += `
            <div class="goods-list">
                <img src="${element.url}" alt="gg">
                <span class="goods-list-hover">
                <img src="images/itemlist-hover.png" alt="">
                </span>
                <div class="goods-list-desc">
                <p>${element.title}</p>
                <p>${element.title}</p>
                </div>
                </div>
            `;
        });
        html += ``;
        document.getElementById('md-item-list').innerHTML = html;


    }


}