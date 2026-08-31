document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  const searchForm = document.getElementById("searchForm");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      // سيتم ربط هذا لاحقاً بقاعدة بيانات Supabase للبحث الفعلي عن المنتجات والتجار
      alert("خاصية البحث قيد التجهيز — سيتم ربطها بقاعدة البيانات قريباً.");
    });
  }
});
