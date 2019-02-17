import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient, HttpHeader} from '@angular/common/http';

private http: HttpClient;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

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
  this.http.post("http://localhost:3000/create_user",this.user).subscribe(  data => {
  console.log("POST Request is successful ",data);
  },
  error => {
  console.log("Error", error);
});
}
}