import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  fakeAsync
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { PlaintextComponent } from "./plaintext.component";
import { ShiftValueService } from "../shiftvalue.service";
import { By } from "@angular/platform-browser";

describe("PlaintextComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaintextComponent],
      imports: [FormsModule],
      providers: [ShiftValueService]
    }).compileComponents();
  }));

  it("should convert the plaintext to ciphertext", async(
    inject([ShiftValueService], (service: ShiftValueService) => {
      let fixture = TestBed.createComponent(PlaintextComponent);
      fixture.detectChanges();
      let pt = fixture.componentInstance;
      pt.service.changeShiftValue(2);
      pt.convertToCiphertext("abcdefghijklmnopqrstuvwxyz");
      expect(service.cipherText).toEqual("cdefghijklmnopqrstuvwxyzab");
    })
  ));

  it("should be able to access shift value within plaintext component", async(
    inject([ShiftValueService], (service: ShiftValueService) => {
      let fixture = TestBed.createComponent(PlaintextComponent);
      let pt = fixture.componentInstance;
      fixture.detectChanges();
      pt.service.changeShiftValue(2);
      pt.service.currentShiftValue.subscribe(shift => {
        expect(shift).toEqual(2);
      });
    })
  ));
});
