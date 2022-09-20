const submitEntry = document.querySelector('.entry');

let pageIndex = JSON.parse(localStorage.getItem("pageNumberIndex"));

submitEntry.onclick = () => {
    pageIndex -= 3;
    localStorage.setItem("pageNumberIndex", JSON.stringify(pageIndex));
    window.location = "/index.html";
}