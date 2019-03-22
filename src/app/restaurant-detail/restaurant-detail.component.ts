import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
 
 public restaurant : Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id']).subscribe(result =>{
      this.restaurant = result
    })
  }

}
