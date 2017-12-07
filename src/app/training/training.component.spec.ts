import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { TrainingComponent } from './training.component';
import { TrainingService } from './training.service';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let trainingService: TrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingComponent ], // declare the test component
      providers:[TrainingService]
    });

    fixture = TestBed.createComponent(TrainingComponent);

    component = fixture.componentInstance; // BannerComponent test instance
    trainingService = TestBed.get(TrainingService);
    // query for the title <h1> by CSS element selector
    //de = fixture.debugElement.query(By.css('h1'));
    de = fixture.debugElement.children[0].nativeElement;
    el = de.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TrainingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  
  //  it('should display message', () => {
  //  fixture.detectChanges();
  //  expect(el.textContent).toContain(component.trainingMessage.message);
  //  expect(trainingService.getTrainingMessage).toHaveBeenCalled();
 // });

  //it('should get traning message on init', () => {
   // fixture.detectChanges();
   // expect(component.trainingMessage).toContain(component.trainingMessage.message);
   // expect(trainingService.getTrainingMessage).toHaveBeenCalled();
  //});
  
});
