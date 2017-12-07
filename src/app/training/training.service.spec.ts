/*import { async, getTestBed, TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule } from '@angular/http';
import {TrainingService} from './training.service';
import { TrainingMessage } from './mock-training';
import { Training } from './training';

describe('Service: TrainingService', () => {  
  const testData: Training =  {
      id: 1,
      title: 'Windstrom',
      message:'During the classroom portion of training you will be introduced to a variety of subjects ranging from computers and front office skills, to anatomy, physiology and the various systems of the human body.',
      date: '08/02/2017',
      URL: 'www.triwest.com'
    };
  let service: TrainingService;

  beforeEach(() => {
    service = new TrainingService();    
  });

  afterEach(() => {
    service = null;    
  });

  it('should return a message', () => {
            expect(service.getTrainingMessage).toHaveBeenCalled();
            expect(service.getTrainingMessage().then).toEqual(testData);            
        });

});

*/