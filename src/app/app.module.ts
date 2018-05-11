import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { HttpModule } from '@angular/http';
import {BsDropdownModule} from 'ngx-bootstrap';
import { EventsService } from './_services/events.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export const jwtConfig = {
  tokenGetter: tokenGetter,
  whitelistedDomains: ['http://localhost:3500/']
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CalendarComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    JwtModule.forRoot({
      config: jwtConfig
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
