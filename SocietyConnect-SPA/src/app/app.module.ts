import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NavComponent } from './nav/nav.component';



@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
