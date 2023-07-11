import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grades, Program, Talent, TalentCredentialInterface, TalentPersonalDetails } from 'src/assets/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  get myProgramsForEvaluation(): Observable<Program[]> {
    return this._http.get<Program[]>('../assets/data/programs.json');
  }

  get evaluationSheet(): Observable<Grades[]> {
    return this._http.get<Grades[]>('../assets/data/programs-with-grades.json');
  }

  get talentDetails(): Observable<Talent[]> {
    return this._http.get<Talent[]>('../assets/data/talents-data.json');
  }

  get allTalents() {
    return this._http.get('../assets/data/all-talents.json');
  }
  public getTalentGrades(programID?: string): Observable<Grades[]>{
    return this._http.get<Grades[]>('../assets/data/talent-grades.json');
  }
}
