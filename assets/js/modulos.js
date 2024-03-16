class Propietario {
  constructor(nombre, direccion, telefono) {
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }
  get nombre() {
    return this._nombre;
  }
  get direccion() {
    return this._direccion;
  }
  get telefono() {
    return this._telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es: ${this.nombre}, su domicilio es: ${this.direccion} y el número teléfonico de contacto es: ${this.telefono}`;
  }
}

class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${
      this._tipo[0].toUpperCase() + this._tipo.slice(1)
    }`;
  }
}

class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota
  ) {
    super(
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario,
      tipoAnimal
    );
    this._nombreMascota = nombreMascota;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nuevoNombreMascota) {
    this._nombreMascota = nuevoNombreMascota;
  }
}
class Consulta extends Mascota {
  constructor(
    nombrePropietario,
    direccionPropietario,
    telefonoPropietario,
    tipoAnimal,
    nombreMascota,
    motivoConsulta,
    fechaConsulta
  ) {
    super(
      nombrePropietario,
      direccionPropietario,
      telefonoPropietario,
      tipoAnimal,
      nombreMascota
    );
    this._motivoConsulta = motivoConsulta;
    this._fechaConsulta = fechaConsulta;
  }
  get motivoConsulta() {
    return this._motivoConsulta;
  }
  get fechaConsulta() {
    return this._fechaConsulta;
  }
}
export default Consulta;
