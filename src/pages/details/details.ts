import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  x:any;
  constructor(public navCtrl: NavController, public params:NavParams) {
      this.x = params.get('x');
  }

}
