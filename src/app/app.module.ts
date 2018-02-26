import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes, RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {MatMenuModule, MatIconModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routes } from './services/routes';
import { FooterComponent } from './footer/footer.component';
import { ReaderComponent } from './reader/reader.component';
import { LovelyDayComponent } from './lovely-day/lovely-day.component';
import { DogpiesComponent } from './dogpies/dogpies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ReaderComponent,
    LovelyDayComponent,
    DogpiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
