import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    if(data.user=='dhruv' && data.pass=='12345'){
        localStorage.setItem('user',data.user)
        alert("login successful")
        this.router.navigateByUrl('/home')
    }
    else{
      alert("login failed")
    }
  }

}
