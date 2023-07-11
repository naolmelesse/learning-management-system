import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { HttpService } from 'src/app/services/http/http.service';
import { Program } from 'src/assets/interfaces';

@Component({
  selector: 'dashboard-talent-evaluation',
  templateUrl: './talent-evaluation.component.html',
  styleUrls: ['./talent-evaluation.component.scss']
})
export class TalentEvaluationComponent implements OnInit{

  @ViewChild('programsTable') programsTable!: any;

  public programs!: Program[];

  columnFields: string[] = ['programID', 'programTitle', 'trainers', 'skillsList','evaluate'];

  constructor(
    private _httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this._httpService.myProgramsForEvaluation.subscribe({
      next: (data: Program[]) => this.programs = data,
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
