/*)
1) Declarar una clase Usuario

2) Hacer que Usuario cuente con los siguientes atributos:
nombre: String
apellido: String
libros: Object[]
mascotas: String[] ``
---------- 
Hacer que Usuario cuente con los siguientes métodos:
getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.
4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.*/



class Usuario{

    constructor (
        nombre="",
        apellido = "",
        libros = [],
        mascotas = [],)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    getFullName() {
        return `${(this.nombre)} ${(this.apellido)}`
    }
        
    addMascota(nuevaMascota) {
        this.mascotas.push((nuevaMascota))
    }
    
    countMascotas() {
        return this.mascotas.length
    }
    
    addBook (titulo= "", autor= "" ) {
        let agregoLibro = [{titulo, autor}]
        this.libros.push(agregoLibro)
    }

    getBookNames(){
        
       let arrayLibros=["Harry Potter y el prisionero de azkaban","j.k. rowling",
       "el sr de los anillos","j.r.r tolkien",
       "El Hobbit","j.r.r tolkien"]
       let x=0
    
        for (x = 0; x < this.libros.length; x++){
            arrayLibros.push(this.libros[x].titulo)
        }
        return arrayLibros

    }
    
}



const usuario1 = new Usuario("Nicolas","Cantatore")
const usuario2 = new Usuario("","",[],[])
const usuario3 = new Usuario({})
  

usuario1.addMascota('perro');
usuario1.addMascota('gato');
usuario1.addMascota('loro');

usuario1.addBook("EL Visitante","Stephen King")
usuario1.addBook("It","Stephen King")
usuario1.addBook("Cementerio de Animales","Stephen King")


console.log(usuario1)
console.log((`Mi nombre es: ${usuario1.getFullName()}`))
console.log((usuario1.mascotas))
console.log((`la cuenta de mascota es: ${usuario1.countMascotas()}`))


usuario2.addBook("Harry Potter y el prisionero de azkaban","j.k. rowling")
usuario2.addBook("Hfsdfgsfd","j.k. rowling")
console.log((`Nombres array libros: ${usuario2.getBookNames()}`))



