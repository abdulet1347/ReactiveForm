import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { reduce } from 'rxjs';
import { __values } from 'tslib';
import * as M from "materialize-css";
import { event } from 'jquery';
import { trigger,state,style,transition,animate } from '@angular/animations';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, AfterViewInit {
 
  form = new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, this.validateUsername],
      this.validateUsernameAsnyc
    ),
  });
  constructor() { }

 
  ngOnInit(): void { 
   
  }

 
  ngAfterViewInit() {

  }
 

  validateUsername(control: AbstractControl): ValidationErrors | null {
    if (control.value.toString().startsWith('a')) {
      return { invalid: true };
    } else {
      return null;
    }
  }

    validateUsernameAsnyc(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value.toString().endsWith('k')) {
          resolve({ invalid: true });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}