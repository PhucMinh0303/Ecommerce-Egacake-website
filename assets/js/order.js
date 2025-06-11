function checkOrder() {
  const input = document.getElementById("input").value.trim();
  const resultBox = document.getElementById("result");

  // Giả định dữ liệu rỗng để demo
  if (input === "") {
    alert("Vui lòng nhập thông tin để kiểm tra!");
    resultBox.style.display = "none";
    return;
  }

  // Ví dụ: kiểm tra nếu không khớp dữ liệu
  const fakeOrders = []; // không có đơn hàng
  const found = fakeOrders.includes(input);

  if (!found) {
    resultBox.style.display = "block";
  } else {
    resultBox.innerHTML = "<p>Đã tìm thấy đơn hàng của bạn!</p>";
    resultBox.style.display = "block";
  }
}

// Cập nhật label khi chuyển radio
document.querySelectorAll('input[name="checkby"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const label = document.getElementById("input-label");
    const input = document.getElementById("input");
    if (this.value === "phone") {
      label.innerText = "Số điện thoại";
      input.placeholder = "0909 xxx xxx";
    } else {
      label.innerText = "Email";
      input.placeholder = "email@example.com";
    }
  });
});
