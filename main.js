//CAPTURA DE ELEMENTOS DEL DOM
const $contenedor = document.querySelector(".contenedor");
const $btnModificar = document.querySelector(".modificar");
const $ventanaModal = document.querySelector("#modalCuadricula");
const $modalCancelar = document.querySelector("#Cancelar")
const $modalConfirmar = document.querySelector("#Confirmar");
const $inputNumero = document.querySelector("#numero");

/* LLAMADA A LA FUNCION PARA GENERAR CUADRICULA*/
crearCuadricula()

function crearCuadricula () {

    //CALCULAR NUMERO DE DIVS PARA CUADRICULA
    let noDivsLado = $inputNumero.value;
    let totalDivs = noDivsLado * noDivsLado;

    //CREACION DE DIVS
    for (let i = 1; i <= totalDivs; i++) {
        const $divs = document.createElement("div");
        $divs.classList.add("cuadrado");
        $contenedor.appendChild($divs);

        //CALCULAR TAMAÑO DE LOS DIVS
        let tamañoContenedor = $contenedor.clientWidth;
        let tamañoDivs = tamañoContenedor / noDivsLado;
        $divs.style.width = `${tamañoDivs}px`;
        $divs.style.height = `${tamañoDivs}px`;

        //ASIGNACION DE COLOR
        $divs.addEventListener("mouseover", () => {
            let color = generarColorRGB(); 
            $divs.style.backgroundColor = color;

            
        })
    }
}

//Boton Modificar (Abre ventana modal)
$btnModificar.addEventListener("click", () => {
    $ventanaModal.showModal();
})

// Boton CancelarModal (Cancela la modificacion de la cuadricula)
$modalCancelar.addEventListener("click", () => {
    $ventanaModal.close();
})

// Boton ConfirmarModal (Acepta y modifica la cuadricula)
$modalConfirmar.addEventListener("click", () => {
    $contenedor.innerHTML = "";
    crearCuadricula();
})

// Funcion para generar colores aleatorios
function generarColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}