import { Component, Input } from "@angular/core";
import { ShiftValueService } from "../shiftvalue.service";

@Component({
  selector: "plaintext",
  templateUrl: "./plaintext.component.html"
})
export class PlaintextComponent {
  // plaintext: string;
  // @Input() plainDisplayText: string = "";
  // cipherDisplayText: string = "";
  constructor(public service: ShiftValueService) {}

  convertToCiphertext(newPlaintext: string) {
    this.service.convertToCiphertext(newPlaintext);
  }

  // getCipherDisplayText() {}
}
