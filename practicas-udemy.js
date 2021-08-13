// //Arreglos: son una lista ordenada, puede contener cualquier tipo de dato.

// //definiendolo directamente:

// let listadoUno = [1,2,3,4,566, 897, 3333, 753]

// console.log(listadoUno)

// //O creandolo a traves de new objet:
// //Array o arreglo es un objeto

// let listadoDos = new Array (1,2,3,4,5,6,78542, 58742, 6895)
// console.log(listadoDos)

// //como acceder a los elementos de un array:

// console.log(listadoDos[2]);
// console.log(listadoDos.length);//para conocer su longitud

// //Para insertar un elemento al final de mi arreglo: Añade uno o mas elementos al final 
// listadoDos.push(128, 157, 534);
// console.log(listadoDos);

// //Para eliminar un elemento al final de mi arreglo: elimina el ultimo elemento
// listadoDos.pop();
// console.log(listadoDos);

// //Eliminado o añadiendo elementos en una posicion(indice) particular:
// listadoDos.splice(1, 0, "hola", true, false); //añadir sin eliminar
// console.log(listadoDos);

// listadoDos.splice(3, 3); //elimino 3 elementos
// console.log(listadoDos);

// //OBJETOS: Es una estructura de datos que me permite guardar distintas propiedades
// //FORMAS DE CREAR OBJETOS:
// let objeto = new Object(); //creando un objeto vacio
// let obj = {};

// //como escribir valores en las propiedades
// objeto.nombre = "Patricia";
// objeto.edad = 36;
// objeto.profesion = "Desarrolladora Web";
// objeto.genero = "femenino";
// objeto.nacimiento = 1985;
// objeto.hobbies = "viajar";
// objeto.hijos = 2;

// console.log(objeto);
// console.log(objeto["nombre"]); //Para acceder solo a una propiedad, en este caso nombre
// console.log(objeto["genero"]);
// console.log(objeto["hijos"]);
// console.log(objeto["mascotas"]);//si no tiene la propiedad me muestra undefined, indefinido

// //Los OBJETOS pueden tener METODOS, que son funciones (NATIVAS - CREADAS X MI)
// //Las funciones tambien son objetos.
// //Casi todo en js son objetos, por eso son tan importantes

// //OTRA FORMA DE CREAR OBJETOS:
// let usuarioUno = {
//     nombre: "Lorena",
//     edad: 30,
//     mascota: "Aragon",
//     profesion: "Diseñadora Web",
//     hobbies: ["viajar", "estudiar", "bailar"],
//     perfil: {
//         cuenta: "privada",
//         id: 12548961,
//     } // pueden haber anidaciones de objetos.
// }
// console.log(usuarioUno);
// console.log(usuarioUno.hobbies[1]);
// console.log(usuarioUno.perfil.cuenta); // para acceder a distintas propiedades
// console.log(usuarioUno.perfil.id);


// //CREAR EL OBJETO CELULAR
// const celular = {};

// //propiedades
// celular.nombre = "Nokia";
// celular.procedencia = "China";
// celular.serie = 1254896;
// celular.destino = "Argentina";

// console.log(celular);
// console.log(celular.nombre);
// console.log(celular.serie); 

//CLASES



class alumnos {
    //Atributos
    constructor(nombre, edad, tutor, curso, año) {
        this.nombre = nombre,
        this.edad = edad,
        this.tutor = tutor,
        this.curso = curso,
        this.año = año
}
};
    
const alumnoUno = new alumnos("Patricia", 14, "Betty", "Cuarto", 2021);

console.log(alumnoUno);