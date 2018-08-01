import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome {{name}}
  </h2>

  <!-- class attribute -->
  <h2 class="text-success">
    Codevolution
  </h2>

  <h2 [class]="successClass">
    Codevolution
  </h2>

  <h2 [class.text-danger]="!hasError">
    Codevolution
  </h2>

  <h2 [ngClass]="messageClass">
    Codevolution
  </h2>

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

  // To use class binding however we need to declare new property and assign and assign to 
  // it the class name. Then in the template we can use the square bracket syntax i.e []
  // to bind the class.

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }
}
