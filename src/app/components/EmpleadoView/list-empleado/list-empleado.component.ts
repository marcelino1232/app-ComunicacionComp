import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { Sexo } from 'src/app/models/Sexo';
import { empleadoRepository } from 'src/app/services/empleadoRepository';
import { sexoRepository } from 'src/app/services/sexoRepository';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {

   service:empleadoRepository = new empleadoRepository();
   listEmpleado:Empleado[] = [];
   sexoRepository:sexoRepository = new sexoRepository();
   listSexo:Sexo[] = [];

   ngOnInit() : void {
    this.listSexo = [...this.sexoRepository.GetAll()];
    this.listEmpleado = this.service.GetAll();
    console.log(this.listEmpleado);
   }

   DeleteEmpleado(id:number) {
     this.listEmpleado = [...this.service.Delete(id)]
   }

   GetSexo(id:number):string{
    const item =  this.listSexo.find(x => x.sexoId === +id);
    let descripcion = item === undefined? '' : item.descripcion;
    return descripcion;
   }


}
