
window.onscroll = function () 
{
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
      btn.style.display = "block";
    } else 
    {
      btn.style.display = "none";
    }
};

function scrollToTop() 
{
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("mousemove", (e) => 
{
  const trailDot = document.createElement("div");
  trailDot.className = "trail-dot";
  trailDot.style.left = `${e.clientX}px`;
  trailDot.style.top = `${e.clientY}px`;
  document.body.appendChild(trailDot);

  setTimeout(() => 
    {
      trailDot.remove();
    }, 500);
});

window.addEventListener("load", function () {
  setTimeout(() => {
  const hero = document.querySelector(".header-text");
  hero.classList.remove("hidden");
  hero.classList.add("show");
  }, 1000);
});

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});
