import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  temperatureValue = 0.0;
  classes: Array<string> = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
  ];
  questions: Array<string> = [
    'Do you have a high temperature?',
    'Do you have a cough?',
    'Do you have a sore throat?',
    'Do you have difficulty breathing(shortness of breath)?',
    'Can you taste food and drinks normally?',
    'Can you smell normally?',
  ];
  questionsAnswers = [
    new FormGroup({
      question: new FormControl(this.questions[0], Validators.required),
      answer: new FormControl(''),
    }),
    new FormGroup({
      question: new FormControl(this.questions[1], Validators.required),
      answer: new FormControl(''),
    }),
    new FormGroup({
      question: new FormControl(this.questions[2], Validators.required),
      answer: new FormControl(''),
    }),
    new FormGroup({
      question: new FormControl(this.questions[3], Validators.required),
      answer: new FormControl(''),
    }),
    new FormGroup({
      question: new FormControl(this.questions[4], Validators.required),
      answer: new FormControl(''),
    }),
    new FormGroup({
      question: new FormControl(this.questions[5], Validators.required),
      answer: new FormControl(''),
    })
  ];
  questionnaireForm: FormGroup;
  maxDate: Date;
  minDate: Date;

  constructor(private fb: FormBuilder) {
    const currentDate = new Date();
    this.maxDate = new Date(currentDate);
    this.minDate = new Date(currentDate);
  }

  ngOnInit(): void {
    this.questionnaireForm = this.fb.group({
      temperature: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required),
      date: new FormControl(this.maxDate.toISOString(), Validators.required),
      questionsAnswers: new FormArray(this.questionsAnswers),
    });
  }

  onTemperatureChange(val: number) {
    console.log(val);
    this.temperatureValue = val;
  }

  onSubmit(formVal: FormGroup) {
    console.log(formVal.value);
  }
}
