/**
 *  async and await
 */


let empleados = [{
    id: 1,
    nombre: 'Eloy'
}, {
    id: 2,
    nombre: 'Darleny'
}, {
    id: 3,
    nombre: 'Daniel'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];



let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado en la base de datos con ID : ${id}`);
    } else {
        return empleadoDB;
    }

}

let getSalrio = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe el salario en la base de datos para el usuario : ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }

}


let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);

    let resp = await getSalrio(empleado);

    return `El salario del empleado ${resp.nombre} es ${resp.salario}`;

}

getInformacion(3)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));