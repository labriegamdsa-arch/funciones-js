const imagen = document.getElementById("imagen");

function pintar(elemento,color = "green"){
  if (elemento.style.backgroundColor === "yellow") {
        elemento.style.backgroundColor = color;
        return elemento;
    } else {
        elemento.style.backgroundColor = "yellow";
        return elemento;    
}
}
const ele = document.getElementById("elemento");
ele.addEventListener("click", function(){
    pintar(ele,"green");
});

   
