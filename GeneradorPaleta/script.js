
let array = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
let colores = ["red", "blue", "green","yellow","black","white","#555555","#121212"];
let boton = document.getElementById("boton");
let pizarra = document.getElementById("pizarra");
generarPaletaDefault();
boton.addEventListener("click", generarPaletaDefault);

function generarPaletaDefault(){
        let lista = document.querySelectorAll(".content-color");
        let listaParrafos = document.querySelectorAll(".numero-color");
        for(let i = 0; i < lista.length; i++){
            let random =  generadorNumeroColor();
            listaParrafos[i].innerHTML = random;
            lista[i].style.backgroundColor = random;
        }    
}

function generadorNumeroColor(){
    let numero = "#";
    for(let i = 0; i < 6; i++){
        let aleatorio = Math.floor(Math.random()*array.length);
        let escogido = array[aleatorio];
        numero += escogido;
    }
    return numero;
}

