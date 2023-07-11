import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppUi } from 'src/app/services/app-ui/app-ui.service';

@Component({
  selector: 'dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  barData: any;
  pieData: any;
  trainerBarData: any;
  trainerPieData: any;
  trainerStackedBarData: any;
  talentBarData: any;
  talentPieData: any;

  barOptions: any;
  pieOptions: any;
  trainerBarOptions: any;
  trainerPieOptions: any;
  trainerStackedBarOptions: any;
  TalentBarOptions: any;
  talentPieOptions: any;

  // Admin Data
  trainers: any[] = [
      {
        "id": "1000",
        "name": "John",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 1
      },
      {
        "id": "1001",
        "name": "Tom",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 2
      },
      {
        "id": "1002",
        "name": "Emma",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 3
      },
      {
        "id": "1003",
        "name": "Tony",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 4
      },
      {
        "id": "1004",
        "name": "Daniel",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 5
      },
      {
        "id": "1005",
        "name": "Jack",
        "image": "logo-dark.svg",
        "program":  'Angular',
        "rank": 6
      },
      {
        "id": "1006",
        "name": "Terresa",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 7
      },
      {
        "id": "1007",
        "name": "Henry",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 8
      },
      {
        "id": "1008",
        "name": "Lucy",
        "image": "logo-dark.svg",
        "program": 'Angular',
        "rank": 9
      },
      {
        "id": "1009",
        "name": "Jenny",
        "image": "logo-dark.svg",
        "program":  'Angular',
        "rank": 10
      }
    ];
  subscription!: Subscription;
  items!: MenuItem[];

  constructor(public appUI: AppUi) {
      this.subscription = this.appUI.configUpdate$.subscribe(() => {
          this.initCharts();
      });
  }

  ngOnInit() {
      this.initCharts();
      // this.trainers = this.trainerService.getProductsSmall();


      // console.log(this.trainerService.getProductsSmall());
      // .then(data => this.trainers = data);

      // this.items = [
      //     { label: 'Add New', icon: 'pi pi-fw pi-plus' },
      //     { label: 'Remove', icon: 'pi pi-fw pi-minus' },
      // ];
  }

  initCharts() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue(
          '--text-color-secondary'
      );
      const surfaceBorder =
          documentStyle.getPropertyValue('--surface-border');

      // Admin's Bar Graph
      this.barData = {
          labels: [
              'Program1',
              'Program2',
              'Program3',
              'Program4',
              'Program5',
              'Program6',
              'Program7',
          ],
          datasets: [
              {
                  label: 'Enrolled Talents',
                  backgroundColor:
                      documentStyle.getPropertyValue('--primary-500'),
                  borderColor:
                      documentStyle.getPropertyValue('--primary-500'),
                  data: [70, 60, 100, 66, 70, 90, 90],
              },
              {
                  label: 'Actual Talents',
                  backgroundColor:
                      documentStyle.getPropertyValue('--primary-200'),
                  borderColor:
                      documentStyle.getPropertyValue('--primary-200'),
                  data: [55, 59, 70, 45, 56, 76, 40],
              },
          ],
      };
      this.barOptions = {
          plugins: {
              legend: {
                  labels: {
                      fontColor: textColor,
                  },
              },
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500,
                      },
                  },
                  grid: {
                      display: false,
                      drawBorder: false,
                  },
              },
              y: {
                  ticks: {
                      color: textColorSecondary,
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                  },
              },
          },
      };

      // Admin's Pie Chart
      this.pieData = {
          labels: ['Completed', 'Upcoming', 'Active'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--pink-500'),
                      documentStyle.getPropertyValue('--cyan-500'),
                      documentStyle.getPropertyValue('--blue-500'),
                  ],
                  hoverBackgroundColor: [
                      documentStyle.getPropertyValue('--pink-400'),
                      documentStyle.getPropertyValue('--cyan-400'),
                      documentStyle.getPropertyValue('--blue-400'),
                  ],
              },
          ],
      };

      this.pieOptions = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor,
                  },
              },
          },
      };

      // Trainer's Stacked Bar Graph
      this.trainerStackedBarData = {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
              {
                  type: 'bar',
                  label: 'Talent 3',
                  backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [10, 10, 10, 10]
              },
              {
                  type: 'bar',
                  label: 'Talent 2',
                  backgroundColor: documentStyle.getPropertyValue('--pink-300'),
                  data: [10, 10, 10, 10]
              },
              {
                  type: 'bar',
                  label: 'Talent 1',
                  backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
                  data: [10, 10, 10, 10]
              }
          ]
      };
      this.trainerStackedBarOptions = {
          maintainAspectRatio: false,
          aspectRatio: 0.8,
          plugins: {
              tooltips: {
                  mode: 'index',
                  intersect: false
              },
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              },
              y: {
                  stacked: true,
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false
                  }
              }
          }
      };

      // Trainer's Pie Chart
      this.trainerPieData = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--blue-500'),
                      documentStyle.getPropertyValue('--blue-300'),
                      documentStyle.getPropertyValue('--blue-100'),
                  ],
                  hoverBackgroundColor: [
                      documentStyle.getPropertyValue('--blue-500'),
                      documentStyle.getPropertyValue('--blue-300'),
                      documentStyle.getPropertyValue('--blue-100'),
                  ],
              },
          ],
      };

      this.trainerPieOptions = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor,
                  },
              },
          },
      };

      // Trainer's Bar Graph
      this.trainerBarData = {
          labels: [
              'Program1',
              'Program2',
              'Program3',
              'Program4',
              'Program5',
              'Program6',
              'Program7',
          ],
          datasets: [
              {
                  label: 'Enrolled Talents',
                  backgroundColor:
                      documentStyle.getPropertyValue('--blue-500'),
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  data: [70, 60, 100, 66, 70, 90, 90],
              },
          ],
      };
      this.trainerBarOptions = {
          plugins: {
              legend: {
                  labels: {
                      fontColor: textColor,
                  },
              },
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500,
                      },
                  },
                  grid: {
                      display: false,
                      drawBorder: false,
                  },
              },
              y: {
                  ticks: {
                      color: textColorSecondary,
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                  },
              },
          },
      };

      // Talent's Bar Graph
      this.talentBarData = {
          labels: [
              'Program1',
              'Program2',
              'Program3',
              'Program4',
              'Program5',
              'Program6',
              'Program7',
          ],
          datasets: [
              {
                  label: 'Grades',
                  backgroundColor:
                      documentStyle.getPropertyValue('--blue-400'),
                  borderColor: documentStyle.getPropertyValue('--blue-400'),
                  data: [70, 60, 100, 66, 70, 90, 90],
              },
          ],
      };
      this.TalentBarOptions = {
          plugins: {
              legend: {
                  labels: {
                      fontColor: textColor,
                  },
              },
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      font: {
                          weight: 500,
                      },
                  },
                  grid: {
                      display: false,
                      drawBorder: false,
                  },
              },
              y: {
                  ticks: {
                      color: textColorSecondary,
                  },
                  grid: {
                      color: surfaceBorder,
                      drawBorder: false,
                  },
              },
          },
      };

      // Talent's Pie Chart
      this.talentPieData = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: [
                      documentStyle.getPropertyValue('--pink-500'),
                      documentStyle.getPropertyValue('--blue-500'),
                      documentStyle.getPropertyValue('--cyan-500'),
                  ],
                  hoverBackgroundColor: [
                      documentStyle.getPropertyValue('--pink-500'),
                      documentStyle.getPropertyValue('--blue-500'),
                      documentStyle.getPropertyValue('--cyan-500'),
                  ],
              },
          ],
      };

      this.talentPieOptions = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true,
                      color: textColor,
                  },
              },
          },
      };
  }
}