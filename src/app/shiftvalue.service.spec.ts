import { TestBed, inject } from "@angular/core/testing";

import { ShiftValueService } from "./shiftvalue.service";

describe("DataService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShiftValueService]
    });
  });

  it("should use an observable to notice change in shift", inject(
    [ShiftValueService],
    (service: ShiftValueService) => {
      spyOn(service["shiftSource"], "next").and.callThrough();
      service.changeShiftValue(23);
      expect(service["shiftSource"].next).toHaveBeenCalled();
    }
  ));
});
