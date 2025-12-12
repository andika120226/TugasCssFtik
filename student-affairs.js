// Student Affairs Carousel and Navigation Functions

class StudentAffairsCarousel {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
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
    if (this.prevBtn) this.prevBtn.addEventListener("click", () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener("click", () => this.next());

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Initialize
    this.updateCarousel();

    // Auto-play (optional)
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
    }, 5000);
  }
}

// Initialize carousel when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new StudentAffairsCarousel("carouselContainer");
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
