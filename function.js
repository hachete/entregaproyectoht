function time() {
var d = new Date();
document.getElementById("hora").innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);





const barras = document.querySelectorAll('.barra');

window.addEventListener('scroll', () => {
  const alturaVentana = window.innerHeight;
  barras.forEach(barra => {
    const posicionBarra = barra.getBoundingClientRect().top;
    if (posicionBarra - alturaVentana <= 0) {
      const anchoBarra = barra.getAttribute('data-ancho');
      barra.style.width = anchoBarra;
    }
  });
});
