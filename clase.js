    /*
    //esto es para colocar digamos distintos elementos
    
    let animales = ["perro", "gato", "conejo", "pez", "aguila"]

    //esto es para colocar en la consola los elementos que tenemos

    console.log(animales)

    //esto es para extraer uno de los elementos del tag señalado

    console.log(animales[2])
    console.log(animales[3])

    //esto nos sirve para señalar la cantidad de elementos y para selañar el tipo del elemento

    console.log(animales.length)
    console.log(typeof animales)

    //cambiar perro por elefante 

    animales[0] = "elefante"
    console.log(animales)

    //agregar un nuevo animal (el push nos sirve para agregar un nuevo elemento al array)

    animales.push("Raton")
    console.log(animales)

    //eliminar el ultimo elemento de la lista

    animales.pop()
    console.log(animales)

    //agregar al inicio del array 

    animales.unshift("leon")
    console.log(animales)

    //buscar el indice de un elemento (esto nos sirve cuando no sabemos en que lugar esta un elemento)

    let indiceDelGato = animales.indexOf("gato")
    console.log(animales[indiceDelGato])

    
    console.log(animales[animales.indexOf("gato")])

    //determinar si un elemento esta en el arreglo (nos sirve para determinar si un elemento existe o no en el array)

    console.log(animales.includes("tortuga"))

    animales.push("tortuga")

    console.log(animales.includes("tortuga"))
    console.log(animales)

    //invertir  la lista 

    let animalesAlcontrario = animales.reverse()
    console.log(animalesAlcontrario)

    //ordenar la lista 

    console.log(animales.sort())
    
    //eliminar en un indice especifico

    animales.splice(0, 1)
    console.log(animales)

    */


    //let animales = ["perro", "gato", "conejo", "pez", "aguila"]
    //lista resultante que tenga los elementos = ["aguila", "conejo", "pez", "leon"]

    let animales = ["perro", "gato", "conejo", "pez", "aguila"]

    animales.splice(0, 1)
    console.log(encontrarGato(animales))
    animales[0] = animales[3]
    console.log(encontrarGato(animales))
    animales.pop()
    animales.push("leon")

    console.log(animales)

    function encontrarGato(lista ) {

        let result = lista.includes("gato")
        return result

    }