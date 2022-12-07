import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({ providedIn: 'root' })
export class HomeService {
  constructor() {}

  public products$: Subject<Product> = new Subject();

  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
