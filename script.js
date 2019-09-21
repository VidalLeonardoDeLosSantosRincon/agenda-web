
let contenedor = document.querySelector('.container2');
let contacto = document.querySelector('#contact');
const url = "http://www.raydelto.org/agenda.php";


//metodo enviar datos
function enviar_info_json(){

let _nombre = document.getElementById('nombre').value;
let _apellido = document.getElementById('apellido').value;
let _telefono = document.getElementById('telefono').value;


if( _nombre.trim()=="" && _apellido.trim()=="" && _telefono.trim()=="" 
	||_nombre.trim()=="" || _apellido.trim()=="" || _telefono.trim()=="" ){

alert("No pueden haber campos vacios");

}else{


let miContacto = {
	nombre: _nombre,
	apellido:_apellido,
	telefono:_telefono};

fetch(url,{
        method: 'POST',
        body: JSON.stringify(miContacto),
        	
    })
    .then(respuesta => respuesta.json())
    .then( data => {
        alert("Datos enviados");
    	console.log('data = ',data)})
    .catch(error => console.error(error));

   }

}


//metodo traer datos
function traer_info_json(){

 fetch(url)
 .then(respuesta => respuesta.json())
 .then(datos =>{ 

 for(data in datos){

	let info = `${data} | Nombre: ${datos[data].nombre} | Apellido: ${datos[data].apellido} | Telefono: ${datos[data].telefono}`;
	contenedor.innerHTML += `<h3 id='info-contacts'>${info}</h3><br><hr>`;
 }

 contenedor.innerHTML += `<h3 id='info-contacts'>Cantidad de contactos: ${data}</h3><br>`;
 contacto.innerHTML = "Lista de contactos";

 }).catch(error => {
     
    console.log("Sorry, an error");
    contacto.innerHTML = "Error, No se ha podido cargar Lista de contactos :(";

});



}

