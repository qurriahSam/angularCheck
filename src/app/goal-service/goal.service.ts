import { Injectable } from '@angular/core';
import { Goals } from '../goalList';
import { Goal } from '../goals/goal';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  constructor() {}

  getGoals() {
    return Goals;
  }

  getGoal(id: number) {
    Goals.find((goal) => goal.id === id);
  }
}
