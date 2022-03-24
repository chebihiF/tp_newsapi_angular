import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  getNews(){
    return this.http.get('https://newsapi.org/v2/top-headlines?apiKey=ef63300956114525812a43263230a2dd&country=ma')
  }
}
