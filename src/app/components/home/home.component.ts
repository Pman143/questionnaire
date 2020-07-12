import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatTabChangeEvent} from '@angular/material/tabs';

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
  userInfo: any = [];
  searchTerm = 'Grade 1';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserInfoByGrade(this.searchTerm);
  }

  getUserInfoByGrade(searchTerm: string) {
    this.userService.getUserInformation(searchTerm)
      .subscribe((res) => {
        this.userInfo = res;
        console.log(res);
      });
  }

  onGradeClick(grade: string) {
    console.log(grade);
  }

  onSelectGrade(event: MatTabChangeEvent) {
    console.log(event.tab.textLabel);
    this.getUserInfoByGrade(event.tab.textLabel);
  }
}
