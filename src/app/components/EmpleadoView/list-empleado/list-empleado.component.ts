import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';
import { empleadoRepository } from 'src/app/services/empleadoRepository';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css']
})
export class ListEmpleadoComponent {

   service:empleadoRepository = new empleadoRepository();
   listEmpleado:Empleado[] = [];

   ngOnInit() : void {
    this.listEmpleado = this.service.GetAll();
    console.log(this.listEmpleado);
   }

   DeleteEmpleado(id:number) {
     this.listEmpleado = [...this.service.Delete(id)]
   }


}
