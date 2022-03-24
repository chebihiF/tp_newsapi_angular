import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsApiService:NewsApiService) { }

  ngOnInit(): void {
    this.newsApiService.getNews().subscribe((data)=>{
      console.log(data);
    })
  }

}
