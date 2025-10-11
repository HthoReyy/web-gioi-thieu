// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorBox = document.getElementById("formError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  form.addEventListener("submit", (e) => {
    errorBox.textContent = "";
    const errors = [];

    if (!nameInput.value.trim()) errors.push("• Tên không được để trống");
    if (!emailRegex.test(emailInput.value.trim()))
      errors.push("• Email không đúng định dạng");
    if (messageInput.value.trim().length < 10)
      errors.push("• Nội dung phải ít nhất 10 ký tự");

    if (errors.length > 0) {
      e.preventDefault();
      errorBox.innerHTML = errors.join("<br>");
      return;
    }

    alert("Cảm ơn bạn! Thông tin đã được gửi.");
  });

// Hiệu ứng bảng mục tiêu
  const goalCheckboxes = document.querySelectorAll(".goal-checkbox");
  goalCheckboxes.forEach((cb) => {
    const tr = cb.closest("tr");
    cb.addEventListener("change", () => {
      if (cb.checked) {
        tr.style.backgroundColor = "#c6f5c6";
        tr.style.textDecoration = "line-through";
      } else {
        tr.style.backgroundColor = "";
        tr.style.textDecoration = "";
      }
    });
  });

// Hiệu ứng avatar
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.addEventListener("mouseover", () => {
      avatar.style.transform = "scale(1.05)";
      avatar.style.transition = "transform 0.3s";
      avatar.style.border = "3px solid #0b0848";
    });
    avatar.addEventListener("mouseout", () => {
      avatar.style.transform = "scale(1)";
      avatar.style.border = "none";
    });
  }

// Nút lên đầu trang
  const backBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) backBtn.style.display = "block";
    else backBtn.style.display = "none";
  });

  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
