import { Component } from "@angular/core";
import { ShiftValueService } from "../shiftvalue.service";

@Component({
  selector: "shift",
  templateUrl: "./shift.component.html",
  styleUrls: ["./shift.component.css"]
})
export class ShiftComponent {
  public shift: number = 0;
  constructor(public service: ShiftValueService) {}

  onChange() {
    this.service.changeShiftValue(this.shift);
  }
}
