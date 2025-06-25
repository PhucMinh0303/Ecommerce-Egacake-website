document.addEventListener("DOMContentLoaded", function () {
  const quantityControls = document.querySelectorAll(".quantity");

  quantityControls.forEach((control) => {
    const input = control.querySelector("input");
    const decreaseBtn = control.querySelector(".decrease");
    const increaseBtn = control.querySelector(".increase");

    // Hàm validate giá trị
    const validateValue = (value) => {
      const numValue = value.replace(/\D/g, "");
      return numValue === "" || parseInt(numValue) < 1 ? 1 : parseInt(numValue);
    };

    // Xử lý sự kiện
    decreaseBtn.addEventListener("click", () => {
      const currentValue = validateValue(input.value);
      if (currentValue > 1) input.value = currentValue - 1;
    });

    increaseBtn.addEventListener("click", () => {
      const currentValue = validateValue(input.value);
      input.value = currentValue + 1;
    });

    input.addEventListener("input", () => {
      input.value = validateValue(input.value);
    });
  });
});
