import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../models/question.interface';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	text: string;
	answer: string;

	@Input() question: Question;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onRemoveQuestion(question: Question) {
  	this.dataService.removeQuestion(question);
  }

}
