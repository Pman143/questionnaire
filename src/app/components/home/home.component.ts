import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  classes: Array<string> = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
  ];
  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  allData = ELEMENT_DATA;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}


export interface PeriodicElement {
  firstName: string;
  lastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {firstName: 'Prince', lastName: 'Semenya'},
  {firstName: 'Prince 1', lastName: 'Semenya'},
  {firstName: 'Prince 2', lastName: 'Semenya'},
  {firstName: 'Prince 3', lastName: 'Semenya'},
  {firstName: 'Prince 4', lastName: 'Semenya'},
  {firstName: 'Prince 5', lastName: 'Semenya'},
  {firstName: 'Prince 6', lastName: 'Semenya'},
  {firstName: 'Prince 7', lastName: 'Semenya'},
  {firstName: 'Prince 8', lastName: 'Semenya'},
  {firstName: 'Prince 9', lastName: 'Semenya'},
  {firstName: 'Prince 10', lastName: 'Semenya'},
];
