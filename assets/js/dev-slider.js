/* Wordpress development projects slider -/Start */
document.addEventListener("DOMContentLoaded", function () {
    var category_slider = new Splide("#wp_project_category_slider", {
        type: "loop",
        perPage: 5,
        perMove: 1,
        gap: "30px",
        pagination: false,
        direction: "ttb",
        height: "36rem",
        wheel: true,
        isNavigation: true,
        width: "1100px",
        autoWidth: true,
        focus: "center",
        arrows: false,
        cover: true,
        autoplay: false,
        speed: 1000,
        dragMinThreshold: {
            mouse: 1,
            touch: 1,
        },
        breakpoints: {
            1199: {
                height: "24rem",
                gap: "20px",
            },
            991: {
                height: "20rem",
                gap: "15px",
            },
            767: {
                height: "18rem",
                gap: "10px",
            },
            576: {
                height: "14rem",
                gap: "10px",
            },
        },
        // waitForTransition: false,
    });

    var category_project_slider = new Splide("#wp_project_slider", {
        type: "loop",
        perPage: 1,
        gap: "60px",
        pagination: false,
        arrows: false,
        autoplay: false,
        rewind: true,
        speed: 3500,
        focus: "center",
        cover: true,
        autoWidth: true,
        dragMinThreshold: {
            mouse: 1,
            touch: 1,
        },
    });

    category_slider.sync(category_project_slider);
    category_slider.mount();
    category_project_slider.mount();
});
/* Wordpress development projects slider -/End */

// Wordpress Development project individual category slider - Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(
        "#wp_project_individual_category_slider"
    );

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 2,
            perMove: 1,
            padding: "10rem",
            arrows: false,
            pagination: false,
            gap: "60px",
            autoWidth: true,
            drag: "free",
            focus: "center",
            speed: 3500,
            autoScroll: {
                speed: 1,
                pauseOnHover: true,
            },
            breakpoints: {
                1199: {
                    gap: "45px",
                    padding: "5rem",
                },
                991: {
                    gap: "30px",
                    padding: "0rem",
                },
                767: {
                    gap: "20px",
                    padding: "0rem",
                },
                575: {
                    gap: "10px",
                    padding: "0rem",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
// Wordpress Development project individual category slider - End

// Wordpress Development project individual category slider - Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#wp_why_choose_slider");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 2,
            perMove: 1,
            padding: "28rem",
            arrows: false,
            pagination: false,
            gap: "120px",
            focus: "center",
            rewind: true,
            isNavigation: true,
            speed: 3200,
            autoStart: false,
            autoScroll: {
                speed: 0.9,
                pauseOnHover: true,
            },
            breakpoints: {
                1550: {
                    gap: "85px",
                    padding: "15rem",
                    perPage: 2,
                },
                1370: {
                    gap: "70px",
                    padding: "10rem",
                    perPage: 2,
                },
                1199: {
                    gap: "80px",
                    padding: "2rem",
                    perPage: 2,
                    autoScroll: true,
                },
                991: {
                    gap: "80px",
                    perPage: 2,
                    padding: "3rem",
                    autoScroll: false,
                    focus: false,
                    pagination: true,
                    speed: 2200,
                    autoplay: true,
                    interval: 5000,
                },
                767: {
                    gap: "80px",
                    perPage: 1,
                    padding: "3rem",
                    autoScroll: false,
                    focus: false,
                },
                575: {
                    padding: "2rem",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
// Wordpress Development project individual category slider - End

// SaaS Design Portfolio Slider 1 - Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(
        "#portfolios-slider-right-to-left"
    );

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 2,
            perMove: 1,
            padding: "14rem",
            arrows: false,
            pagination: false,
            gap: "30px",
            autoWidth: false,
            drag: "free",
            width: "100%",
            focus: "center",
            speed: 3500,
            autoScroll: {
                speed: 0.8,
                pauseOnHover: true,
            },
            breakpoints: {
                1499: {
                    perPage: 2,
                    padding: "2rem",
                    gap: "30px",
                },
                1199: {
                    perPage: 1,
                    padding: "18rem",
                    gap: "30px",
                },
                991: {
                    perPage: 1,
                    padding: "10rem",
                    gap: "24px",
                },
                767: {
                    perPage: 1,
                    padding: "8rem",
                },
                575: {
                    perPage: 1,
                    padding: "4rem",
                    gap: "20px",
                },
                450: {
                    perPage: 1,
                    padding: "2rem",
                    gap: "20px",
                },
                375: {
                    perPage: 1,
                    padding: "1.5rem",
                    gap: "16px",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
//  SaaS Design Portfolio Slider 1 - Start

// SaaS Design Portfolio Slider 2 - Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll(
        "#portfolios-slider-left-to-right"
    );

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 2,
            perMove: 1,
            padding: "14rem",
            arrows: false,
            pagination: false,
            gap: "30px",
            autoWidth: false,
            drag: "free",
            width: "100%",
            focus: "center",
            speed: 3500,
            autoScroll: {
                speed: -0.8,
                pauseOnHover: true,
            },
            breakpoints: {
                1499: {
                    perPage: 2,
                    padding: "2rem",
                    gap: "30px",
                },
                1199: {
                    perPage: 1,
                    padding: "18rem",
                    gap: "30px",
                },
                991: {
                    perPage: 1,
                    padding: "10rem",
                    gap: "24px",
                },
                767: {
                    perPage: 1,
                    padding: "8rem",
                },
                575: {
                    perPage: 1,
                    padding: "4rem",
                    gap: "20px",
                },
                450: {
                    perPage: 1,
                    padding: "2rem",
                    gap: "20px",
                },
                375: {
                    perPage: 1,
                    padding: "1.5rem",
                    gap: "16px",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
//  SaaS Design Portfolio Slider 2 - Start

// Portfolio image animation slide - 1 -/Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#portfolio-first-slide");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            direction: "ttb",
            height: "480px",
            arrows: false,
            pagination: false,
            autoHeight: true,
            gap: "16px",
            autoWidth: false,
            speed: 3500,
            pauseOnHover: false,
            autoScroll: {
                speed: 0.5,
                pauseOnHover: false,
            },
            breakpoints: {
                1399: {
                    height: "400px",
                },
                1199: {
                    height: "360px",
                },
                991: {
                    height: "480px",
                },
                767: {
                    height: "400px",
                },
                575: {
                    height: "360px",
                    gap: "10px",
                },
                450: {
                    height: "340px",
                },
                420: {
                    height: "270px",
                },
                400: {
                    height: "280px",
                },
                375: {
                    height: "250px",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
// Portfolio image animation slide -1 -/End

// Portfolio image animation slide - 2 -/Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#portfolio-second-slide");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            direction: "ttb",
            height: "480px",
            arrows: false,
            pagination: false,
            autoHeight: true,
            gap: "16px",
            autoWidth: false,
            speed: 3500,
            pauseOnHover: false,
            autoScroll: {
                speed: -0.4,
                pauseOnHover: false,
            },
            breakpoints: {
                1399: {
                    height: "400px",
                },
                1199: {
                    height: "360px",
                },
                991: {
                    height: "480px",
                },
                767: {
                    height: "400px",
                },
                575: {
                    height: "360px",
                    gap: "10px",
                },
                450: {
                    height: "340px",
                },
                420: {
                    height: "270px",
                },
                400: {
                    height: "280px",
                },
                375: {
                    height: "250px",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
// Portfolio image animation slide -2 -/End

// Portfolio image animation slide - 3 -/Start
document.addEventListener("DOMContentLoaded", function () {
    let splideElements = document.querySelectorAll("#portfolio-third-slide");

    splideElements.forEach(function (element) {
        let splide = new Splide(element, {
            type: "loop",
            perPage: 3,
            perMove: 1,
            direction: "ttb",
            height: "480px",
            arrows: false,
            pagination: false,
            autoHeight: true,
            gap: "16px",
            autoWidth: false,
            speed: 3500,
            pauseOnHover: false,
            autoScroll: {
                speed: 0.2,
                pauseOnHover: false,
            },
            breakpoints: {
                1399: {
                    height: "400px",
                },
                1199: {
                    height: "360px",
                },
                991: {
                    height: "480px",
                },
                767: {
                    height: "400px",
                },
                575: {
                    height: "360px",
                    gap: "10px",
                },
                450: {
                    height: "340px",
                },
                420: {
                    height: "270px",
                },
                400: {
                    height: "280px",
                },
                375: {
                    height: "250px",
                },
            },
        });

        splide.mount(window.splide.Extensions);
    });
});
// Portfolio image animation slide -3 -/End




// 404 Error page js code -Start
document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});
// 404 Error page js code -End
