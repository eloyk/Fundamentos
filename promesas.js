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



let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado en la base de datos con ID : ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
}

let getSalrio = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No existe el salario en la base de datos para el usuario : ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    })

}

getEmpleado(2).then(empleado => {

        return getSalrio(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`)
    })
    .catch(err => {
        console.log(err)
    })