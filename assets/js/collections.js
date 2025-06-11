// collections.js
document.addEventListener("DOMContentLoaded", function () {
  // Load các phần header, footer và nội dung chính
  loadHeader();
  loadFooter();
  loadMainContent();

  // Khởi tạo sự kiện phân trang
  initPagination();
});

function loadHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
}

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
}

function loadMainContent() {
  fetch("maincollections.html")
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById("maincollections-placeholder");
      container.innerHTML = data;

      // Sau khi load xong nội dung chính, khởi tạo lại sự kiện phân trang
      initPagination();
    });
}

function initPagination() {
  const pages = document.querySelectorAll(".pagination .page");

  pages.forEach((page) => {
    page.addEventListener("click", function (e) {
      e.preventDefault();

      // Xóa class active khỏi tất cả các nút
      pages.forEach((p) => p.classList.remove("active"));

      // Thêm class active vào nút được click
      this.classList.add("active");

      // Lấy số trang
      const pageNumber = this.textContent;

      // Load sản phẩm cho trang được chọn
      loadProducts(pageNumber);
    });
  });
}

function loadProducts(page) {
  // Hiển thị loading
  showLoading();

  // Giả lập API call (thay bằng API thật của bạn)
  setTimeout(() => {
    // Đây là dữ liệu giả, thay bằng API thật
    const mockProducts = [
      {
        image: "assets/img/products/Banh-Kem-Tira-Kieu-2.jpg",
        name: "Bánh kem Tiramisu 5 vị",
        price: 500000,
        oldPrice: 1000000,
        discount: 50,
      },
      // Thêm các sản phẩm khác...
    ];

    updateProductList(mockProducts);
  }, 500);
}

function showLoading() {
  const productList = document.querySelector(".product-list-collection");
  if (productList) {
    productList.innerHTML = '<div class="loading">Đang tải sản phẩm...</div>';
  }
}

function updateProductList(products) {
  const productList = document.querySelector(".product-list-collection");
  if (!productList) return;

  let html = "";
  products.forEach((product) => {
    html += `
            <a href="product.html">
                <div class="product-card-collection">
                    <img src="${product.image}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p class="new-price">${formatPrice(product.price)}</p>
                    <div>
                        <span class="old-price">${formatPrice(
                          product.oldPrice
                        )}</span>
                        <span class="discount">-${product.discount}%</span>
                    </div>
                    <div class="cart-icon"><i class="fas fa-shopping-bag"></i></div>
                </div>
            </a>
        `;
  });

  productList.innerHTML = html;
}

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}
