import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      <a routerLink="add">Add Contact</a>
    </h2>
    <br>
    <h2>
      <a routerLink="edit/201">Edit Contact</a>
    </h2>

    <div>
      <router-outlet></router-outlet>
    </div>



  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
