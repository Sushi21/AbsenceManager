import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../_models/User';
import { AuthUser } from '../_models/authUser';
import { environment } from '../../environments/environment';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  baseUrl = environment.apiUrl;
  userToken: any;
  decodedToken: any;
  currentUser: User;
  constructor(
    private http: HttpClient,
    private jwtHelperService: JwtHelperService
  ) {}



  login(model: any) {
    return this.http
      .post<AuthUser>(this.baseUrl + '/login', model, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      })
      .map(user => {
        if (user) {
          localStorage.setItem('token', user.tokenString);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelperService.decodeToken(
            user.tokenString
          );
          this.currentUser = user.user;
          this.userToken = user.tokenString;
        }
      });
  }

  loggedIn() {
    const token = this.jwtHelperService.tokenGetter();

    if (!token) {
      return false;
    }

    return !this.jwtHelperService.isTokenExpired(token);
  }
}
