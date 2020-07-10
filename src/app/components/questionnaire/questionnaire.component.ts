import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  temperatureValue = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

  onTemperatureChange(val: number) {
    console.log(val);
    this.temperatureValue = val;
  }
}
