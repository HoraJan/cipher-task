import { Component, Input } from '@angular/core';
import { ShiftValueService } from '../shiftvalue.service';

@Component({
  selector: 'ciphertext',
  templateUrl: './ciphertext.component.html'
})
export class CiphertextComponent {

  ciphertext: string;
  @Input() cipherDisplayText: string = "";
  plainDisplayText: string = "";
  constructor(public service: ShiftValueService) { }

  convertToPlaintext(newCiphertext) {
 
  }

  getPlainDisplayText() {
    
  }
}
