import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggablePageComponent } from './draggable-page.component';

describe('DraggablePageComponent', () => {
  let component: DraggablePageComponent;
  let fixture: ComponentFixture<DraggablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraggablePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
