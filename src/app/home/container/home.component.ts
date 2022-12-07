import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private homeFacade: HomeFacade,
    public homeService: HomeService
  ) {}

  ngOnInit() {
    this.homeFacade.getAllProducts();
  }
}
