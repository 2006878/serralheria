(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Site em desenvolvimento ativo: um service worker antigo (cache
  // primeiro) pode prender o navegador numa versão desatualizada do
  // site indefinidamente. Em vez de registrar, removemos qualquer
  // service worker e cache já instalados a partir de visitas
  // anteriores, garantindo que o navegador sempre busque a versão
  // atual na rede.
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (regs) {
      regs.forEach(function (reg) {
        reg.unregister();
      });
    });
  }

  if (window.caches && caches.keys) {
    caches.keys().then(function (names) {
      names.forEach(function (name) {
        caches.delete(name);
      });
    });
  }
})();
