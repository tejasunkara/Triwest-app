import { Injectable } from '@angular/core';

import { Training } from './training';
import { TrainingMessage } from './mock-training';

@Injectable()
export class TrainingService {
  getTrainingMessage(): Promise<Training> {
    return Promise.resolve(TrainingMessage);
  }

  // See the "Take it slow" appendix
  getTrainingMessageSlowly(): Promise<Training> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTrainingMessage()), 2000);
    });
  }
}