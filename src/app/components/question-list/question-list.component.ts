import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
questions: Question[];
//question: Question;

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.questions = this.dataService.getQuestions();
  }

  onAddQuestion(question: Question) {
  	this.dataService.addQuestion(question);
  }

}
