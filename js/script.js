document.addEventListener("DOMContentLoaded", () => {
    // GSAP
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

    // 메인 비주얼
    const swiper1 = new Swiper(".visual-slider", {
        loop: true, // 슬라이드 무한 반복
        navigation: {
            nextEl: ".btn-next", // 'next' 버튼
            prevEl: ".btn-prev", // 'prev' 버튼
        },
        stopOnLastSlide: true, // 마지막 슬라이드에서 자동 멈춤
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 수
    });

    // notice
    const swiper = new Swiper(".notice-slider", {
        loop: true, // 슬라이드 무한 반복
        autoplay: {
            delay: 5000, // 5초마다 자동 슬라이드
        },
        navigation: {
            nextEl: ".btn-next", // 'next' 버튼
            prevEl: ".btn-prev", // 'prev' 버튼
        },
        stopOnLastSlide: true, // 마지막 슬라이드에서 자동 멈춤
        slidesPerView: 2.5, // 한 번에 보여줄 슬라이드 수
        spaceBetween: 50, // 슬라이드 간 간격
    });

    // 슬라이드 일시 정지 버튼
    const stopButton = document.querySelector(".btn-stop");
    stopButton.addEventListener("click", () => {
        swiper.autoplay.stop(); // 자동 슬라이드 정지
    });

    gsap.from(".dokdo_info", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".dokdo_info",
            start: "top 80%",
            end: "bottom 110%",
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });

    gsap.from(".info", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",

        scrollTrigger: {
            trigger: ".info",
            start: "top 66%",
            end: "bottom 110%",
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });

    gsap.from(".notice", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",

        scrollTrigger: {
            trigger: ".notice",
            start: "top 65%",
            end: "bottom 130%",
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });

    gsap.from(".banner", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",

        scrollTrigger: {
            trigger: ".banner",
            start: "top 70%",
            end: "bottom 130%",
            toggleActions: "play none reverse none",
            // markers: true,
        },
    });
});
