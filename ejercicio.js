// // 1. Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia como strings.
// const usuario1 = {
//     nombreUsuario: "brenda",
//     contrasenia: "1234"
// }
// const usuario2 = {
//     nombreUsuario: "iara",
//     contrasenia: "5678"
// }
// const usuario3 = {
//     nombreUsuario: "mariam",
//     contrasenia: "9012"
// }
// console.log(usuario1);
// console.log(usuario2);
// console.log(usuario3);

// // 2. Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}".
// const titulo = document.querySelector(".titulo")
// const saludar = (objeto) => {
//     return titulo.textContent = `Hola, ${objeto.nombreUsuario}`;
// }
// console.log(saludar(usuario1));


// // 3. Probá tu función con los tres objetos definidos antes.
// console.log(saludar(usuario1));
// console.log(saludar(usuario2));
// console.log(saludar(usuario3));

// // 4. Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada para tener el valor de nuevoNombre.

// const modificarNombreDeUsuario = (usuario, nuevoNombre)=>{
//     return usuario.nombreUsuario = nuevoNombre
// }

// // 5.Probá tu función con los tres objetos definidos antes.
// console.log(modificarNombreDeUsuario(usuario1, "brendaL"));
// console.log(modificarNombreDeUsuario(usuario2, "iaraL"));
// console.log(modificarNombreDeUsuario(usuario3, "mariamL"));

// //6. Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada para tener el valor de nuevaContrasenia.
// const modificarContrasenia = (usuario, nuevaContrasenia)=>{
//     return usuario.contrasenia = nuevaContrasenia
// }

// // 7. Probá tu función con los tres objetos definidos antes.
// console.log(modificarContrasenia(usuario1, "123456"));
// console.log(modificarContrasenia(usuario2, "654321"));
// console.log(modificarContrasenia(usuario3, "678900"));

// // 8.Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.
const convertirAJSON = (usuario)=>{
  const cadenaJSON = JSON.stringify(usuario)
  return cadenaJSON
}
// console.log(convertirAJSON(usuario1));

// // 9. Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la cadena convertida a un objeto de Javascript.
// const convertirDesdeJSON =(objetoJSON)=>{
//     datosConvertidos= JSON.parse(objetoJSON)
//     return datosConvertidos
// }

// // 10. Probá tus funciones con los tres objetos definidos antes.
// console.log(convertirDesdeJSON(usuario1));
// console.log(convertirDesdeJSON(usuario2));
// console.log(convertirDesdeJSON(usuario3));

// // 11. Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, y guarde en localStorage la cadena con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage hay que convertirlo a JSON: usá la función convertirAJSON que declaraste antes)
const guardarEnLocalStorage = (objJS, string)=>{
    const objetoConvertido = convertirAJSON(objJS)
    localStorage.setItem (string,objetoConvertido)
}
// guardarEnLocalStorage(usuario1, "usuario1")
// guardarEnLocalStorage(usuario2, "usuario2")

// // 12. Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript con los datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)

// const leerDesdeLocalStorage = (clave) => {
//     const datosDelLocalStore = localStorage.getItem(clave)
//     return convertirDesdeJSON(datosDelLocalStore);
// }

// console.log(leerDesdeLocalStorage ("usuario2"));

////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercitación integradora
// Tratá de usar las funciones declaradas en los ejercicios anteriores.

// 1. Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"
// 2. Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y otro contraseña, y un botón para enviar el form.
// 3. Definí un objeto usuario en javascript en donde estén definidas dos propiedades: nombreUsuario y contrasenia (o usá los objetos definidos antes).
// 4. Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:
// Mostrar como saludo "Hola {nombreUsuario}"
// Ocultar el botón "iniciar sesión"
// Ocultar el formulario para iniciar sesión
// Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
// Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella qué elementos se deben mostrar en la página.
// 5. Si el usuario hace click en "cerrar sesión", el titulo debe volver a decir "Hola!" y el botón "Iniciar sesión" debe volver a ser visible.
// 6. Si el usuario hace click en "Cambiar mis datos", se abre un formulario con un campo usuario y otro contraseña, y un botón para enviar el form. Al enviarse, se deben modificar las propiedades nombreUsuario y contrasenia del objeto usuario.

// Una vez completados todos los puntos anteriores, queremos que la sesión del usuario persista aunque cierre la página.

// Al iniciar sesión, se deben guardar en localStorage el nombre del usuario y la propiedad: sesionIniciada: true.
// Al saludar al usuario, el título debe consumir la propiedad guardada en localStorage.
// Al cerrar sesión, la propiedad sesionIniciada debe pasar a ser false.
// Para determinar si la sesión está iniciada o no, usar la propiedad sesionIniciada desde localStorage.
// Si el usuario cambia su nombre o contraseña desde el formulario, los datos en localStorage deben actualizarse también.

const botonIniciarSesion = document.querySelector(".boton-iniciar-sesion")
const botonEnviarFormulario = document.querySelector(".boton-enviar-formulario")
const formulario = document.querySelector(".formulario")
const inputTexto = document.getElementById("input-texto")
const inputContrasenia = document.getElementById("input-contrasenia")
const titulo = document.querySelector(".titulo")
const botonesAuxiliares = document.querySelector(".botones-auxiliares")
const botonCerrarSesion = document.querySelector(".boton-cerrar-sesion")
const botonCambiarDatos = document.querySelector(".boton-cambiar-datos")

// objeto
const usuario = {
    nombreUsuario:"lala",
    contrasenia: "lala"
}

// variables de estado
let sesionEstaIniciada = false
const mostrarHTMLcomoSesionIniciada = ()=>{
    titulo.textContent = `Hola ${usuario.nombreUsuario}!!`
    botonIniciarSesion.classList.add("ocultar")
    formulario.classList.add("ocultar")
    botonesAuxiliares.classList.remove("ocultar")
}
const mostrarHTMLcomoSesionCerrada = () =>{
    titulo.textContent = "Hola!"
    botonIniciarSesion.classList.remove("ocultar")
    botonesAuxiliares.classList.add("ocultar")
}
const mostrarHTMLcomoSesionDeDatosCambiados = () =>{
    formulario.classList.remove("ocultar")
    botonesAuxiliares.classList.add("ocultar")
}
    


//codigo de la aplicacion

botonIniciarSesion.onclick = () => {
    formulario.classList.remove("ocultar")
}
botonEnviarFormulario.onclick = () => {
    if(inputTexto.value === usuario.nombreUsuario &&
        inputContrasenia.value === usuario.contrasenia){
            //sesion iniciada
            sesionEstaIniciada = true
            if (sesionEstaIniciada) {
                guardarEnLocalStorage(usuario.nombreUsuario, "nombreDeUsuario")
            }
            mostrarHTMLcomoSesionIniciada()

     }else{
        alert ("ingresaste datos erroneos");
     }
}
botonCerrarSesion.onclick = () => {
    //sesion NO iniciada
    sesionEstaIniciada = false
    mostrarHTMLcomoSesionCerrada()
}
botonCambiarDatos.onclick = () => {
    mostrarHTMLcomoSesionDeDatosCambiados()
    botonEnviarFormulario.onclick = () => {
        if(inputTexto.value !== usuario.nombreUsuario ||
            inputContrasenia.value !== usuario.contrasenia){

            let inputContraseniaCambiada = inputContrasenia.value
            let inputTextoCambiado = inputTexto.value

            usuario.nombreUsuario.value = inputTextoCambiado
            usuario.contrasenia.value = inputContraseniaCambiada

            botonIniciarSesion.classList.add("ocultar")
            formulario.classList.add("ocultar")
            botonesAuxiliares.classList.remove("ocultar")
            titulo.textContent = `Hola ${inputTextoCambiado}!!`
        }       
    }
}


