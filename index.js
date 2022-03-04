// Método concat

const mujeres = ["Cande", "Luli", "Sol"];

const hombres = ["Andy", "Gaston", "Tincho"];

const concatenar = (arr1, arr2) => {
    const companeros = arr1.concat(arr2);

    return companeros;
}

console.log(concatenar(mujeres, hombres));

// El método concat retorna un nuevo array
// No modifica los arrays anteriores



// Método every

const edades1 = [45, 31, 12, 19, 32, 25];

const edades2 = [31, 57, 19];

const sonMayoresDe18 = (edades) => {
    return edades.every(edad => edad >= 18) // Retorno implicito
}

console.log(sonMayoresDe18(edades1));
console.log(sonMayoresDe18(edades2));

// El método every devuelve si todos los elementos de array cumplen o no con la condición dada



// Método filter

const profesiones = [
    {puesto: "Programadora", 
    area: "IT"
    }, 
    {puesto: "QA", 
    area: "IT"
    }, 
    {puesto: "Pediatra", 
    area: "Salud"
    }, 
    {puesto: "Conductora de radio", 
    area: "Medios"
    }, 
    {puesto: "Product Manager", 
    area: "IT"
    }, 
    {puesto: "Kinesiologo", 
    area: "Salud"
    }, 
];

const separarProfesiones = (array) => {
    const profesionesIT = array.filter((profesion) => {
        return profesion.area === "IT";
    })

    return profesionesIT;
}

console.log(separarProfesiones(profesiones));

// El método filter retorna un nuevo array con los elementos que cumplen la condición indicada en el retorno
// No modifica el array original



// Método find

const encontrarPrimeraProfesionIT = (profesiones) => {
    const primeraProfesionEncontrada = profesiones.find(profesion => profesion.area === "IT")

    return primeraProfesionEncontrada;
}

console.log(encontrarPrimeraProfesionIT(profesiones));

// El método find devuelve el primer elemento que cumple con la condición indicada en el retorno
// No modifica el array original



// Método findIndex

const encontrarPosicionPrimeraProfesionIT = (profesiones) => {
    const primeraProfesionEncontrada = profesiones.findIndex(profesion => profesion.area === "Salud")

    return primeraProfesionEncontrada;
}

console.log(encontrarPosicionPrimeraProfesionIT(profesiones));

// El método findIndex devuelve la posicion del primer elemento que cumple con la condición indicada en el retorno
// No modifica el array original



// Método includes

const frutas = ["Banana", "Manzana", "Pera", "Durazno"];

const buscarFruta = (fruta, frutas) => {
    return frutas.includes(fruta);
}

console.log(buscarFruta("Manzana", frutas)); // true: Manzana sí está en el array
console.log(buscarFruta("Kiwi", frutas)); // false: Kiwi no está en el array

// El método includes retorna true si el elemento pasado como parámetro está en el array
// Retorna false si el elemento pasado como parámetro NO está en el array



// Método indexOf

const buscarPosicionFruta = (frutas) => {
    return frutas.indexOf("Durazno");
}

console.log(buscarPosicionFruta(frutas));

// El método indexOf retorna el índice en el que se encuentra el elemento pasado como parámetro.



// Método lastIndexOf

const buscarUltimaPosicionFruta = (frutas) => {
    return frutas.lastIndexOf("Durazno");
}

console.log(buscarUltimaPosicionFruta(frutas));

// El método lastIndexOf retorna el último índice en el que se encuentra el elemento pasado como parámetro.



// Método isArray

const chequearSiEsArray = (frutas) => {
    return Array.isArray(frutas);
}

console.log(chequearSiEsArray(frutas));

// El método isArray retorna true si el elemento pasado como parámetro es un array
// Retorna false si el elemento pasado como parámetro NO es un array



// Método join

const convertirAString = (frutas) => {
    return frutas.join(" - ")
}

console.log(convertirAString(frutas));

// El método join convierte el array a un string separando los elementos con el string que le pasemos como parámetro
// Por defecto, los separa con coma
// No modifica el array original



// Método map

const apellidos = ["perEZ", "marTIneZ", "torREs", "marquez"];

const apellidosCapitalizados = (apellidos) => {
    return apellidos.map((apellido) => {
        primeraLetra = apellido.charAt(0).toUpperCase();
        restoDelApellido = apellido.slice(1).toLowerCase();
        apellidoCompleto = primeraLetra + restoDelApellido;

        return apellidoCompleto;
    })
}

console.log(apellidosCapitalizados(apellidos));

// El método map crea un nuevo array con los elementos modificados según lo que indica la función del map
// No modifica el array original



// Método pop

const marcas = ["Apple", "Fiat", "Gucci", "Fendi", "McDonalds"];

const removerUltimaMarca = (marcas) => {
    return marcas.pop();
}

console.log(removerUltimaMarca(marcas)); // retorna el elemento eliminado

console.log(marcas) // el array original se modifica

// El método pop elimina el último elemento del array
// Modifica el array original
// Retorna el elemento eliminado



// Método push

const agregarNuevaMarca = (marcas) => {
    return marcas.push("Burger King");
}

console.log(agregarNuevaMarca(marcas)); // en la consola se ve el número 5 (nueva longitud del array)

// El método push agrega un nuevo elemento al array (el mismo que pasamos como parámetro)
// Modifica el array original
// Retorna la nueva longitud del array



// Método reduce

const numerosChicos = [4, 4, 8];

const numerosGrandes = [1343, 4525, 7587, 234, 6565];

const sumarNumeros = (numeros) => {
    const suma = numeros.reduce((acc, numero) => {
        return acc + numero;
    }, 0)

    return suma;
}

console.log(sumarNumeros(numerosChicos)); // se ve en consola: 16
console.log(sumarNumeros(numerosGrandes)); // se ve en consola: 20254

// Usamos reduce cuando a partir de un array queremos quedarnos con solo UN VALOR
// Por ejemplo, cuando hacemos una suma de todos los numeros de un array
// O cuando hacemos una concatenacion de todos los strings de un array
// O cuando queremos retornar un pedacito de HTML (utilizando innerHTML)

// Reduce recibe dos parametros: una función y una acumuladora
// La función, a su vez, recibe otros dos parámetros: acc y elemento
// De forma opcional, la función también puede recibir el index



// Método reverse

const palabras = ["Celular", "Playa", "Asado", "Camino", "Zapallo"];

const darVuelta = (array) => {
    return array.reverse();
}

console.log(darVuelta(palabras));

// El método reverse cambia el orden de los elementos del array
// Modifica el array original



// Método shift

const eliminarElemento= (array) => {
    return array.shift();
}

console.log(eliminarElemento(palabras));

// Shift elimina el primer elemento del array
// Modifica el array original
// Retorna el elemento eliminado



// Método slice

const vegetales = ["Zanahoria", "Zapallito", "Arvejas", "Pepino", "Lechuga", "Albahaca"];

const seleccionarVegetales = (vegetales) => {
    return vegetales.slice(1, 3); // retorna un nuevo array que contiene: Zapallito y Arvejas
}

console.log(seleccionarVegetales(vegetales));

// El método slice selecciona desde un índice dado hasta otro índice dado (no inclusive)
// Es decir que array.slice(1, 3) corta desde el elemento en el índice 1 hasta el 3 (pero el 3 no está incluido)
// Slice retorna un nuevo array con los elementos que fueron seleccionados
// No modifica el array original



// Método some

const edades = [19, 17, 32, 14];

const sonMenoresDe18 = (edades) => {
    return edades.some(edad => edad < 18)
}

console.log(sonMenoresDe18(edades));

// El método some devuelve si algunos elementos de array cumplen o no con la condición dada



// Método sort

const cantantes = ["Michael Jackson", "Adele", "Beyonce", "Sam Smith"];

const ordenarCantantes = (cantantes) => {
    return cantantes.sort();
}

console.log(ordenarCantantes(cantantes));

// El método sort ordena los elementos de un array alfabéticamente
// Modifica el array original
// Retorna el array ordenado
// Si lo utilizamos en conjunto con el método reverse() podemos tener un array ordenado al revés, de la "Z" a la "A"



// Para ordenar números con sort

const precios = [35, 200, 10, 79, 2];

const ordenarDelMasBaratoAlMasCaro = (precios) => {
    return precios.sort((a, b) => a - b);
}

console.log(ordenarDelMasBaratoAlMasCaro(precios));

// Utilizado de esta forma, sort ordena los números de menor a mayor
// Si queremos ordenarlos de mayor a menor tenemos que escribir: b - a



// Método splice

const canciones = ["The lazy song", "We are the champions", "Love is in the air", "Under the bridge", "Angel"];

const agregarCanciones = (canciones) => {
    return canciones.splice(1, 1, "Counting stars") // "Counting stars" reemplaza a la canción en la posición 1: "We are the champions" queda eliminada
}

console.log(agregarCanciones(canciones))
console.log(canciones);

// El método splice agrega o elimina elementos de un array
// Modifica el array original
// Retorna un array con los elementos eliminados. 
// Si se eliminó un elemento, devuelve un array con un solo elemento
// Si no se eliminó ningún elemento, devuelve un array vacío



// Método toString

const elementosDeCocina = ["Cacerola", "Cubiertos", "Tostadora"];

const pasarAString = (elementos) => {
    return elementos.toString(); // retorna Cacerola,Cubiertos,Tostadora (sin espacios)
}

console.log(pasarAString(elementosDeCocina));

// El método toString retorna un string con los valores del array separados por comas
// No modifica el array original



// Método unshift

const paises = ["Australia", "Nueva Zelanda", "Italia", "Francia", "Suiza"];

const agregarPaises = (paises) => {
    return paises.unshift("Argentina"); // en consola se ve: 6 (nueva longitud del array)
}

console.log(agregarPaises(paises));

// Agrega un elemento al principio del array
// Modifica el array original
// Retorna la nueva longitud del array