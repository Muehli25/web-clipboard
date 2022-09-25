import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-token-dialog',
  templateUrl: './token-dialog.component.html',
  styleUrls: ['./token-dialog.component.scss']
})
export class TokenDialogComponent implements OnInit {

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: {targetUrl: string}
  ) { }

  ngOnInit(): void {
  }

}
