import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ShiftComponent } from "./shift.component";
import { ShiftValueService } from "../shiftvalue.service";
import { By } from "@angular/platform-browser";

describe("ShiftComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftComponent],
      imports: [FormsModule],
      providers: [ShiftValueService]
    }).compileComponents();
  }));

  it("should change the component on model change", fakeAsync(() => {
    let fixture = TestBed.createComponent(ShiftComponent);
    let sh = fixture.componentInstance;
    fixture.detectChanges();
    let element = fixture.debugElement.query(By.css("input")).nativeElement;
    element.value = 3;
    element.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(sh.shift).toEqual(3);
    });
  }));

  it("should call the service function when onChange is called", async(
    inject([ShiftValueService], (service: ShiftValueService) => {
      let fixture = TestBed.createComponent(ShiftComponent);
      let sh = fixture.componentInstance;
      fixture.detectChanges();
      spyOn(sh.service, "changeShiftValue").and.callThrough();
      sh.onChange();
      expect(sh.service.changeShiftValue).toHaveBeenCalled();
    })
  ));
});
