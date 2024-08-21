import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { SeasonManager } from '../../models/manager';

describe('TableComponent', () => {
  let component: TableComponent<SeasonManager>;
  let fixture: ComponentFixture<TableComponent<SeasonManager>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableComponent<SeasonManager>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
