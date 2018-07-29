import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Welcome {{name}}
    </h2>
    <h2>{{2+2}}</h2>
    <h2 class="text-success">{{"Welcome " + name }}</h2>
    <h2>{{name.length}}</h2>
    <h2 [class]="successClass">{{name.toUpperCase()}}</h2>
    <h2 [class.text-danger]="hasError">{{siteUrl}}</h2>
    <h2 [ngClass]="messageClasses">{{greetUser()}}</h2>
    
    <input [id]="myID" type="text" value="Nitish">
    <input  [disabled]="isDisabled" id="{{myID}}" type="text" value="Kumar">
    <input  bind-disabled="isDisabled" id="{{myID}}" type="text" value="Kumar">

    `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Nitish Kumar"
  public siteUrl = window.location.href;
  public myID = "testID";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
