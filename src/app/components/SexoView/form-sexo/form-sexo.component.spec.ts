import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSexoComponent } from './form-sexo.component';

describe('FormSexoComponent', () => {
  let component: FormSexoComponent;
  let fixture: ComponentFixture<FormSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
