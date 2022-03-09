// document.querySelectorAll()
//forEach()
//addEventListener()
//currentTarget : Actua Event.currentTarget identifica el target actual del evento
//classList
//textContent 
let contador = 0;
document.getElementById("numero").textContent = contador;

let numero = document.getElementById("numero");

let botones = document.querySelectorAll(".boton");

//botones.forEach(element => element.addEventListener("click",contar()));
botones.forEach(function(element){
//  element.addEventListener("click", contar(element))
  element.addEventListener("click", function(e){
    let botonpresionado = e.currentTarget.classList;
    
    if(botonpresionado.contains("breset")){
        numero.textContent = 0;
        contador = 0;
        console.log("reset");
        
    }else{
        if(botonpresionado.contains("baumentar")){
           
            contador++;
            numero.textContent = contador;
         
            
        }else{
            contador--;
            numero.textContent = contador;
            
        }
    }
    
  })
});

