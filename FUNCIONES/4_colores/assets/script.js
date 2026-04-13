

const divs = document.querySelectorAll("#div1, #div2, #div3, #div4")

divs.forEach(div => {


  div.dataset.colorOriginal = div.style.backgroundColor

  div.addEventListener("click", function(){

    if(div.style.backgroundColor === "black"){
      div.style.backgroundColor = div.dataset.colorOriginal
    } else {
      div.style.backgroundColor = "black"
    }

  })

})

let color = ""


document.addEventListener("keydown", function(event){

  const keyDiv = document.getElementById("key")

  if(event.key === "a"){
    color = "pink"
    keyDiv.style.backgroundColor = color

  } else if(event.key === "s"){
    color = "orange"
    keyDiv.style.backgroundColor = color

  } else if(event.key === "d"){
    color = "skyblue"
    keyDiv.style.backgroundColor = color

  } else if(event.key === "q"){
    crearDiv("purple")

  } else if(event.key === "w"){
    crearDiv("gray")

  } else if(event.key === "e"){
    crearDiv("brown")
  }

})
function crearDiv(color){
  const nuevoDiv = document.createElement("div")

  nuevoDiv.style.width = "200px"
  nuevoDiv.style.height = "200px"
  nuevoDiv.style.backgroundColor = color
  nuevoDiv.style.marginTop = "10px"


  nuevoDiv.dataset.colorOriginal = color

  nuevoDiv.addEventListener("click", function(){

    if(nuevoDiv.style.backgroundColor === "black"){
      nuevoDiv.style.backgroundColor = nuevoDiv.dataset.colorOriginal
    } else {
      nuevoDiv.style.backgroundColor = "black"
    }

  })
document.querySelector(".colores").appendChild(nuevoDiv)
}
