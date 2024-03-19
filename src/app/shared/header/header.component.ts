import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isopen:boolean = false


  showConatactModal(){

    this.isopen = true
  }
  closePopup(){
    this.isopen = false

  }



}
