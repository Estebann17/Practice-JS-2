// Para practicar la encapsulación:

// - Crear clase Persona.

// - Crear variables las privadas edad, nombre y telefono de la clase Persona.

// - Crear gets y sets de cada propiedad.

// - Crear un objeto persona en el main.

// - Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.

class Persona {
    constructor(nombre, edad, telefono) {
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad;
    }
    get telefono(){
        return this._telefono;
    }
    set nombre(Nombre) {
        this._nombre = Nombre;
    }
    set edad(Edad) {
        this._nombre = Edad;
    }
    set telefono(Telefono) {
        this._nombre = Telefono;
    }
}

const persona = new Persona('Esteban', 18, 1029425);
console.log(persona);