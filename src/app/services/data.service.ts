import { Injectable } from '@angular/core';
import { Question } from '../models/question.interface';

@Injectable()
export class DataService {
	questions: Question[];

  constructor() {
  	/*this.questions = [
  		{
  			text: 'What is your name?',
  			answer: 'My name is Valera',
  			hide: true
  		},
  		{
  			text: 'What is your favorite color?',
  			answer: 'My favorite color is green',
  			hide: true
  		},
  		{
  			text: 'What is your native language?',
  			answer: 'My favorite language is ukrainian',
  			hide: true
  		}
  	]*/
  }

// Get Questions from Local Storage

  getQuestions() {
  	if(localStorage.getItem('questions') === null) {
  		this.questions = [];
  	} else {
  		this.questions = JSON.parse(localStorage.getItem('questions'));
  	}
  	return this.questions;
  }


// Add Questions to Local Storage
   addQuestion(question: Question) {
  	//this.questions.push(question);
  	this.questions.unshift(question);

  	// Init local var
  	let questions;

  	if(localStorage.getItem('questions') === null) {
  		questions = [];
  		// Push new question
  		questions.unshift(question);
  		// Set new array to LS
  		localStorage.setItem('questions', JSON.stringify(questions));
  	} else {
  		questions = JSON.parse(localStorage.getItem('questions'));
  		// Add new question
  		questions.unshift(question);
  		// Re set LS
  		localStorage.setItem('questions', JSON.stringify(questions));
  	}
  }

// Remove Question from Local Storage
  removeQuestion(question) {
  	for(let i = 0; i < this.questions.length; i++) {
  		if(question == this.questions[i]) {
  			this.questions.splice(i, 1);
  			localStorage.setItem('questions', JSON.stringify(this.questions));
  		}
  	}
  } 

}
