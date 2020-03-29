import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AlunoPipe } from '../pipes/aluno.pipe';
import { InputComponent } from '../components/input/input.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    LoginComponent,
    AlunoPipe,
    InputComponent,
    
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
