import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable'

import { Restaurant } from './restaurant/restaurant.model';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {ErrorHandler} from '../app.error-handler'
import {MEAT_API} from '../app.api';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(
     private http: Http
  ) { }


  restaurants(): Observable<Restaurant[]>{
     return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())
     .catch(ErrorHandler.handleError)
  }
  restaurantById(id){
     return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())
     .catch(ErrorHandler.handleError)
  }
  reviewsOfRestaurants(id:string){
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json())
   .catch(ErrorHandler.handleError)
  }

  menuOfRestaurants(id:string){
   return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json())
  .catch(ErrorHandler.handleError)
 }

}