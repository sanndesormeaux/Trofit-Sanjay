import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProfilComponent } from './profil/profil.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { PlanningComponent } from './planning/planning.component';
import { SuccesComponent } from './succes/succes.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProfilComponent,
    ExercicesComponent,
    PlanningComponent,
    SuccesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
