import { Injectable } from '@angular/core';
import { HomeApi } from './api/home.api';
import { HomeService } from './service/home.service';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  constructor(private homeApi: HomeApi, private homeService: HomeService) {}

  public getAllProducts() {
    this.homeService.loading$.next(true);
    this.homeApi.getAllProducts().subscribe((productResponse) => {
      this.homeService.products$.next(productResponse);

      this.homeService.loading$.next(false);
    });
  }
}
