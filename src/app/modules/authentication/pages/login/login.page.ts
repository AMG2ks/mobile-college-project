import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControlName, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../core/services/auth/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   loginForm: FormGroup;
  constructor(private auth: AuthService, private form: FormBuilder) {
    this.loginForm = this.form.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators]
    })
  }
  ngOnInit(): void {
      throw new Error('Method not implemented.');
  }

  get email(){
    return this.loginForm.get('email')?.value;
  }

  get password(){
    return this.loginForm.get('password')?.value;
  }

  loginUser(){
    let user: {email:any, password:any}= {
      email: this.email,
      password: this.password
    };
    this.auth.login(user)
      .subscribe(
        (res) => {
          if(res){
            console.log(res)
          }
        },
        (error: Error)=> {
          console.log(error);
        }
      )
  }


}
