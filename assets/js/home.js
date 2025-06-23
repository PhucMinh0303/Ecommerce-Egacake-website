const productsData = {
  cupcakes: [
    {
      name: "Bánh sweet love cupcakes",
      price: "190.000đ",
      img: "cupcake1.png",
    },
    { name: "Bánh blue sky cupcakes", price: "190.000đ", img: "cupcake2.png" },
    {
      name: "Bánh red sugar flower cupcakes",
      price: "190.000đ",
      img: "cupcake3.png",
    },
    { name: "Bánh sangria cupcakes", price: "190.000đ", img: "cupcake4.png" },
  ],
  "banh-can-lop": [
    {
      name: "Bánh tổ ong kèm kem vani",
      price: "119.000đ",
      img: "Honeycomb-cake-with-vanilla-ice-cream.webp",
    },
    {
      name: "Bánh mặt dâu tây",
      price: "59.000đ",
      img: "Strawberry-Face-Cake.webp",
    },
    {
      name: "Bánh sừng bò phủ chocolate",
      price: "89.000đ",
      img: "Chocolate-covered-croissants.webp",
    },
    {
      name: "Bánh cuộn kem chocolate",
      price: "69.000đ",
      img: "Chocolate-Cream-Roll-Cake.webp",
    },
  ],
  "banh-cuon": [
    {
      name: "Bánh Chocolate Raspberry Cupcakes",
      price: "105.000đ",
      img: "chocolate-raspberry-cupcakes.webp",
    },
    { name: "Bánh Cupcake Glory", price: "99.000đ", img: "cupcake-glory.webp" },
    {
      name: "Bánh Cupcake Queen",
      price: "109.000đ",
      img: "Cupcake-queen.webp",
    },
    {
      name: "Bánh Pumpkin Spice Cupcakes",
      price: "115.000đ",
      img: "pumpkin-spice-cupcakes.webp",
    },
  ],
};

const buttons = document.querySelectorAll(".filters button");
const grid = document.getElementById("product-grid");

function updateGrid(category) {
  grid.innerHTML = productsData[category]
    .map(
      (item) => `
      <div class="product2">
        <img src="../assets/img/products/${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p class="new-price">${item.price}</p>
        <div class="cart-icon"><i class="fas fa-shopping-bag"></i></div>
      </div>
    `
    )
    .join("");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");
    updateGrid(filter);
  });
});

// Load mặc định
updateGrid("cupcakes");

// Thay đổi hình trong banner-slider
document.addEventListener("DOMContentLoaded", function () {
  // Danh sách hình ảnh - thay bằng đường dẫn thực tế
  const images = [
    "../assets/img/section/section-home.png",
    "../assets/img/section/section-home.png",
    "../assets/img/section/section-home.png",
  ];

  // Kiểm tra và khởi tạo các phần tử DOM
  const bannerImg = document.getElementById("banner-img");
  const prevBtn = document.querySelector(".nav.prev");
  const nextBtn = document.querySelector(".nav.next");

  // Xử lý lỗi nếu không tìm thấy các phần tử
  if (!bannerImg || !prevBtn || !nextBtn) {
    console.error("Không tìm thấy một hoặc nhiều phần tử cần thiết");
    return;
  }

  let currentIndex = 0;

  // Hàm cập nhật hình ảnh
  function updateImage() {
    bannerImg.src = images[currentIndex];
    bannerImg.alt = `Banner ${currentIndex + 1}`;

    // Hiệu ứng fade in/out
    bannerImg.style.opacity = 0;
    setTimeout(() => {
      bannerImg.style.opacity = 1;
    }, 100);
  }

  // Sự kiện click nút previous
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  // Sự kiện click nút next
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  // Tự động chuyển ảnh mỗi 5 giây (tuỳ chọn)
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  }, 5000);

  // Dừng tự động chuyển khi hover
  const bannerContainer =
    bannerImg.closest(".banner3") || bannerImg.parentElement;
  bannerContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
  });

  // Tiếp tục tự động chuyển khi rời chuột
  bannerContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }, 5000);
  });

  // Khởi tạo slider
  updateImage();
});
