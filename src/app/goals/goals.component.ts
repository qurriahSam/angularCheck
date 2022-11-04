import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert-service/alert.service';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { Goal } from './goal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
})
export class GoalsComponent implements OnInit {
  toggleDetails(index: number) {
    this.aims[index].showDescription = !this.aims[index].showDescription;
  }
  aims!: Goal[];
  alertService!: AlertService;
  quote!: Quote;

  constructor(
    goalService: GoalService,
    alertService: AlertService,
    private http: HttpClient,
    private router: Router
  ) {
    this.aims = goalService.getGoals();
    this.alertService = alertService;
  }

  ngOnInit(): void {
    interface ApiResponse {
      author: string;
      quote: string;
    }

    this.http
      .get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json')
      .subscribe((data) => (this.quote = new Quote(data.author, data.quote)));
  }

  newGoal(goal: Goal) {
    let goalLength = this.aims.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.aims.push(goal);
  }

  deleteGoal(isComplete: boolean, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.aims[index].name}?`
      );

      if (toDelete) {
        this.aims.splice(index, 1);
        this.alertService.alertMe('goal has been deleted');
      }
    }
  }

  goToUrl(id: number) {
    this.router.navigate(['goals', id]);
  }
}
