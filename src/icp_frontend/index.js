

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navbar").classList.add("shrink");
    document.querySelector(".welcome-slogan").style.opacity = "0";
  } else {
    document.querySelector(".navbar").classList.remove("shrink");
    document.querySelector(".welcome-slogan").style.opacity = "1";
  }
}
