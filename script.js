let currentPage = 0;
const pages = document.querySelectorAll(".flipbook .page");

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
}

function nextPage() {
  currentPage = (currentPage + 1) % pages.length;
  showPage(currentPage);
}

// Show first page on load
showPage(currentPage);
