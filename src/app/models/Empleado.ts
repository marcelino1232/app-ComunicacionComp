export class Empleado {
    empleadoId:number;
    legajo:number;
    nombre:string;
    apellido:string;
    sexoId:number;
    salario:number;

    constructor(empleadoId:number,legajo:number,nombre:string,apellido:string,sexoId:number,salario:number){
        this.empleadoId = empleadoId;
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexoId = sexoId;
        this.salario = salario;
    }
}