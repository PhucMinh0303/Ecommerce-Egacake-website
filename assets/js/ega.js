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
