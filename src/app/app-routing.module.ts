import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadoComponent } from './components/EmpleadoView/list-empleado/list-empleado.component';
import { CreateEmpleadoComponent } from './components/EmpleadoView/create-empleado/create-empleado.component';
import { UpdateEmpleadoComponent } from './components/EmpleadoView/update-empleado/update-empleado.component';
import { ListSexoComponent } from './components/SexoView/list-sexo/list-sexo.component';

const routes: Routes = [
  {path:'',component:ListEmpleadoComponent},
  {path:'empleado', component:ListEmpleadoComponent},
  {path:'empleado/create', component:CreateEmpleadoComponent},
  {path:'empleado/update/:Id', component:UpdateEmpleadoComponent},
  {path:'sexo', component:ListSexoComponent},
  {path:'**', component:ListEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
