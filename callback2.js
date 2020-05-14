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



let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el empleado en la base de datos con ID : ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

let getSalrio = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`No existe el salario en la base de datos para el usuario : ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalrio(empleado, (err, resp) => {
        if (err) {
            return console.log(err);
        };

        console.log(`nombre: ${resp.nombre}, salario: ${resp.salario} `);

    })

});