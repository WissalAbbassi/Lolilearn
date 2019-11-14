import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {




  constructor(
   
     ) 
  { }

  ngOnInit() {
    
  }


 /* processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}. My phone is ${this.phone}. My company is ${this.company}`;
    alert(allInfo); 
  }*/

}
