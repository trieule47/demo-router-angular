import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  evenEmitterValue:string | undefined;
  
  profileform = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.profileform)
  }

  addItem(value: string) {
    this.evenEmitterValue = value;
  }

}
