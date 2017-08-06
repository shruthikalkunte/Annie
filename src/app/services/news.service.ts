import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService{
    http:any;
    baseUrl:String;
    index:number;
    msg:any;
    x:any;
    data:any[];

    constructor(http:Http){
        this.http=http;
        this.baseUrl = "https://usc-adapter.partner.nile.works/api/v1/url?url=https://usc-wp.partner.nile.works/";
    }

    getPosts(limit){
        return this.http.get(this.baseUrl+'?limit='+limit)
            .map(res => res.json());
    }


//     deleteIt(x) {
//     // this.data.push(x);
//     // let index = this.data.indexOf(x);
//     if(x !== null && x!== undefined){
//             console.log(x);
//         this.data=["1"];
//         console.log(this.data);
//         let index = this.data.indexOf(x);
//         console.log(index);
//     if (index == -1) {
//         //console.log("inside if");
//         this.data.splice(index, 1);
//         //console.log("after if");
//     } 
//     console.log("deleted3");
//     }
// }


deleteIt(x,data){
 if(x !== null && x!== undefined){
    console.log(x);
    // this.data=[{x}];
//    console.log(this.data);
    let index = data.indexOf({x});
    console.log(index);
    if (index !== -1) {
        console.log("inside if");
        data.splice(index, 1);
        console.log("after if");
    } 

    // for(var i = 0; i < this.data.length; i++) {
    //   if(this.data[i] == x){
    //     console.log("inside if")  
    //     this.data.splice(this.data[i], 1);
    //     console.log("after deleting");
    //     console.log(this.data);
    //   } 
    // }
 }
}
}