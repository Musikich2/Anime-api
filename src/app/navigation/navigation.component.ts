import { Component} from '@angular/core';
import {NonNullableFormBuilder , Validators , ValidatorFn, ValidationErrors,  AbstractControl} from '@angular/forms'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public alreadyHaveAnAccount:boolean = false;

  public justLogin:boolean = false;

  public registerForm:any;
  
  constructor( private fb: NonNullableFormBuilder){
    this.registerForm = this.fb.group({
      name:['',[Validators.required , Validators.minLength(3) , Validators.pattern(/^[A-z]/) , this.badNameValidator('badname')]],
      email:['',[Validators.email , Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required ]]
    })

    
    this.registerForm.controls.confirmPassword.setValidators([
      this.confirmPasswordValidator(this.registerForm.controls.password) , 
      Validators.required
    ])

    

  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
    console.log(this.registerForm.value);

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
  goToLogin(){
    this.alreadyHaveAnAccount = true;
  }

  public loginForm = this.fb.group({
    loginEmail:['',[Validators.email , Validators.required]],
    loginPassword:['',[Validators.required,Validators.minLength(8)]]
  })

  alreadyLogin(){
    this.justLogin = true;
  }
  goToRegister(){
    this.alreadyHaveAnAccount = false;
  }


  
}
