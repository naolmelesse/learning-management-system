import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { HttpService } from 'src/app/services/http/http.service';
import { Grades } from 'src/assets/interfaces';

@Component({
  selector: 'dashboard-my-grades',
  templateUrl: './my-grades.component.html',
  styleUrls: ['./my-grades.component.scss']
})
export class MyGradesComponent implements OnInit{

  @ViewChild('programsTable') programsTable!: any;

  public programs!: Grades[];

  columnFields: string[] = ['programID', 'programName', 'skillsList','overallGrades', 'viewGrades'];

  constructor(
    private _httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this._httpService.getTalentGrades().subscribe({
      next: (data: Grades[]) => this.programs = data,
      error: (err) => console.log(err),
      complete: () => console.log('call done')
    });
  }

  clear(table: Table) {
    table.clear();
  }

  public searchValue(e: any): void {
    this.programsTable.filterGlobal(e.target.value, 'contains')
  }
}
