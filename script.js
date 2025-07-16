// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Form submission handling
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Get input values
      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }
  
      // Simulate sending
      formMessage.textContent = "Sending...";
      formMessage.style.color = "black";
  
      setTimeout(() => {
        formMessage.textContent = "Your message has been sent!";
        formMessage.style.color = "green";
        contactForm.reset();
      }, 1000);
    });
  
    // Show certificates on button click
    const showCertificatesBtn = document.getElementById("showCertificatesBtn");
    if (showCertificatesBtn) {
      showCertificatesBtn.addEventListener("click", function () {
        const gallery = document.getElementById("certificatesGallery");
        gallery.style.display = "grid";
        this.style.display = "none";
      });
    }
  
    // Read More toggle for Green Valsad section
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreContent = document.getElementById("moreContent");
  
    if (readMoreBtn && moreContent) {
      readMoreBtn.addEventListener("click", function () {
        moreContent.classList.toggle("hidden");
        readMoreBtn.textContent = moreContent.classList.contains("hidden")
          ? "Read More"
          : "Read Less";
      });
    }
  });
  // Certificate lightbox functions
function openLightbox(src) {
  const overlay = document.getElementById("lightboxOverlay");
  const image = document.getElementById("lightboxImage");
  image.src = src;
  overlay.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightboxOverlay").style.display = "none";
}

  
  
    