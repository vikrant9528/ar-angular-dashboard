import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  betterman(e:any){
    console.log(e);
    if(e && e.target.value && e.target.value == 'betterman'){
      this.router.navigate(['/dashborad/betterman'])
    }
  }
}
