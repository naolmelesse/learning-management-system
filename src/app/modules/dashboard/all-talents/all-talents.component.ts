import { Component, ViewChild, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Talent } from 'src/assets/interfaces';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'dashboard-all-talents',
  templateUrl: './all-talents.component.html',
  styleUrls: ['./all-talents.component.scss']
})

export class AllTalentsComponent implements OnInit {

  @ViewChild('talentsTable') talentsTable!: any;
  @ViewChild('programCell') programCell!:any;
  allTalents!: [];
  items!: MenuItem[];
  programs!: Array<any>[];
  grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-'];

  selectedPrograms!: string[];
  selectedGrades!: string[];
  columnFields: string[] = ['id', 'name', 'email', 'age', 'enrolledPrograms'];

  constructor(
    private _httpService: HttpService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Program Wise',},
      { label: 'Grade Wise'},
    ];

    this._httpService.allTalents.subscribe({
      next: (data: any) => {
        this.allTalents = data;
        this.addSelectionPrograms(this.allTalents);
      },
      error: (err) => console.log(err),
      complete: () => console.log('call done')
    })

    
  }

  addSelectionPrograms(talentPrograms: []){
    let tempPrograms: any[] = [];
    talentPrograms.forEach((talent: any) => {
      talent.enrolledPrograms.forEach((program : any)=>{
        if(tempPrograms.length == 0) tempPrograms.push(program.name);
        else
          if(!tempPrograms.includes(program.name)) tempPrograms.push(program.name);
      })
    })
    let anotherProgramTemp: any[] = [];
    tempPrograms.forEach(p => {
      anotherProgramTemp.push({name: p})
    });
    this.programs = anotherProgramTemp;
  }

  clear(table: Table) {
    table.clear();
  }

  public searchValue(e: any): void {
    this.talentsTable.filterGlobal(e.target.value, 'contains');

  }

  public selectionChanged(e: any){
    const tmp = this.programs.filter((program: any) => {
      console.log(program);
      return program.enrolledPrograms.some((value: any) => {
        return this.selectedPrograms.includes(value.name);
      })
    })
    console.log(tmp);
  }


}
