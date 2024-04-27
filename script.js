function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    
    // Removemos la clase 'seleccion' de todas las opciones
    opciones.forEach(function(opcion) {
        opcion.classList.remove('seleccion');
    });

    // Añadimos la clase 'seleccion' a la opción seleccionada
    link.classList.add('seleccion');
    
    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción
    // en modo responsive
    var x = document.getElementById('nav');
    x.className = '';

    // Obtenemos el destino del scroll
    var destinoId = link.getAttribute('href').substring(1);
    var destino = document.getElementById(destinoId);
    
    // Verificamos si el destino del scroll existe
    if (destino) {
        // Realizamos el efecto de scroll suave al elemento seleccionado
        destino.scrollIntoView({ behavior: 'smooth' });
    }
}



//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}


