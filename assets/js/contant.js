// Chức năng thêm tệp hình và video
function initContactForm() {
  // 1. Xử lý phần đính kèm file
  const attachButton = document.querySelector(".attach-button");
  const fileInput = document.getElementById("file-input");
  const previewArea = document.querySelector(".attachments-preview");

  if (attachButton && fileInput && previewArea) {
    attachButton.addEventListener("click", () => fileInput.click());

    fileInput.addEventListener("change", (e) => {
      const files = e.target.files;

      for (let file of files) {
        if (!file.type.match("image.*") && !file.type.match("video.*")) {
          alert("Chỉ chấp nhận file hình ảnh hoặc video!");
          continue;
        }

        if (file.size > 25 * 1024 * 1024) {
          alert(`File ${file.name} vượt quá kích thước cho phép (25MB)!`);
          continue;
        }

        if (file.type.match("image.*")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const previewElement = createPreviewElement(file, e.target.result);
            previewArea.appendChild(previewElement);
          };
          reader.readAsDataURL(file);
        } else {
          createVideoThumbnail(file, (thumbnailUrl) => {
            const previewElement = createPreviewElement(file, thumbnailUrl);
            previewArea.appendChild(previewElement);
          });
        }
      }
    });
  }

  // 2. Gửi form
  const sendBtn = document.querySelector(".send-btn");
  if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
      e.preventDefault();
      validateAndSubmitForm();
    });
  }

  // 3. Thumbnail video
  function createVideoThumbnail(videoFile, callback) {
    const video = document.createElement("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    video.preload = "metadata";
    video.onloadedmetadata = () => {
      canvas.width = 160;
      canvas.height = 90;
      video.currentTime = 1;
    };

    video.onseeked = () => {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      callback(canvas.toDataURL());
    };

    video.src = URL.createObjectURL(videoFile);
  }

  // 4. Tạo preview
  function createPreviewElement(file, src) {
    const preview = document.createElement("div");
    preview.style = `
      width: 160px; height: 120px; position: relative;
      border: 1px solid #ddd; border-radius: 4px; overflow: hidden;
    `;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
    deleteBtn.style = `
      position: absolute; top: 5px; right: 5px; background: rgba(0,0,0,0.5);
      color: white; border: none; border-radius: 50%; width: 24px;
      height: 24px; cursor: pointer; display: flex; align-items: center;
      justify-content: center;
    `;
    deleteBtn.addEventListener("click", () => preview.remove());

    if (file.type.match("image.*")) {
      const img = document.createElement("img");
      img.src = src;
      img.style = "width: 100%; height: 100%; object-fit: cover;";
      preview.appendChild(img);
    } else if (file.type.match("video.*")) {
      const thumb = document.createElement("img");
      thumb.src = src;
      thumb.style = "width: 100%; height: 100%; object-fit: cover;";

      const icon = document.createElement("div");
      icon.innerHTML =
        '<i class="fa-solid fa-play" style="font-size: 24px; color: white;"></i>';
      icon.style = `
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.5); border-radius: 50%;
        width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
      `;

      preview.appendChild(thumb);
      preview.appendChild(icon);
    }

    const info = document.createElement("div");
    info.textContent = file.name;
    info.style = `
      position: absolute; bottom: 0; left: 0; right: 0;
      background: rgba(0,0,0,0.7); color: white; padding: 4px;
      font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    `;

    preview.appendChild(info);
    preview.appendChild(deleteBtn);

    return preview;
  }

  // 5. Validate form
  function validateAndSubmitForm() {
    const name = document.querySelector('input[placeholder="Nhập họ tên (*)"]');
    const phone = document.querySelector(
      'input[placeholder="Nhập số điện thoại (*)"]'
    );
    const captcha = document.querySelector(
      'input[placeholder="Nhập mã bảo mật (*)"]'
    );

    let valid = true;

    if (!name?.value.trim()) {
      alert("Vui lòng nhập họ tên");
      valid = false;
    }

    const phoneRegex = /^(0|\+84)[1-9][0-9]{8}$/;
    if (!phone?.value.trim()) {
      alert("Vui lòng nhập số điện thoại");
      valid = false;
    } else if (!phoneRegex.test(phone.value)) {
      alert("Số điện thoại không hợp lệ");
      valid = false;
    }

    if (!captcha?.value.trim()) {
      alert("Vui lòng nhập mã bảo mật");
      valid = false;
    }

    if (valid) {
      alert("Form đã được gửi thành công!");
      document.querySelector(".contact-form").reset();
      previewArea.innerHTML = "";
    }
  }

  console.log("Contact form initialized");
}

// Gọi sau khi nội dung đã được chèn vào DOM
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  setTimeout(initContactForm, 100); // Đợi một chút để chắc chắn nội dung đã chèn
} else {
  document.addEventListener("DOMContentLoaded", initContactForm);
}
