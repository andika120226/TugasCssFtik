// Download Files Page JavaScript
class DownloadFilesManager {
  constructor() {
    this.currentCategory = "statement-letter";
    this.init();
  }

  init() {
    // Set initial active category
    this.showCategory(this.currentCategory);

    // Add click handlers to all category items
    document.querySelectorAll(".category-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.category;
        this.switchCategory(category);
      });
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
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
  }

  switchCategory(categoryId) {
    // Update active category
    this.currentCategory = categoryId;

    // Update sidebar
    document.querySelectorAll(".category-item").forEach((item) => {
      item.classList.remove("active");
    });
    document
      .querySelector(`[data-category="${categoryId}"]`)
      .classList.add("active");

    // Show corresponding content
    this.showCategory(categoryId);
  }

  showCategory(categoryId) {
    // Hide all content sections
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });

    // Show selected content section
    const targetSection = document.getElementById(categoryId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new DownloadFilesManager();
});

// Navigation functions
function home() {
  location.href = "Home.html";
}

function profil() {
  location.href = "Profil.html";
}

function academic() {
  location.href = "Academic.html";
}

function facility() {
  location.href = "Facility.html";
}

function admission() {
  location.href = "Admission.html";
}

function scholarship() {
  location.href = "Scholarship.html";
}

function studentAffairs() {
  location.href = "StudentAffairs.html";
}

function onlineApplicationForm() {
  location.href = "OnlineApplicationForm.html";
}

function downloadFiles() {
  location.href = "DownloadFiles.html";
}
