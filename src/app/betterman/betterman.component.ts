import { Component, OnInit } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
import { ApiServiceService } from '../service/api-service.service'

@Component({
  selector: 'app-betterman',
  templateUrl: './betterman.component.html',
  styleUrls: ['./betterman.component.scss']
})
export class BettermanComponent implements OnInit {
    data:any[] = [];
    tableheading:any[] = [{id:'#ID',project:'Project',completes:'Completes',status:'Status',testLink:'Test Link',progress:'Progress'}]
 

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {
    this.renderchart();
    this.barchart();
    this.getData();
  }

  getData(){
    this.service.getLoginDetails().subscribe(res => {
        // this.data = res;
        // console.log(this.data);
        this.data = res[0].betterMan;
        console.log(this.data); 
    })
  }


// getData(){
//     this.service.getLoginDetails().subscribe(res => {
//       // Assuming res is an object with keys like 'survey' that contains 'betterMan'
    //   if (res && res.survey) {
    //     this.data = res.survey[0].betterMan;
    //     console.log(this.data); 
    //   }
//     }, error => {
//       console.error("Error fetching data", error); // Error handling
//     });
//   }

  renderchart(){
    const myChart = new Chart("depand", {
      type: 'bar',
      data: {
          labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
          datasets: [{
              label: 'Cell progress',
              data: [12, 15, 20, 5, 10, 15],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                 'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
  barchart(){
    const myChart = new Chart("cool", {
      type: 'pie',
      data: {
          labels: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
          datasets: [{
              label: 'Cell progress',
              data: [12, 15, 20, 5, 10, 15],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                 'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
