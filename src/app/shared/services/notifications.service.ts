import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }


  


  notifymsg(content:any,action:any,) {
    this.snackBar.open(content, action, {
      duration: 40000,
      verticalPosition: "top",
      horizontalPosition: "right",
      panelClass: ["bgColor"]
    });
  }

}
