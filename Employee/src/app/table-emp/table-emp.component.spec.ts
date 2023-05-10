import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmpComponent } from './table-emp.component';

describe('TableEmpComponent', () => {
  let component: TableEmpComponent;
  let fixture: ComponentFixture<TableEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
