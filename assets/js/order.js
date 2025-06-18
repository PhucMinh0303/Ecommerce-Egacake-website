document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  const checkByRadios = document.querySelectorAll('input[name="checkby"]');
  const inputLabel = document.getElementById("input-label");
  const inputField = document.querySelector(".numbertext");
  const orderList = document.querySelector(".order-list");
  const resultBox = document.getElementById("result");

  // Initially hide the order list section
  orderList.style.display = "none";

  // Add event listeners for radio buttons
  checkByRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "phone") {
        inputLabel.textContent = "Số điện thoại";
        inputField.placeholder = "0909 xxx xxx";
      } else if (this.value === "email") {
        inputLabel.textContent = "Email";
        inputField.placeholder = "example@domain.com";
      }
    });
  });
});

function checkOrder() {
  const inputField = document.querySelector(".numbertext");
  const orderList = document.querySelector(".order-list");
  const resultBox = document.getElementById("result");

  // Get the search value and type
  const searchValue = inputField.value.trim();
  const searchType = document.querySelector(
    'input[name="checkby"]:checked'
  ).value;

  // Validate input
  if (!searchValue) {
    alert("Vui lòng nhập thông tin để kiểm tra");
    return;
  }

  // Show the order list section
  orderList.style.display = "block";

  // Here you would typically make an AJAX call to your backend
  // For this example, we'll just simulate a response

  // Simulate API call with timeout
  setTimeout(() => {
    // This is where you would process the real data from your backend
    // For now, we'll just show the "no data found" message
    resultBox.innerHTML = `
            <p>Không tìm thấy dữ liệu đơn hàng</p>
            <i class="fa-solid fa-credit-card"></i>
        `;

    // If you had real data, you would display it here
    // For example:
    /*
        if (orders.length > 0) {
            let html = '<div class="order-items">';
            orders.forEach(order => {
                html += `
                    <div class="order-item">
                        <p>Mã đơn hàng: ${order.id}</p>
                        <p>Ngày đặt: ${order.date}</p>
                        <p>Tổng tiền: ${order.total}</p>
                        <p>Trạng thái: ${order.status}</p>
                    </div>
                `;
            });
            html += '</div>';
            resultBox.innerHTML = html;
        } else {
            resultBox.innerHTML = `
                <p>Không tìm thấy dữ liệu đơn hàng</p>
                <i class="fa-solid fa-credit-card"></i>
            `;
        }
        */
  }, 500);
}
