import { Component } from '@angular/core';
import {FormBuilder, FormControl, NonNullableFormBuilder , Validators , ValidatorFn, ValidationErrors,  AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  registerForm=this.fb.group({
    name:['',[Validators.required , Validators.minLength(3) , Validators.pattern(/^[A-z]/) , this.badNameValidator('badname')]],
    email:['',[Validators.email , Validators.required]],
    password:['',[Validators.required,Validators.minLength(8)]],
    confirmPassword:['',[Validators.required ]]
  })

  constructor( private fb: NonNullableFormBuilder){
    this.controls.confirmPassword.setValidators([
      this.confirmPasswordValidator(this.controls.password) , 
      Validators.required
    ])
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
    console.log(this.registerForm.value);

  }


  onChange(){
    // console.log(this.registerForm.controls);
    // this.registerForm.controls.name.setValue('nika');
    // this.registerForm.setValue({
    //   name:'nika',
    //   email:'137237263',
    //   password:'713763',

    // })

    this.registerForm.patchValue({
      name:'',
      email:''
    
    })
  }

  get controls(){
    return this.registerForm.controls
  }

  badNameValidator(pattern:string): ValidatorFn{
    return(control: AbstractControl):ValidationErrors | null =>{
      return control.value.includes(pattern)
      ?{badame:'Includes Bad Name !'}
      : null;
    }
  }


  confirmPasswordValidator(compareTo:AbstractControl){
    return(control:AbstractControl): ValidationErrors | null =>{
      if(compareTo.value !== control.value){
        return {confirmPassword:'Passwords do not match'}
      }
      return null;
    }

  }


}
