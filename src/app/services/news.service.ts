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
}