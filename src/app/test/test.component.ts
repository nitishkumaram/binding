import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
    Welcome {{name}}
    </h2>

    <h2 [style.color]="'blue'">Style Binding 1</h2>
    
    <!-- Conditional operator -->

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 2</h2>

    <h2 [style.color]="highlightColor">Style Binding 3</h2>

    <h2 [ngStyle]="titleStyles">Style Binding 4</h2>


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
  public hasError = true;
  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
