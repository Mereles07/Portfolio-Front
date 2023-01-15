import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHabilidadesComponent } from './new-habilidades.component';

describe('NewHabilidadesComponent', () => {
  let component: NewHabilidadesComponent;
  let fixture: ComponentFixture<NewHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
