import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup | undefined;
[x: string]: any;
  // Mock user credentials for simplicity
  private readonly username = 'user';
  private readonly password = 'Password@123';
usernameInput: any;

  constructor(private router: Router,private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(form: any) {
    if (form.valid) {
      const enteredUsername = form.value.username;
      const enteredPassword = form.value.password;

      // Simulate authentication
      if (enteredUsername === this.username && enteredPassword === this.password) {
        // Redirect to the record table on successful login
        const newWindow = this.router.navigate(['/record-table']);
     
        
      
    
         
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('Please fill in all fields');
    }
  }
  
}