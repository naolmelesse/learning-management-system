import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from 'primeng/table';
import { HttpService } from 'src/app/services/http/http.service';
import { Grades } from 'src/assets/interfaces';

@Component({
  selector: 'dashboard-talent-evaluation-sheet',
  templateUrl: './talent-evaluation-sheet.component.html',
  styleUrls: ['./talent-evaluation-sheet.component.scss']
})
export class TalentEvaluationSheetComponent implements OnInit {

  @ViewChild('evaluationSheet') evaluationSheet!: any;

  public tableData: any[] = [];
  public programID: string = '';

  public mainColumns: any = [];
  public subColumns: any = [];
  public subColCounts: number[] = [1];
  public displayedColumnsSub: string[] = [];

  constructor(
    private _httpService: HttpService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((d: any) => {
      this.programID = d.programID;
    })

    this._httpService.evaluationSheet.subscribe({
      next: (data: Grades[]) => this._generateTable(data),
      error: (err) => console.log(err),
      complete: () => console.log('call done')
    });
  }

  private _generateTable(data: Grades[]): void {
    var APIData = data;

    this.mainColumns.push({
      name: 'Talent Name',
      id: 'talentName'
    });

    this.subColumns.push({
      name: '',
      id: 'talentName1'
    });

    for (var s in APIData[0].gradeDetails) {
      this.mainColumns.push({
        name: APIData[0].gradeDetails[s].mainSkillName,
        id: APIData[0].gradeDetails[s].mainSkillID
      });
    }

    for (var x in APIData[0].gradeDetails) {
      var count = 0;
      for (var i in APIData[0].gradeDetails[x].subSkills) {
        this.subColumns.push({
          id: APIData[0].gradeDetails[x].subSkills[i].subSkillID,
          name: APIData[0].gradeDetails[x].subSkills[i].subSkillName
        });
        count++;
      }
      this.subColCounts.push(count);
    }

    this.subColumns.map((d: any) => {
      this.displayedColumnsSub.push(d.id);
    })

    for (var x in APIData) {
      var temp: any = {
        talentName1: APIData[x].talentName,
        talentID: APIData[x].talentID
      };
      for (var i in APIData[x].gradeDetails) {
        for (var k in APIData[x].gradeDetails[i].subSkills) {
          temp[APIData[x].gradeDetails[i].subSkills[k].subSkillID] = APIData[x].gradeDetails[i].subSkills[k].subSkillScore;
        }
      }
      this.tableData.push(temp);
    }
    return;
  }

  public updateEvaluation(e: any, talentID: string): void {
    console.log(e.target.value, talentID, this.programID);

  }

  public clear(table: Table) {
    table.clear();
  }

  public searchValue(e: any): void {
    this.evaluationSheet.filterGlobal(e.target.value, 'contains')
  }
}