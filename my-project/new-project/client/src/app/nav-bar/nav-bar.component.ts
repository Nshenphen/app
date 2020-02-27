import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import {RegisterComponent} from'../register/register.component'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  openloginform(){
    this.dialog.open(LoginComponent,{width:'500px',height:'450px'});
  }
  openregisterform(){
    this.dialog.open(RegisterComponent,{width: '500px',height:'450px'})
  }
  
}
