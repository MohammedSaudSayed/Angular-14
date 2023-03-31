import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor() {}
  headername = "Angular by Saud";

  salary = 100000;

  percentage = 0.96;

  birthday = "March 13 2002"

  name = 'Mohammed Saud Sayed';

  isdisabled = true;

  colorname = 'red';

  font = "25px";

  classname = "headclass";

  stylevalue = {"color": "orange", "font-size": "20px"}

  colors = ["red", "orange", "black", "blue"]

  partnersname = "Prachi Bhatt"

  colorname2 = 'blue';

  font2 = "20px";

  ngOnInit(): void {
    
  }

  FunctionClick(name:string)
      {
        alert(name)
      }

      FunctiononClick()
      {
        alert('I got you fooled🤣')
      }
}
