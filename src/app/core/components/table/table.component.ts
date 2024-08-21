
import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Column } from '../../models/column';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [MatTableModule, MatSortModule, RouterLink, CommonModule]
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input()
  tableColumns: Array<Column> = [];

  @Input()
  tableData: Array<T> = [];

  displayedColumns: Array<string> = [];

  dataSource = new MatTableDataSource<T>()

  constructor() { }

  loadData(): void {
    this.displayedColumns = this.tableColumns.map((c) => c.columnDef);
    this.dataSource.data = this.tableData;
  }

  ngOnInit(): void {
    this.loadData()
  }

  ngOnChanges(): void {
    this.loadData()
  }

  @ViewChild(MatSort) sort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}