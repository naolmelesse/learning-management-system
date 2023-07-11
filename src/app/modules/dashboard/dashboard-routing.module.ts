import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddProgramComponent } from './add-program/add-program.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { AllProgramsComponent } from './all-programs/all-programs.component';
import { AllTalentsComponent } from './all-talents/all-talents.component';
import { AllTrainersComponent } from './all-trainers/all-trainers.component';
import { DashboardComponent } from './dashboard.component';
import { EditProfileTalentComponent } from './edit-profile-talent/edit-profile-talent.component';
import { EditProfileTrainerComponent } from './edit-profile-trainer/edit-profile-trainer.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EnrollmentApprovalComponent } from './enrollment-approval/enrollment-approval.component';
import { GradeDetailsComponent } from './grade-details/grade-details.component';
import { HomeComponent } from './home/home.component';
import { MyGradesComponent } from './my-grades/my-grades.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramActivationComponent } from './program-activation/program-activation.component';
import { ProgramPublicationComponent } from './program-publication/program-publication.component';
import { RoleAssignmentComponent } from './role-assignment/role-assignment.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { SettingsComponent } from './settings/settings.component';
import { TalentApprovalComponent } from './talent-approval/talent-approval.component';
import { TalentEvaluationSheetComponent } from './talent-evaluation-sheet/talent-evaluation-sheet.component';
import { TalentEvaluationComponent } from './talent-evaluation/talent-evaluation.component';
import { ViewProfileTalentComponent } from './view-profile-talent/view-profile-talent.component';
import { ViewProfileTrainerComponent } from './view-profile-trainer/view-profile-trainer.component';

@NgModule({
    imports: [RouterModule.forChild(
        [
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            {
                path: '',
                component: DashboardComponent,
                children: [
                    {
                        path: 'home',
                        component: HomeComponent,
                        title: 'Dashboard | Home'
                    },
                    {
                        path: 'my-programs',
                        component: MyProgramsComponent,
                        title: 'Dashboard | My Programs'
                    },
                    {
                        path: 'my-grades',
                        children: [
                            {
                                path: '',
                                component: MyGradesComponent,
                                title: 'Dashboard | My Grades',
                            },
                            {
                                path: ':programID',
                                component: GradeDetailsComponent,
                                title: 'Dashboard | Grade Details'
                            }
                        ]
                    },
                    {
                        path: 'program-publication',
                        component: ProgramPublicationComponent,
                        title: 'Dashboard | Program Publication'
                    },
                    {
                        path: 'program-activation',
                        component: ProgramActivationComponent,
                        title: 'Dashboard | Program Activation'
                    },
                    {
                        path: 'talent-evaluation',
                        children: [
                            {
                                path: '',
                                component: TalentEvaluationComponent,
                                title: 'Dashboard | Talent Evaluation'
                            },
                            {
                                path: ':programID',
                                component: TalentEvaluationSheetComponent,
                                title: 'Dashboard | Evaluation Sheet'
                            }
                        ]
                    },
                    {
                        path: 'all-talents',
                        children: [
                            {
                                path: '',
                                component: AllTalentsComponent,
                                title: 'Dashboard | All Talents',
                            },
                            {
                                path: 'view/:talentID',
                                component: ViewProfileTalentComponent,
                                title: 'Dashboard | View Talent Profile',
                            },
                            {
                                path: 'edit/:talentID',
                                component: EditProfileTalentComponent,
                                title: 'Dashboard | Edit Talent Profile'
                            }
                        ]
                    },
                    {
                        path: 'all-trainers',
                        children: [
                            {
                                path: '',
                                component: AllTrainersComponent,
                                title: 'Dashboard | All Trainers',
                            },
                            {
                                path: 'view/:trainerID',
                                component: ViewProfileTrainerComponent,
                                title: 'Dashboard | View Trainer Profile',
                            },
                            {
                                path: 'edit/:trainerID',
                                component: EditProfileTrainerComponent,
                                title: 'Dashboard | Edit Trainer Profile'
                            }
                        ]
                    },
                    {
                        path: 'all-programs',
                        children: [
                            {
                                path: '',
                                component: AllProgramsComponent,
                                title: 'Dashboard | All Programs',
                            },
                            {
                                path: 'edit/:programID',
                                component: AddProgramComponent,
                                title: 'Dashboard | Edit Program'
                            }
                        ]
                    },
                    {
                        path: 'enrollment-approvals',
                        component: EnrollmentApprovalComponent,
                        title: 'Dashboard | Enrollment Approvals'
                    },
                    {
                        path: 'talent-approvals',
                        component: TalentApprovalComponent,
                        title: 'Dashboard | Talent Approvals'
                    },
                    {
                        path: 'add-program',
                        component: AddProgramComponent,
                        title: 'Dashboard | Add Program'
                    },
                    {
                        path: 'add-trainer',
                        component: AddTrainerComponent,
                        title: 'Dashboard | Add Trainer'
                    },
                    {
                        path: 'settings',
                        component: SettingsComponent,
                        title: 'Dashboard | Settings'
                    },
                    {
                        path: 'role-assignment',
                        component: RoleAssignmentComponent,
                        title: 'Dashboard | Role Assignment'
                    },
                    {
                        path: 'role-management',
                        component: RoleManagementComponent,
                        title: 'Dashboard | Role Management'
                    },
                    {
                        path: 'profile',
                        component: ProfileComponent,
                        title: 'Dashboard | Profile'
                    },
                    {
                        path: 'edit-profile',
                        component: EditProfileComponent,
                        title: 'Dashboard | Profile'
                    }
                ]
            },
        ]
    )],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
