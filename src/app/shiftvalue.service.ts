import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ShiftValueService {
  private shiftSource = new BehaviorSubject<number>(0);
  currentShiftValue = this.shiftSource.asObservable();
  public cipherText = "";
  public plainText = "";
  constructor() {}

  changeShiftValue(shift: number) {
    this.shiftSource.next(shift);
    console.log(this);
    this.convertToCiphertext(this.plainText);
  }

  cipherFunction(stringValue: string, direction: boolean = true): string {
    const newValue = stringValue.split("").reduce((acc, char) => {
      const intValue = char.charCodeAt(0);

      if (intValue < 97 || intValue > 122) {
        throw Error("unsupported letter");
      }

      const directionValue = direction ? 1 : -1;

      const newValue =
        ((intValue - 97 + directionValue * this.shiftSource.value + 26) % 26) +
        97;
      return acc + String.fromCharCode(newValue);
    }, "");

    return newValue;
  }

  convertToPlaintext(cipherText: string): void {
    this.plainText = this.cipherFunction(cipherText, false);
  }

  convertToCiphertext(plainText: string): void {
    this.cipherText = this.cipherFunction(plainText);
  }
}
