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
            //  console.log(response);
             console.log(this.elem);
             console.log("Images");
             this.temp=response.items[0].promo_images[0].url;
             console.log(this.temp);
             this.data=[this.elem];
             console.log(this.data);
            //  console.log(response);
            // this.data[0]="Hi"; 
            // console.log(this.data);
        //     for(var i=0;i<=10;i++){
        //       if(!this.data[i]) this.data[i]= [];
        //     }  
        //     this.data[0]="1";
        //       console.log("hello");
        //      for(var i=1;i<=10;i++){ 
        //         if(this.elem!== null && this.elem !== undefined){
        //           this.data[i]= { i: [this.elem] } ;
        //           console.log(this.data);
        //         }
        // }
      });
}
       
  viewItem(x){
    this.navCtrl.push(DetailsPage, {
      x:x
    });
  }  
  
  delete(x)
  {
    
    // this.data.push(x);
    // let index = this.data.indexOf(x);
    // this.data.splice(index, 1);
    
    // if(a !== null && a!== undefined){
    //  this.newsService.deleteIt(x,this.data);
    // }

  if(x !== null && x!== undefined){
    console.log(x);
    // this.data=[{x}];
//    console.log(this.data);
    let index = this.data[0].indexOf(x);
    console.log(index);
    if (index !== -1) {
        console.log("inside if");
        this.data[0].splice(index, 1);
        console.log("after if");
    } 
  }
  }
}  

