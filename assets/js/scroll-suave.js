
const menuLinks = document.querySelectorAll('.header-menu a[href^="#"]');

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(e.target) - 90;
    smoothScrollTo(0, distanceFromTheTop, 1000);
}

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}
/*
function nativeScroll(getDistanceFromTheTop) {
    window.scroll({
        top: getDistanceFromTheTop,
        behavior: "smooth",
    });
}*/

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  const easeInOutQuart = function(time, from, distance, duration) {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = window.setInterval(function() {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      window.clearInterval(timer);
    }
    window.scrollTo(newX, newY);
  }, 1000 / 60); // 60 fps
}