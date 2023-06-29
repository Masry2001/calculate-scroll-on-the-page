
let el = document.querySelector(".scroller")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let percent = Math.floor(scrollTop * 100 / height);
    el.style.width = `${percent}%`;
    el.innerHTML = `${percent}%`;
})