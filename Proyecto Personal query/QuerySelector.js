const temp1 = document.querySelector('#temp1');
console.log(temp1);
const temp2 = document.querySelector('#temp2');
console.log(temp2);
const temp3 = document.querySelector('#temp3');
console.log(temp3);

// Cambia el id de los temp
temp1.id = 'sobremi';
temp2.id = 'carrera';
temp3.id = 'galeria';

//Imprimimos en consola los nuevos id
console.log('Nuevo id de temp1:', temp1.id);  // Verifica el cambio
console.log('Nuevo id de temp2:', temp2.id);  
console.log('Nuevo id de temp3:', temp3.id);  

//Uso de querySelectorAll para seleccionar los enlaces de navegación
const enlacesNav = document.querySelectorAll('.navegacion_prin a');
console.log(enlacesNav);

enlacesNav[0].href = '#contacto'; // Cambia el enlace del primer elemento a #contacto
console.log('Nuevo href del primer enlace de navegación:', enlacesNav[0].href);  // Verifica el cambio

enlacesNav[0].href = '#'; // Cambia el enlace del primer elemento a # (Inicio de la pagina)
console.log('Nuevo href del primer enlace de navegación:', enlacesNav[0].href);  // Verifica el cambio
