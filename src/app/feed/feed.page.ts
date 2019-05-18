import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public nome_usuario:string = "João das Couves";

  constructor() { }

  public somaDoisNumeros(number1:number,number2:number):void {
    alert(number1 + number2);
  }

  ngOnInit() {
    this.somaDoisNumeros(10, 99);
  }

}
