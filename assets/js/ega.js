// Tải file HTML và gắn vào phần tử tương ứng
function includeHTML(filePath, elementId) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) throw new Error("Không thể tải " + filePath);
      return response.text();
    })
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Nhúng header và footer và các đường link khác
includeHTML("assets/header&footer/header.html", "header-placeholder");
includeHTML("assets/header&footer/footer.html", "footer-placeholder");
includeHTML("assets/main/mainhome.html", "mainhome-placeholder");
includeHTML("assets/main/maincollections.html", "maincollections-placeholder");
includeHTML("assets/main/mainproduct.html", "mainproduct-placeholder");
includeHTML("assets/main/mainlogin.html", "mainlogin-placeholder");
includeHTML("assets/main/main-map.html", "main_map-placeholder");
includeHTML(
  "assets/main/main-shopping-cart.html",
  "mainshopping-cart-placeholder"
);
includeHTML("assets/main/main-order.html", "main-order-placeholder");
includeHTML("assets/main/main-introduce.html", "introduce-placeholder");
includeHTML("assets/main/main-contant.html", "main-contant-placeholder");

// Kiểm tra nếu đã từng tắt banner
window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("hideTopBanner") === "true") {
    document.getElementById("topBanner").style.display = "none";
  }
});

function closeTopBanner() {
  document.getElementById("topBanner").style.display = "none";
  localStorage.setItem("hideTopBanner", "true");
}

// Kiểm tra dropdown menu
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thiết
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropdown = document.querySelector(".dropdown");

  // Thêm sự kiện khi di chuột vào
  dropdown.addEventListener("mouseenter", function () {
    dropdownContent.style.display = "block";
  });

  // Thêm sự kiện khi di chuột ra
  dropdown.addEventListener("mouseleave", function () {
    dropdownContent.style.display = "none";
  });

  // (Tùy chọn) Đảm bảo dropdown không đóng khi di chuột vào nội dung
  dropdownContent.addEventListener("mouseenter", function () {
    dropdownContent.style.display = "block";
  });

  dropdownContent.addEventListener("mouseleave", function () {
    dropdownContent.style.display = "none";
  });
});
