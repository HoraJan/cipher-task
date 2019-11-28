import { Component } from '@angular/core';
import { ShiftValueService } from '../shiftvalue.service';

@Component({
  selector: 'shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent {

  public shift: string = "";
  constructor(public service: ShiftValueService) { }

  onChange(newShift) {
    
  }
}
