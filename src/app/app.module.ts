import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListEmpleadoComponent } from './components/EmpleadoView/list-empleado/list-empleado.component';
import { CreateEmpleadoComponent } from './components/EmpleadoView/create-empleado/create-empleado.component';
import { UpdateEmpleadoComponent } from './components/EmpleadoView/update-empleado/update-empleado.component';
import { ListSexoComponent } from './components/SexoView/list-sexo/list-sexo.component';
import { FormSexoComponent } from './components/SexoView/form-sexo/form-sexo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadoComponent,
    CreateEmpleadoComponent,
    UpdateEmpleadoComponent,
    ListSexoComponent,
    FormSexoComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
