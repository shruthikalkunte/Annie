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
        
  }

  ngOnInit(){
      this.getPosts(5);
  }

      getPosts(limit){
          this.newsService.getPosts(limit).subscribe(response => {
             this.elem = response.items;
             this.temp=response.items[0].promo_images[0].url;
             this.data=[this.elem];            
      });
}
       
  viewItem(x){
    this.navCtrl.push(DetailsPage, {
      x:x
    });
  }  
  
  delete(x){
    if(x !== null && x!== undefined){
      let index = this.data[0].indexOf(x);
        if (index !== -1) {
          this.data[0].splice(index, 1);
    } 
  }
  }
}  

