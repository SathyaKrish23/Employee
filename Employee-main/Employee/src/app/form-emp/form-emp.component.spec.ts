import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmpComponent } from './form-emp.component';

describe('FormEmpComponent', () => {
  let component: FormEmpComponent;
  let fixture: ComponentFixture<FormEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
