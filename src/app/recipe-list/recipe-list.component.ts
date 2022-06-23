import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  
  recipes:Recipe[] = [
    new Recipe('Test recipe','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.','assets/images/recipe_2.jpg'),
    new Recipe('Test recipe','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ','assets/images/recipe_1.jpg'),
    new Recipe('Test recipe','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ','assets/images/recipe_3.jpg'),
    new Recipe('Test recipe','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. ','assets/images/recipe_4.jpg')
  ];

  ngOnInit(): void {
  }

}
