import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
user:User={
	userName:"",
	email:"",
    password:""
};
onSubmit():void{
	alert(this.user.userName +" "+ this.user.email);
	console.log(this.user.userName);
  this.http.post("http://localhost:3000/api",this.user).subscribe(
   data => {
  console.log("POST Request is successful ",data);

  },
  error => {
  console.log("Error", error);
});
}
}