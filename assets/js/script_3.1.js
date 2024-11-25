const divAzul = document.getElementById("divAzul");
const divRojo = document.getElementById("divRojo");
const divVerde = document.getElementById("divVerde");
const divAmarillo = document.getElementById("divAmarillo");

divAzul.style.width = "200px";
divAzul.style.height = "200px";
divAzul.style.backgroundColor = "blue";
divAzul.style.color = "white";

divRojo.style.width = "200px";
divRojo.style.height = "200px";
divRojo.style.backgroundColor = "red";
divRojo.style.color = "white";

divVerde.style.width = "200px";
divVerde.style.height = "200px";
divVerde.style.backgroundColor = "green";
divVerde.style.color = "white";

divAmarillo.style.width = "200px";
divAmarillo.style.height = "200px";
divAmarillo.style.backgroundColor = "yellow";
divAmarillo.style.color = "white";

const pintarNegro = (Event) => {
  Event.target.style.backgroundColor = "black";
};

divAzul.addEventListener("click", pintarNegro);
divRojo.addEventListener("click", pintarNegro);
divVerde.addEventListener("click", pintarNegro);
divAmarillo.addEventListener("click", pintarNegro);
