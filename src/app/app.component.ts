import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ip_angular';
  @ViewChild('myForm')form:any;
  name:string='';

  showalert(){
    alert(`Hello ${this.name}! Your Message Has Been Submitted`);
    this.form.nativeElement.reset();
  }
}
