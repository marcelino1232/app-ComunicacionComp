import { Component } from '@angular/core';
import { Sexo } from 'src/app/models/Sexo';
import { empleadoRepository } from 'src/app/services/empleadoRepository';
import { sexoRepository } from 'src/app/services/sexoRepository';
import { Empleado } from 'src/app/models/Empleado';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent {
   service:empleadoRepository = new empleadoRepository();
   sexoRepository:sexoRepository = new sexoRepository();

   txtLegajo = 0
   txtNombre = '';
   txtApellido = '';
   txtSexo = 0;
   txtSalario = 0;

   listSexo:Sexo[] = [];

   constructor(private router:Router){

   }

   ngOnInit():void{
    this.listSexo = [...this.sexoRepository.GetAll()];
   }

   AddEmpleado(){

    const data:Empleado = {
      empleadoId:0,
      legajo:this.txtLegajo,
      nombre:this.txtNombre,
      apellido:this.txtApellido,
      sexoId:this.txtSexo,
      salario:this.txtSalario
    };
    this.service.Add(data);

    this.router.navigate(['/','Empleado']);
   }
}
