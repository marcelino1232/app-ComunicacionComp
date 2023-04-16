import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/Empleado';
import { Sexo } from 'src/app/models/Sexo';
import { empleadoRepository } from 'src/app/services/empleadoRepository';
import { sexoRepository } from 'src/app/services/sexoRepository';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent
{

  service:empleadoRepository = new empleadoRepository();
  sexoRepository:sexoRepository = new sexoRepository();
  listSexo:Sexo[] = [];

  txtEmpleadoId = 0;
  txtLegajo = 0
  txtNombre = '';
  txtApellido = '';
  txtSexo = 0;
  txtSalario = 0;

  constructor(private router:Router, private route:ActivatedRoute){
    
  }

  ngOnInit() {
    this.listSexo = [...this.sexoRepository.GetAll()];
    this.CargarData();
  }


  CargarData(){
    this.txtEmpleadoId = +this.route.snapshot.paramMap.get('Id')!;
    const empleado = this.service.GetById(this.txtEmpleadoId);
    this.txtEmpleadoId = empleado.empleadoId;
    this.txtLegajo = empleado.legajo;
    this.txtNombre = empleado.nombre;
    this.txtApellido = empleado.apellido;
    this.txtSexo = empleado.sexoId;
    this.txtSalario = empleado.salario;
  }

  UpdateEmpleado() {
   const empleado:Empleado = {
    empleadoId:this.txtEmpleadoId,
    legajo:this.txtLegajo,
    nombre:this.txtNombre,
    apellido:this.txtApellido,
    sexoId:this.txtSexo,
    salario:this.txtSalario
   }
   this.service.Update(empleado);

   this.router.navigate(['/','empleado'])
  }
}
