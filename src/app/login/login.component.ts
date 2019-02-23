import { Component, OnInit } from '@angular/core';
import { Userlog } from '../userlog';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
user:Userlog={
	userName:"",
	password:""
};
onLog():void{
	alert(this.user.userName );
	console.log(this.user.userName);
  this.http.post("http://localhost:3000/apilog",this.user).subscribe(
   data => {
  console.log("POST Request is successful ",data);

  },
  error => {
  console.log("Error", error);
  });
}
}
