import { Empleado } from "../models/Empleado";


 export class empleadoRepository {
 
     listEmpleado:Empleado[];
 
     constructor(){
         this.listEmpleado = [];
         this.CargarData(localStorage.getItem("listEmpledo")!);
     }
 
     private CargarData(data:string) 
     {
        const list = JSON.parse(data);
        if(list === null){
           this.listEmpleado = [];
        }else if(list.length > 0){
           this.listEmpleado = [...list];
        }else{
          this.listEmpleado = [];
        }
     }
 
     public GetAll():Empleado[] {
        return this.listEmpleado;
     }
 
     public Add(empleado:Empleado): Empleado[]
     {
         if(this.listEmpleado.length === 0)
         {
             empleado.empleadoId = 1;
             this.listEmpleado.push(empleado);
             localStorage.setItem("listEmpledo",JSON.stringify(this.listEmpleado));
         }else{

           const item =  this.listEmpleado.at(-1);
           const id = item?.empleadoId === undefined ? 1 : item?.empleadoId! + 1;

           empleado.empleadoId = id;
           this.listEmpleado.push(empleado);
           localStorage.setItem("listEmpledo", JSON.stringify(this.listEmpleado));
         }
         return this.listEmpleado;
     }
 
     public GetById(id:number):Empleado
     {
         return this.listEmpleado.filter(x => x.empleadoId === id)[0];
     }
 
     public Update(empleado:Empleado):Empleado[] 
     {
         let item = this.listEmpleado.filter(x => x.empleadoId === empleado.empleadoId)[0];
         item.legajo = empleado.legajo;
         item.nombre = empleado.nombre;
         item.apellido = empleado.apellido;
         item.sexoId = empleado.sexoId;
         item.salario = empleado.salario;
        
         localStorage.setItem("listEmpledo", JSON.stringify(this.listEmpleado));
         return this.listEmpleado;
     }
 
     public Delete(id:number):Empleado[]{
         const estado = confirm("Esta seguro de eliminar este sexo");
         if(estado) {
           this.listEmpleado.splice(id,1);
           localStorage.setItem("listEmpledo", JSON.stringify(this.listEmpleado));
         }
         return this.listEmpleado;
     }
 
 }