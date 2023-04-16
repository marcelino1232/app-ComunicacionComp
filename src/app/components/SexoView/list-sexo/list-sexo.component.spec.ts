import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSexoComponent } from './list-sexo.component';

describe('ListSexoComponent', () => {
  let component: ListSexoComponent;
  let fixture: ComponentFixture<ListSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSexoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
