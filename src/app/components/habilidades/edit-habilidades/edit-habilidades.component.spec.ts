import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabilidadesComponent } from './edit-habilidades.component';

describe('EditHabilidadesComponent', () => {
  let component: EditHabilidadesComponent;
  let fixture: ComponentFixture<EditHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
