import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signin!:FormGroup
  constructor(private fb:FormBuilder){
    this.signin=this.fb.group([{
      email:['',[Validators.required,Validators.minLength(4),Validators.maxLength(50),Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      username:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50),Validators.pattern('^[A-Za-z]\\w{5,29}$')]],
      password:['',[Validators.required,Validators.minLength(10),Validators.maxLength(50),Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]]
    }])
  }

}
