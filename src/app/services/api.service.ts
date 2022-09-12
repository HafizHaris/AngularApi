import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Posts } from "../classes/posts";


@Injectable()
export class ApiService{

    constructor(private httpclient: HttpClient){}


    getcomments(): Observable<any>{
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    }

    getcommentsbyparameter(): Observable<any>{
        let userId = new HttpParams().set('userId',"1");
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts",{params:userId})
    }

    post(postObj:Posts): Observable<any> {
        return this.httpclient.post("https://jsonplaceholder.typicode.com/posts", postObj)
    }
}