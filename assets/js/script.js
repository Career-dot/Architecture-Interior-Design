

document.addEventListener("DOMContentLoaded", function () {

  var navbar = document.querySelector(".site-navbar");
  if (navbar) {
    var toggleNavbarState = function () {
      if (window.scrollY > 40) {
        navbar.classList.add("is-scrolled");
      } else {
        navbar.classList.remove("is-scrolled");
      }
    };
    toggleNavbarState();
    window.addEventListener("scroll", toggleNavbarState, { passive: true });
  }

  var navCollapse = document.getElementById("siteNav");
  if (navCollapse) {
    navCollapse.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapse.classList.contains("show") && window.bootstrap) {
          var instance = window.bootstrap.Collapse.getOrCreateInstance(navCollapse);
          instance.hide();
        }
      });
    });
  }

  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var filterButtons = document.querySelectorAll("[data-filter]");
  var portfolioItems = document.querySelectorAll("[data-category]");
  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        filterButtons.forEach(function (b) { b.classList.remove("btn-brass", "active"); b.classList.add("btn-outline-ink"); });
        button.classList.add("btn-brass", "active");
        button.classList.remove("btn-outline-ink");

        var filter = button.getAttribute("data-filter");
        portfolioItems.forEach(function (item) {
          var show = filter === "all" || item.getAttribute("data-category") === filter;
          item.style.display = show ? "" : "none";
        });
      });
    });
  }

  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        var confirmation = form.querySelector(".form-confirmation");
        if (confirmation) {
          confirmation.classList.remove("d-none");
          form.reset();
          form.classList.remove("was-validated");
        }
      }
      form.classList.add("was-validated");
    });
  });

});
