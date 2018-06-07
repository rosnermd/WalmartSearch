import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationListComponent } from './recommendation-list.component';
import { RecommendationStubComponent } from '../recommendation/recommendation.component.stub';
import { AppMaterialModule } from '../../app.material.module';

describe('RecommendationListComponent', () => {
  let component: RecommendationListComponent;
  let fixture: ComponentFixture<RecommendationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule
      ],
      declarations: [
        RecommendationListComponent,
        RecommendationStubComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
