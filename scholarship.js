// Scholarship Page Carousel Functionality

class ScholarshipCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.carousel = this.container.querySelector(".carousel");
    this.items = this.container.querySelectorAll(".carousel-item");
    this.dots = this.container.querySelectorAll(".dot");
    this.prevBtn = this.container.querySelector(".carousel-btn.prev");
    this.nextBtn = this.container.querySelector(".carousel-btn.next");
    this.counter = this.container.querySelector(".carousel-counter");

    this.currentIndex = 0;
    this.totalItems = this.items.length;

    this.init();
  }

  init() {
    // Add event listeners
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.next());
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prev();
      if (e.key === "ArrowRight") this.next();
    });

    // Touch/Swipe support
    let startX = 0;
    let endX = 0;

    this.carousel.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.carousel.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) this.next();
      if (startX < endX - 50) this.prev();
    });

    // Initialize carousel
    this.updateCarousel();

    // Optional: Auto-play (uncomment to enable)
    // this.autoPlay();
  }

  updateCarousel() {
    // Update carousel position
    const offset = -this.currentIndex * 100;
    this.carousel.style.transform = `translateX(${offset}%)`;

    // Update dots
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });

    // Update counter
    if (this.counter) {
      this.counter.textContent = `${this.currentIndex + 1} / ${
        this.totalItems
      }`;
    }

    // Update button states
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentIndex === 0;
    }
    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentIndex === this.totalItems - 1;
    }
  }

  next() {
    if (this.currentIndex < this.totalItems - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  goToSlide(index) {
    if (index >= 0 && index < this.totalItems) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  }

  autoPlay() {
    setInterval(() => {
      if (this.currentIndex < this.totalItems - 1) {
        this.next();
      } else {
        this.currentIndex = 0;
        this.updateCarousel();
      }
    }, 5000); // 5 seconds
  }
}

// Initialize carousel when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new ScholarshipCarousel("scholarshipCarousel");
});

// Navigation functions
function home() {
  window.location.href = "Home.html";
}

function profil() {
  window.location.href = "Profil.html";
}

function academic() {
  window.location.href = "Academic.html";
}

function facility() {
  window.location.href = "Facility.html";
}

function admission() {
  window.location.href = "Admission.html";
}

function scholarship() {
  window.location.href = "Scholarship.html";
}

function studentAffairs() {
  window.location.href = "StudentAffairs.html";
}

function onlineApplicationForm() {
  window.location.href = "OnlineApplicationForm.html";
}

function downloadFiles() {
  window.location.href = "DownloadFiles.html";
}

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
