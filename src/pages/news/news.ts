import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewsService} from '../../app/services/news.service';
import {DetailsPage} from '../details/details';
import { ItemSliding } from 'ionic-angular';

@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsPage {
  elem: any;
  temp:any;
  x:any;
  data:any[];
  a:any;
  
  constructor(public navCtrl: NavController, private newsService:NewsService) {
	  		
	this.getPosts();
	          
  }

      getPosts(){
          this.newsService.getPosts().subscribe(response => {
             this.elem = response;
             // this.temp=response.items[0].promo_images[0].url;
             // this.data=[this.elem];            
      });
}
}