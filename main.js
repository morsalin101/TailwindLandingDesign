
const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenuBtn");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    document.body.classList.add("overflow-hidden");
});

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});





    const initialTranslateLTR = -48 * 4;
    const initialTranslateRTL = 36 * 4;

    function setupIntersectionObserver(element, isLTR, speed) {
        const intersectionCallback = (entries) => {
            const isIntersecting = entries[0].isIntersecting;
            if (isIntersecting) {
                document.addEventListener('scroll', scrollHandler);
            } else {
                document.removeEventListener('scroll', scrollHandler);
            }
        };
        const intersectionObserver = new IntersectionObserver(intersectionCallback);

        intersectionObserver.observe(element);

        function scrollHandler() {
            const translateY = window.innerHeight - element.getBoundingClientRect().top;
            const translateX = translateY * speed;

            let totalTranslate = 0;
            if (isLTR) {
                totalTranslate = translateX + initialTranslateLTR;
            } else {
                totalTranslate = -(translateX + initialTranslateRTL);
            }

            element.style.transform = `translateX(${totalTranslate}px)`;
        }
    }

 
    const line4Element = document.getElementById('line4'); 

    if (line4Element) {
        setupIntersectionObserver(targetLine, true, 0.8); // Apply fast left-to-right functionality
    }

