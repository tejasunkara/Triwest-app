import { Component, OnInit } from '@angular/core';
import { Training } from './training';
import { TrainingService } from './training.service';

@Component({
  selector: 'ccn-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  providers: [TrainingService]
})
export class TrainingComponent implements OnInit {
  trainingMessage: Training;

  constructor(private trainingService: TrainingService) { }

  getTrainingMessage(): void {
    this.trainingService.getTrainingMessage().then(trainingMessage => this.trainingMessage = 
      trainingMessage);
  }

  ngOnInit(): void {
    this.getTrainingMessage();
  }

}
