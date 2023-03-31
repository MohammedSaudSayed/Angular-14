import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h5>
      404 Error not found
    </h5>
  `,
  styles: [
    "h5{color:red; font-size:40px}"
  ]
})
export class StatusComponent {

}