import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {AppConstants} from './app.constants';
import {TriviaCategories} from "../models/trivia-categories";
import {QuestionsList} from "../models/questions-list";
import {Question} from "../models/question";
import {TriviaCategory} from "../models/trivia-category";
@Injectable({
  providedIn: 'root'
})
export class TriviaDataService {

  private answeredQuestions : Question[];
  private allCategories : TriviaCategory[];
  constructor(private http: HttpClient) { }
  retrieveCategories(): Observable<TriviaCategories>{
    return this.http.get<TriviaCategories>(AppConstants.CATEGORY_LIST_API);
  }
  retrieveQuestions(category :string,difficulty :string):Observable<QuestionsList>{
    return this.http.get<QuestionsList>(`${AppConstants.QUESTIONS_RETRIEVAL_API}&category=${category}&difficulty=${difficulty}`);
  }

  setAnsweredQuestions(questions : Question[]){
    this.answeredQuestions = questions;
  }
  getAnsweredQuestions(){
    return this.answeredQuestions;
  }
  setCategories(categories: TriviaCategory[]) {
     this.allCategories = categories;
  }
  getAllCategories(){
    return this.allCategories;
  }
}
