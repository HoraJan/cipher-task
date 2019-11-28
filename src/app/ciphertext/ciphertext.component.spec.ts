import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { CiphertextComponent } from "./ciphertext.component";
import { ShiftValueService } from "../shiftvalue.service";

describe("CiphertextComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CiphertextComponent],
      imports: [FormsModule],
      providers: [ShiftValueService]
    }).compileComponents();
  }));

  it("should convert the ciphertext to plaintext", async(
    inject([ShiftValueService], (service: ShiftValueService) => {
      let fixture = TestBed.createComponent(CiphertextComponent);
      fixture.detectChanges();
      let ct = fixture.componentInstance;
      ct.service.changeShiftValue(2);
      ct.convertToPlaintext("cdefghijklmnopqrstuvwxyzab");
      expect(service.plainText).toEqual("abcdefghijklmnopqrstuvwxyz");
    })
  ));

  it("should be able to access shift value within ciphertext component", async(
    inject([ShiftValueService], (service: ShiftValueService) => {
      let fixture = TestBed.createComponent(CiphertextComponent);
      let ct = fixture.componentInstance;
      fixture.detectChanges();
      spyOn(ct.service, "currentShiftValue").and.callThrough();
      ct.service.changeShiftValue(2);
      ct.service.currentShiftValue.subscribe(shift => {
        expect(shift).toEqual(2);
      });
    })
  ));
});
