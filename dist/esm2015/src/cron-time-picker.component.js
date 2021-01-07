import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Hour(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 2);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Minute(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 5);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideHours);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const second_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", second_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Second(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "mat-select", 6);
    i0.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hourType_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", hourType_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, ". ");
    i0.ɵɵelementStart(3, "mat-form-field");
    i0.ɵɵelementStart(4, "mat-select", 7);
    i0.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
} }
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
export class TimePickerComponent {
    constructor(parent) {
        this.parent = parent;
        this.use24HourTime = true;
        this.hideHours = false;
        this.hideMinutes = false;
        this.hideSeconds = true;
        this.minutes = [...range(0, 59)];
        this.seconds = [...range(0, 59)];
        this.hourTypes = ['AM', 'PM'];
    }
    get hours() {
        return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
    }
}
TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer)); };
TimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "minutes"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 1, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parent.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideHours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.use24HourTime);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.MatFormField, i3.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                providers: []
            }]
    }], function () { return [{ type: i1.ControlContainer }]; }, { disabled: [{
            type: Input
        }], use24HourTime: [{
            type: Input
        }], hideHours: [{
            type: Input
        }], hideMinutes: [{
            type: Input
        }], hideSeconds: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vbGlicy9uZ3gtY3Jvbi1lZGl0b3IvIiwic291cmNlcyI6WyJzcmMvY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJzcmMvY3Jvbi10aW1lLXBpY2tlci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0sxQyxxQ0FBc0Q7SUFBQSxZQUFRO0lBQUEsaUJBQWE7OztJQUFwQywrQkFBYztJQUFDLGVBQVE7SUFBUiw2QkFBUTs7O0lBSnBFLDZCQUNFO0lBQUEsc0NBQ0U7SUFBQSxpQ0FBVztJQUFBLHVCQUFPO0lBQUEsaUJBQVk7SUFDOUIscUNBQ0U7SUFBQSxpR0FBMkU7SUFDN0UsaUJBQWE7SUFDZixpQkFBaUI7SUFDbkIsMEJBQWU7OztJQUhvQixlQUFRO0lBQVIsc0NBQVE7OztJQUt6Qyw0QkFBeUI7SUFBQSxpQkFBQztJQUFBLGlCQUFPOzs7SUFJN0IscUNBQTREO0lBQUEsWUFBVTtJQUFBLGlCQUFhOzs7SUFBeEMsaUNBQWdCO0lBQUMsZUFBVTtJQUFWLCtCQUFVOzs7SUFMNUUsNkJBQ0U7SUFBQSxxRkFBaUM7SUFDakMsc0NBQ0U7SUFBQSxpQ0FBVztJQUFBLHlCQUFTO0lBQUEsaUJBQVk7SUFDaEMscUNBQ0U7SUFBQSxpR0FBbUY7SUFDckYsaUJBQWE7SUFDZixpQkFBaUI7SUFDbkIsMEJBQWU7OztJQVBOLGVBQWdCO0lBQWhCLHdDQUFnQjtJQUlZLGVBQVU7SUFBVix3Q0FBVTs7O0lBTTdDLDRCQUEyQjtJQUFBLGlCQUFDO0lBQUEsaUJBQU87OztJQUkvQixxQ0FBNEQ7SUFBQSxZQUFVO0lBQUEsaUJBQWE7OztJQUF4QyxrQ0FBZ0I7SUFBQyxlQUFVO0lBQVYsZ0NBQVU7OztJQUw1RSw2QkFDRTtJQUFBLHFGQUFtQztJQUNuQyxzQ0FDRTtJQUFBLGlDQUFXO0lBQUEseUJBQVM7SUFBQSxpQkFBWTtJQUNoQyxxQ0FDRTtJQUFBLGlHQUFtRjtJQUNyRixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBUE4sZUFBa0I7SUFBbEIsMENBQWtCO0lBSVUsZUFBVTtJQUFWLHdDQUFVOzs7SUFTekMscUNBQWtFO0lBQUEsWUFBWTtJQUFBLGlCQUFhOzs7SUFBNUMsb0NBQWtCO0lBQUMsZUFBWTtJQUFaLGtDQUFZOzs7SUFKcEYsNkJBQ0U7SUFBQSx1QkFBYTtJQUFBLGtCQUNiO0lBQUEsc0NBQ0U7SUFBQSxxQ0FDRTtJQUFBLGlHQUEyRjtJQUM3RixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBSHdCLGVBQVk7SUFBWiwwQ0FBWTs7QUR2QnJELFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDO0tBQ1Q7QUFDSCxDQUFDO0FBT0QsTUFBTSxPQUFPLG1CQUFtQjtJQWdCOUIsWUFBbUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFiM0Isa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQU01QixZQUFPLEdBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUM5QixZQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUM3QixjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFYyxDQUFDO0lBUi9DLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDOztzRkFWVSxtQkFBbUI7d0RBQW5CLG1CQUFtQix3TkFGbkIsRUFBRTtRQ3BCZiwrQkFFRTtRQUFBLHNGQU9lO1FBQ2Ysc0ZBUWU7UUFFZixzRkFRZTtRQUVmLHNGQU9lO1FBQ2pCLGlCQUFPOztRQXRDRCw4Q0FBNEI7UUFFakIsZUFBZ0I7UUFBaEIscUNBQWdCO1FBUWhCLGVBQWtCO1FBQWxCLHVDQUFrQjtRQVVsQixlQUFrQjtRQUFsQix1Q0FBa0I7UUFVbEIsZUFBb0I7UUFBcEIseUNBQW9COztrRERSeEIsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsRUFBRTthQUNkO21FQUdpQixRQUFRO2tCQUF2QixLQUFLO1lBQ1UsYUFBYTtrQkFBNUIsS0FBSztZQUNVLFNBQVM7a0JBQXhCLEtBQUs7WUFDVSxXQUFXO2tCQUExQixLQUFLO1lBQ1UsV0FBVztrQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGltZVBpY2tlck1vZGVsIHtcclxuICBkYXlzOiBudW1iZXI7XHJcbiAgaG91cnM6IG51bWJlcjtcclxuICBtaW51dGVzOiBudW1iZXI7XHJcbiAgc2Vjb25kczogbnVtYmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmFuZ2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcclxuICAgIHlpZWxkIGk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nyb24tdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLXRpbWUtcGlja2VyLnRlbXBsYXRlLmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ7XHJcbiAgQElucHV0KCkgcHVibGljIHVzZTI0SG91clRpbWUgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlSG91cnMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGlkZU1pbnV0ZXMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGlkZVNlY29uZHMgPSB0cnVlO1xyXG5cclxuICBnZXQgaG91cnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMudXNlMjRIb3VyVGltZSA/IFsuLi4gcmFuZ2UoMCwgMjMpXSA6IFsuLi4gcmFuZ2UoMCwgMTIpXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtaW51dGVzID0gIFsuLi5yYW5nZSgwLCA1OSkgXTtcclxuICBwdWJsaWMgc2Vjb25kcyA9IFsuLi5yYW5nZSgwLCA1OSkgXTtcclxuICBwdWJsaWMgaG91clR5cGVzID0gWydBTScsICdQTSddO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyZW50OiBDb250cm9sQ29udGFpbmVyKSB7fVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuIiwiPHNwYW4gW2Zvcm1Hcm91cF09XCJwYXJlbnQuY29udHJvbFwiPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVIb3Vyc1wiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LWxhYmVsPkhvdXIocyk8L21hdC1sYWJlbD5cclxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiaG91cnNcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFt2YWx1ZV09XCJob3VyXCI+e3tob3VyfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlTWludXRlc1wiPlxyXG4gICAgPHNwYW4gKm5nSWY9XCIhaGlkZUhvdXJzXCI+Ojwvc3Bhbj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPG1hdC1sYWJlbD5NaW51dGUocyk8L21hdC1sYWJlbD5cclxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwibWludXRlc1wiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtaW51dGUgb2YgbWludXRlc1wiIFt2YWx1ZV09XCJtaW51dGVcIj57e21pbnV0ZX19PC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVTZWNvbmRzXCI+XHJcbiAgICA8c3BhbiAqbmdJZj1cIiFoaWRlTWludXRlc1wiPjo8L3NwYW4+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtbGFiZWw+U2Vjb25kKHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZHNcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc2Vjb25kIG9mIHNlY29uZHNcIiBbdmFsdWVdPVwic2Vjb25kXCI+e3tzZWNvbmR9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF1c2UyNEhvdXJUaW1lXCI+XHJcbiAgICA8c3Bhbj48L3NwYW4+LlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3VyVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyVHlwZSBvZiBob3VyVHlwZXNcIiBbdmFsdWVdPVwiaG91clR5cGVcIj57e2hvdXJUeXBlfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvc3Bhbj5cclxuIl19