import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TriviaSelectionComponent} from "./trivia-selection/trivia-selection.component";
import {QuizResultsComponent} from "./quiz-results/quiz-results.component";

const routes: Routes = [
  {path : 'trivia-selection' , component : TriviaSelectionComponent},
  {path : 'quiz-results' , component : QuizResultsComponent},
  {path: '', redirectTo: '/trivia-selection', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

