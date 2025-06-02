function initMapFunctionality() {
  const branches = {
    hcm: {
      gv: {
        name: "Chi nhánh Gò Vấp, HCM",
        address: "150 Nguyễn Duy Cung, phường 15, quận Gò Vấp, HCM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.067101477198!2d106.65084527505452!3d10.806773358722838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299c56f52a17%3A0x3c07e2c5f8d240fa!2zMTUwIE5ndXnhu4VuIER1eSBDdW5nLCBQaMaw4budbmcgMTUsIEfDsiBW4bqhcCwgSMOgIE7hu5lpIDEwMDAw!5e0!3m2!1svi!2s!4v1716952071036!5m2!1svi!2s",
      },
      pn: {
        name: "Chi nhánh Phú Nhuận, HCM",
        address: "95 Phan Đăng Lưu, Phú Nhuận, HCM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.324953083773!2d106.6794163153383!3d10.794837261798452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d4d07d0a8f%3A0x6b2f4e5e9a9f8e3d!2s95%20Phan%20%C4%90%C4%83ng%20L%C6%B0u%2C%20Ph%C3%BA%20Nhu%E1%BA%ADn%2C%20HCM!5e0!3m2!1svi!2s!4v1716953000000!5m2!1svi!2s",
      },
      q1: {
        name: "Chi nhánh Quận 1, HCM",
        address: "25 Lý Tự Trọng, Quận 1, HCM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.30123456789!2d106.69876543210987!3d10.796543210987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529abcdef123%3A0x1234567890abcdef!2s25%20L%C3%BD%20T%E1%BB%B1%20Tr%E1%BB%8Dng%2C%20Qu%E1%BA%ADn%201%2C%20HCM!5e0!3m2!1svi!2s!4v1716954000000!5m2!1svi!2s",
      },
      q10: {
        name: "Chi nhánh Quận 10, HCM",
        address: "456 Lê Hồng Phong, Quận 10, HCM",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.456789012345!2d106.66789012345678!3d10.77890123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529fedcba9876%3A0x543210abcdef1234!2s456%20L%C3%AA%20H%E1%BB%93ng%20Phong%2C%20Qu%E1%BA%ADn%2010%2C%20HCM!5e0!3m2!1svi!2s!4v1716955000000!5m2!1svi!2s",
      },
    },
    hn: {
      bd: {
        name: "Chi nhánh Ba Đình, HN",
        address: "123 Đội Cấn, Ba Đình, Hà Nội",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.123456789012!2d105.81234567890123!3d21.034567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abcdef123456%3A0x9876543210abcdef!2s123%20%C4%90%E1%BB%99i%20C%E1%BA%A5n%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1716956000000!5m2!1svi!2s",
      },
      cg: {
        name: "Chi nhánh Cầu Giấy, HN",
        address: "234 Cầu Giấy, Hà Nội",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9876543210987!2d105.79876543210987!3d21.012345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc123456789%3A0x987654321fedcba0!2s234%20C%E1%BA%A7u%20Gi%E1%BA%A5y%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1716957000000!5m2!1svi!2s",
      },
      ht: {
        name: "Chi nhánh Hàng Trống, HN",
        address: "12 Hàng Trống, Hoàn Kiếm, Hà Nội",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.012345678901!2d105.85432109876543!3d21.023456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc987654321%3A0xfedcba9876543210!2s12%20H%C3%A0ng%20Tr%E1%BB%91ng%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1716958000000!5m2!1svi!2s",
      },
    },
  };

  function setupMap() {
    const citySelect = document.getElementById("city");
    const branchHCM = document.getElementById("branch-hcm");
    const branchHN = document.getElementById("branch-hn");
    const groupHCM = document.getElementById("branches-hcm");
    const groupHN = document.getElementById("branches-hn");
    const addressText = document.getElementById("address-text");
    const mapIframe = document.getElementById("store-map-iframe");

    function updateVisibility(city) {
      groupHCM.style.display = city === "hcm" ? "block" : "none";
      groupHN.style.display = city === "hn" ? "block" : "none";

      if (city === "hcm") {
        updateStoreInfo("hcm", branchHCM.value);
      } else {
        updateStoreInfo("hn", branchHN.value);
      }
    }

    function updateStoreInfo(city, branchKey) {
      const branch = branches[city][branchKey];
      if (branch && addressText && mapIframe) {
        addressText.textContent = branch.address;
        mapIframe.src = branch.map;
      }
    }

    // Thêm sự kiện nếu các phần tử tồn tại
    if (citySelect) {
      citySelect.addEventListener("change", () => {
        updateVisibility(citySelect.value);
      });
    }

    if (branchHCM) {
      branchHCM.addEventListener("change", () => {
        updateStoreInfo("hcm", branchHCM.value);
      });
    }

    if (branchHN) {
      branchHN.addEventListener("change", () => {
        updateStoreInfo("hn", branchHN.value);
      });
    }

    // Khởi tạo ban đầu
    if (citySelect) {
      updateVisibility(citySelect.value);
    }
  }

  // Chờ cho đến khi DOM được tải hoàn toàn
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMap);
  } else {
    setupMap();
  }
}

// Gọi hàm khởi tạo
initMapFunctionality();
