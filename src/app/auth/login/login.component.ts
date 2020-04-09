import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Auth } from '../loginModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNotFound = false;
  verifyUser: number;

  constructor(private aService: LoginService, private http: HttpClient) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    debugger;
    this.http.get(`https://localhost:44308/api/auth/verifyUserName?username=${loginForm.value.userName}`).
            subscribe(data => {console.log(data);
                               this.verifyUser = +data;
                               console.log(typeof(data));
                               console.log(typeof(this.verifyUser));
                              },
                      error => {console.log(error); },
                      () => console.log('success'));
    // this.aService.verifyUser(loginForm.value.userName).subscribe(
    //   data => {this.verifyUser = data; },
    //   error => {console.warn(error); },
    //   () => {console.log('Success'); }
    // );
    setTimeout(function() {
      if (this.verifyUser !== 1) {
        this.userNotFound = true;
      } else {
        this.userNotFound = false;
        sessionStorage.setItem('loginedUser', loginForm.value.userName);
        console.log('session', sessionStorage.getItem('loginedUser'));
      }
    }, 500);
  }
}
