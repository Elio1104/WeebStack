import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAiringAnimeComponent } from './top-airing-anime.component';

describe('TopAiringAnimeComponent', () => {
  let component: TopAiringAnimeComponent;
  let fixture: ComponentFixture<TopAiringAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAiringAnimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAiringAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
