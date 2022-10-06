import { Component, OnInit } from '@angular/core';
import { upcoming } from '../model/Upcoming';
import { HomeServiceService } from '../service/home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  data !: upcoming;

  constructor(private home: HomeServiceService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.home.getUpComing().pipe().subscribe(res => {
      this.data = res;
      console.log(this.data)
    });
  }

}
