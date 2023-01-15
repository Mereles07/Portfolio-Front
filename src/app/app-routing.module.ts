import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade/edit-acercade.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades/new-habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'newskill', component: NewHabilidadesComponent},
  {path: 'editskill/:id', component: EditHabilidadesComponent},
  {path: 'editacercade/:id', component: EditAcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgCircleProgressModule.forRoot({})], 
  exports: [RouterModule, NgCircleProgressModule],
})
export class AppRoutingModule { }
