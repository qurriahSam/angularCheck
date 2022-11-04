import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goals/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css'],
})
export class GoalDetailComponent implements OnInit {
  @Input() goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  goalDelete(status: boolean) {
    this.isComplete.emit(status);
  }
}
