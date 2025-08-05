class Coche {

  #marca;
  #modelo;
  #anio;


  constructor(marca, modelo, anio) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#anio = anio;
  }


  obtenerDescripcion() {
    return `Coche: ${this.#marca} ${this.#modelo} (${this.#anio})`;
  }


  encenderCarro = () => {
    console.log(`${this.#marca} ${this.#modelo} está encendido.`);
  };

}
// Se crean dos instancias
const coche1 = new Coche("Tesla", "Cybertruck", 2024);
const coche2 = new Coche("Toyota", "Toyota Camry", 2025);

// Aquí se prueban los métodos
console.log(coche1.obtenerDescripcion());
coche1.encenderCarro();

console.log(coche2.obtenerDescripcion());
coche2.encenderCarro();