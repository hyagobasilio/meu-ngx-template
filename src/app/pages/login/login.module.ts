import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule } from '@nebular/theme';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { NbAuthModule } from '@nebular/auth';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    LoginRoutingModule,

    NbAuthModule,
  ]
})
export class LoginModule { }
