//Revelar
const elementos = document.querySelectorAll('.revelar');

function mostrarElemento() {
  elementos.forEach(el => {
    const topElemento = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (topElemento < alturaPantalla - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarElemento);

//Cambiar imagen
const imagen = document.getElementById("scrollfor");

imagen.addEventListener("mouseover", () => {
  imagen.src = "00_Recursosfinales/flecha.png";
});
imagen.addEventListener("mouseout", () => {
  imagen.src = "00_Recursosfinales/scrollforfun.png";
});


//Efecto arrastrar por toda la pantalla

const draggable = document.getElementById("pincel");

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  // PC
  draggable.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - draggable.offsetLeft;
    offsetY = e.clientY - draggable.offsetTop;
    draggable.style.cursor = "grabbing";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      draggable.style.left = (e.clientX - offsetX) + "px";
      draggable.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    draggable.style.cursor = "grab";
  });

  // MÓVIL
  draggable.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - draggable.offsetLeft;
    offsetY = touch.clientY - draggable.offsetTop;
  });

  document.addEventListener("touchmove", (e) => {
    if (isDragging) {
      const touch = e.touches[0];
      draggable.style.left = (touch.clientX - offsetX) + "px";
      draggable.style.top = (touch.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("touchend", () => {
    isDragging = false;
  });

//Girar y scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const rotation = scrollY / 2; // Ajusta este divisor para la velocidad del giro

  document.querySelectorAll(".img-gira").forEach(el => {
    el.style.transform = `rotate(${rotation}deg)`;
  });
});