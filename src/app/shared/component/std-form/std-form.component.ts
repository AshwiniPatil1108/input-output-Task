import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../model/std';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
    @Output() stdEmitter : EventEmitter<Istd> = new EventEmitter<Istd>()
  constructor() { }

  ngOnInit(): void {
  }
  onStdAdd(stdForm : NgForm){
     if(stdForm.valid){
      this.stdEmitter.emit(stdForm.value)
      stdForm.reset()
     }
  }
}
