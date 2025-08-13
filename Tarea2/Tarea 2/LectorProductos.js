import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("== MENÚ ==");
    console.log("1. Leer archivo .inv para luego imprimir su contenido");
    console.log("2. Salir");
    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                leerArchivo();
                break;
            case "2":
                console.log("Saliendo del programa...");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Intente nuevamente.");
                mostrarMenu();
        }
    });
}

function leerArchivo() {
    try {
        const data = fs.readFileSync('inventarios.inv', 'utf8');
        console.log("-- Contenido del archivo --");
        const lineas = data.split('\n').filter(linea => linea.trim() !== "");
        lineas.forEach((linea, index) => {
            console.log(`${index + 1}. ${linea}`);
        });
    } catch (error) {
        console.error("Error: No se pudo leer el archivo. Verifique si exista.");
    }
    mostrarMenu();
}

mostrarMenu();