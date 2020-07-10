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
  questionnaireForm: FormGroup;
  maxDate: Date;
  minDate: Date;
  dateValue: any;

  constructor(private fb: FormBuilder) {
    const currentDate = new Date();
    console.log(currentDate);
    this.maxDate = new Date(currentDate);
    this.minDate = new Date(currentDate);
    this.dateValue = this.maxDate.toDateString();
  }

  ngOnInit(): void {
    this.questionnaireForm = this.fb.group({
      temperature: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      class: new FormControl(null, Validators.required),
      date: new FormControl(this.maxDate.toISOString(), Validators.required),
      questions: this.fb.array([]),
    });
  }

  get questionsList(): FormArray {
    return this.questionnaireForm.get('questions') as FormArray;
  }
/*
  onAnsweringQuestion() {
    this.questionsList.push(this.fb.gr);
  }

  onQuestionChange(question: any) {
    console.log(question);
  }*/

  onTemperatureChange(val: number) {
    console.log(val);
    this.temperatureValue = val;
  }

  onSubmit(formVal: FormGroup) {
    console.log(formVal.value);
  }
}
