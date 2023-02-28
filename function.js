function time() {
var d = new Date();
document.getElementById("hora").innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);

