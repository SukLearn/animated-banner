const bannerEl = document.querySelector(".banner");
const refresh = () => {
  bannerEl.classList.remove("banner");
  void bannerEl.offsetWidth;
  bannerEl.classList.add("banner");
};
setInterval(refresh, 12000);
