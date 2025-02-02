document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const imageItems = document.querySelectorAll(".image-item");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        imageItems.forEach(item => {
          if (filter === "all" || item.getAttribute("data-category") === filter) {
            item.classList.add("show");
          } else {
            item.classList.remove("show");
          }
        });
      });
    });
  });