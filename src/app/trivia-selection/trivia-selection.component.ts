import {Component, OnInit} from '@angular/core';
import {TriviaDataService} from "../../services/trivia-data.service";
import {AppConstants} from "../app.constants";
import {Difficulty} from "../../models/difficulty";
import {TriviaCategories} from "../../models/trivia-categories";
import {TriviaCategory } from "../../models/trivia-category";

@Component({
  selector: 'app-trivia-selection',
  templateUrl: './trivia-selection.component.html',
  styleUrls: ['./trivia-selection.component.scss']
})

export class TriviaSelectionComponent implements OnInit{
  protected readonly AppConstants = AppConstants;
  protected readonly Difficulty = Difficulty;
  categories : TriviaCategory[];
  selectedCategory: string;
  selectedDifficulty: string;
  generateQuestions : boolean;
  constructor(private dataService : TriviaDataService) {
  }
  ngOnInit(): void {
    this.categories = this.dataService.getAllCategories();
    if(this.categories == undefined){
      //first time rendering
      this.dataService.retrieveCategories().subscribe(
        (data:TriviaCategories)=>{
          this.categories = data.trivia_categories;
          this.dataService.setCategories(this.categories);
        }
      );
    }
  }
}
