import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import {ContactService} from '../services/contact.service';


const appRoutes:Routes=[
  {path:"",component:AppComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    NavComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
