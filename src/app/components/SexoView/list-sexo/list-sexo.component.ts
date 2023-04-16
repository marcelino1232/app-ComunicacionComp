import { Component } from '@angular/core';
import { Sexo } from 'src/app/models/Sexo';
import { sexoRepository } from 'src/app/services/sexoRepository';

@Component({
  selector: 'app-list-sexo',
  templateUrl: './list-sexo.component.html',
  styleUrls: ['./list-sexo.component.css']
})

export class ListSexoComponent {

   estado = true;
   titulo = "Regsitro de Usuario";

   id = 0;
   descripcion = '';

   service:sexoRepository = new sexoRepository();
   listSexo:Sexo[] = [];


   ngOnInit() : void{
     this.listSexo = this.service.GetAll();
   }

  ObjectoSexo(): Sexo {
    const sexo:Sexo = {
      sexoId:this.id,
      descripcion:this.descripcion
    }
    this.id = 0;
    this.descripcion = '';
    return sexo;
  }

  hacerCambios(){
    this.estado === true ? this.AgregarSexo() : this.EditarSexo();
  }

  cambiarEstado(){
    this.estado = true;
    this.titulo ="Regsitro de Usuario";

    this.id = 0;
    this.descripcion = '';
   }

   AgregarSexo() {
     this.listSexo = [...this.service.Add(this.ObjectoSexo())];
   }

   EditarSexo() {
    this.listSexo = [...this.service.Update(this.ObjectoSexo())];
    this.cambiarEstado();
   }

   EliminarSexo(id:number){
    this.listSexo = [...this.service.Delete(id)];
  }

  MostrarSexo(Id:number)
  {
    const {sexoId,descripcion} = this.service.GetById(Id);
    this.id = sexoId;
    this.descripcion = descripcion;
    this.titulo = "Editar Sexo";
    this.estado = false;
  }
}
