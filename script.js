// Scroll Reveal Animation (FIXED)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -80px 0px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // ✅ prevents bugs
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  observer.observe(el);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("opacity-100", window.scrollY > 300);
    backToTop.classList.toggle("visible", window.scrollY > 300);
    backToTop.classList.toggle("opacity-0", window.scrollY <= 300);
    backToTop.classList.toggle("invisible", window.scrollY <= 300);
  });
}

// Skill Bar Animation
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-progress").forEach((bar) => {
          const width = bar.style.width;
          bar.style.width = "0%";
          setTimeout(() => (bar.style.width = width), 100);
        });
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".scroll-reveal").forEach((el) => {
  if (el.querySelector(".skill-progress")) {
    skillObserver.observe(el);
  }
});
