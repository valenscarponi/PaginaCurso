function navegacionFija() {
  const e = document.querySelector(".header"),
    t = document.querySelector(".sobre-festival");
  document.addEventListener("scroll", function () {
    t.getBoundingClientRect().bottom < 1
      ? e.classList.add("fixed")
      : e.classList.remove("fixed");
  });
}
function crearGaleria() {
  const e = document.querySelector(".galeria-imagenes");
  for (let t = 1; t <= 16; t++) {
    const c = document.createElement("IMG");
    (c.loading = "lazy"),
      (c.width = "300"),
      (c.height = "200"),
      (c.src = `src/img/gallery/thumb/${t}.jpg`),
      (c.alt = "Imagen Galeria"),

    imagen.innerHTML = `
    <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
    `;
      (c.onclick = function () {
        mostrarImagen(t);
      }),
      e.appendChild(c);
  }
}
function mostrarImagen(e) {
  const t = document.createElement("PICTURE");
  imagen.innerHTML = `
  <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
  <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
  <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
    `;
  const c = document.createElement("DIV");
  c.classList.add("modal"), (c.onclick = cerrarModal), c.appendChild(t);
  const n = document.createElement("BUTTON");
  (n.textContent = "X"),
    n.classList.add("btn-cerrar"),
    (n.onclick = cerrarModal),
    c.appendChild(t),
    c.appendChild(n);
  const o = document.querySelector("body");
  o.classList.add("overflow-hidden"), o.appendChild(c);
}
function cerrarModal() {
  const e = document.querySelector(".modal");
  e.classList.add("fadeOut"),
    setTimeout(() => {
      e?.remove();
      document.querySelector("body").classList.remove("overflow-hidden");
    }, 500);
}
function resaltarEnlace() {
  document.addEventListener("scroll", function () {
    const e = document.querySelectorAll("section"),
      t = document.querySelectorAll(".navegacion-principal a");
    let c = "";
    e.forEach((e) => {
      const t = e.offsetTop,
        n = e.clientHeight;
      window.scrollY >= t - n / 3 && (c = e.id);
    }),
      t.forEach((e) => {
        e.classList.remove("active"),
          e.getAttribute("href") === "#" + c && e.classList.add("active");
      });
  });
}
function scrollNav() {
  document.querySelectorAll(".navegacion-principal a").forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      const t = e.target.getAttribute("href");
      document.querySelector(t).scrollIntoView({ behavior: "smooth" });
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  navegacionFija(), crearGaleria(), resaltarEnlace(), scrollNav();
});
