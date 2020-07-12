import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {MatOptionSelectionChange} from '@angular/material/core';

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
  isLoading = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserInfoByGrade(this.searchTerm);
  }

  getUserInfoByGrade(searchTerm: string) {
    this.userService.getUserInformation(searchTerm)
      .subscribe((res) => {
        this.isLoading = false;
        this.userInfo = res;
        console.log(res);
      });
  }

  onChangeGrade(event: any) {
    this.isLoading = true;
    this.userInfo = [];
    this.searchTerm = event;
    setTimeout(() => {
      this.getUserInfoByGrade(event);
    }, 200);
  }
}
