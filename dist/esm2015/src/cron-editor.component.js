import { __awaiter } from "tslib";
import { Component, Input, forwardRef } from '@angular/core';
import { Days, MonthWeeks, Months } from './enums';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
import * as i4 from "./cron-time-picker.component";
import * as i5 from "@angular/material/radio";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/input";
function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", ctx_r0.options.use24HourTime)("hideHours", true)("hideSeconds", ctx_r0.options.hideSeconds || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 13);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options.use24HourTime)("hideSeconds", ctx_r1.options.hideSeconds || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDay_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", monthDay_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", monthDay_r8, " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 15);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 17);
    i0.ɵɵelementStart(3, "mat-radio-button", 18);
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-form-field", 19);
    i0.ɵɵelementStart(7, "mat-label");
    i0.ɵɵtext(8, "Day(s)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-select", 20);
    i0.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " at ");
    i0.ɵɵelement(12, "cron-time-picker", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-radio-button", 23);
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Week Day (MON-FRI) at ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "cron-time-picker", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r2.dailyForm);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("use24HourTime", ctx_r2.options.use24HourTime)("hideSeconds", ctx_r2.options.hideSeconds || !ctx_r2.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 26);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3, "Every ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 27);
    i0.ɵɵelementStart(5, "mat-checkbox", 28);
    i0.ɵɵtext(6, "Monday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-checkbox", 29);
    i0.ɵɵtext(8, "Tuesday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-checkbox", 30);
    i0.ɵɵtext(10, "Wednesday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-checkbox", 31);
    i0.ɵɵtext(12, "Thursday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-checkbox", 32);
    i0.ɵɵtext(14, "Friday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-checkbox", 33);
    i0.ɵɵtext(16, "Saturday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-checkbox", 34);
    i0.ɵɵtext(18, "Sunday");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 11);
    i0.ɵɵtext(20, "at time ");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
    i0.ɵɵadvance(17);
    i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options.use24HourTime)("hideSeconds", ctx_r3.options.hideSeconds || !ctx_r3.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_6_ng_container_6_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.monthDayDisplay(monthDaysWithLast_r16), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 47);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_6_option_5_Template, 2, 2, "option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r9.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r18 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r18);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r17.monthDayDisplay(monthDaysWithOutLast_r18), " ");
} }
function CronGenComponent_mat_tab_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 47);
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_6_ng_container_7_mat_option_5_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r10.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r19, " ");
} }
function CronGenComponent_mat_tab_6_mat_option_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r20 = ctx.$implicit;
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.monthWeekDisplay(monthWeek_r20), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r21 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.dayDisplay(day_r21), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", month_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", month_r22, " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 35);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 36);
    i0.ɵɵelementStart(3, "mat-radio-button", 37);
    i0.ɵɵelementStart(4, "span", 38);
    i0.ɵɵtext(5, " On the ");
    i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_ng_container_6_Template, 6, 1, "ng-container", 39);
    i0.ɵɵtemplate(7, CronGenComponent_mat_tab_6_ng_container_7_Template, 6, 1, "ng-container", 39);
    i0.ɵɵtext(8, " of every ");
    i0.ɵɵelementContainerStart(9);
    i0.ɵɵelementStart(10, "mat-form-field");
    i0.ɵɵelementStart(11, "mat-label");
    i0.ɵɵtext(12, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-select", 40);
    i0.ɵɵtemplate(14, CronGenComponent_mat_tab_6_mat_option_14_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtext(15, " at time ");
    i0.ɵɵelement(16, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-radio-button", 42);
    i0.ɵɵelementStart(18, "span", 43);
    i0.ɵɵtext(19, " On the ");
    i0.ɵɵelementStart(20, "mat-form-field");
    i0.ɵɵelementStart(21, "mat-label");
    i0.ɵɵtext(22, "Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-select", 44);
    i0.ɵɵtemplate(24, CronGenComponent_mat_tab_6_mat_option_24_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "mat-form-field");
    i0.ɵɵelementStart(26, "mat-label");
    i0.ɵɵtext(27, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-select", 45);
    i0.ɵɵtemplate(29, CronGenComponent_mat_tab_6_mat_option_29_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " of every ");
    i0.ɵɵelementStart(31, "mat-form-field");
    i0.ɵɵelementStart(32, "mat-label");
    i0.ɵɵtext(33, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "mat-select", 46);
    i0.ɵɵtemplate(35, CronGenComponent_mat_tab_6_mat_option_35_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, " at time ");
    i0.ɵɵelement(37, "cron-time-picker", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.options.cronFlavor === "standard");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngClass", ctx_r4.options.formSelectClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options.use24HourTime)("hideSeconds", ctx_r4.options.hideSeconds || !ctx_r4.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r30 = ctx.$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r30);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r29.monthDayDisplay(monthDaysWithLast_r30), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 51);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 47);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_5_mat_option_4_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r23.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r32 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r32);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.monthDayDisplay(monthDaysWithOutLast_r32), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 51);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 47);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r24.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r33 = ctx.$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r33);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.monthDisplay(month_r33), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r34 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.monthWeekDisplay(monthWeek_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r35 = ctx.$implicit;
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r35);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r27.dayDisplay(day_r35), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r36 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r36);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r36), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 48);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-radio-group", 36);
    i0.ɵɵelementStart(3, "mat-radio-button", 49);
    i0.ɵɵtext(4, " On the ");
    i0.ɵɵtemplate(5, CronGenComponent_mat_tab_7_mat_form_field_5_Template, 5, 1, "mat-form-field", 50);
    i0.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 50);
    i0.ɵɵtext(7, " of ");
    i0.ɵɵelementStart(8, "mat-form-field", 51);
    i0.ɵɵelementStart(9, "mat-label");
    i0.ɵɵtext(10, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "mat-select", 52);
    i0.ɵɵtemplate(12, CronGenComponent_mat_tab_7_mat_option_12_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " at time ");
    i0.ɵɵelement(14, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-radio-button", 53);
    i0.ɵɵtext(16, " On the ");
    i0.ɵɵelementStart(17, "mat-form-field", 54);
    i0.ɵɵelementStart(18, "mat-label");
    i0.ɵɵtext(19, "Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-select", 55);
    i0.ɵɵtemplate(21, CronGenComponent_mat_tab_7_mat_option_21_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "mat-form-field", 54);
    i0.ɵɵelementStart(23, "mat-label");
    i0.ɵɵtext(24, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "mat-select", 56);
    i0.ɵɵtemplate(26, CronGenComponent_mat_tab_7_mat_option_26_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, " of ");
    i0.ɵɵelementStart(28, "mat-form-field", 54);
    i0.ɵɵelementStart(29, "mat-label");
    i0.ɵɵtext(30, "Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "mat-select", 52);
    i0.ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, " at time ");
    i0.ɵɵelement(34, "cron-time-picker", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "quartz");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.options.cronFlavor === "standard");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r5.state.formRadioClass);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options.use24HourTime)("hideSeconds", ctx_r5.options.hideSeconds || !ctx_r5.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 57);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "mat-form-field");
    i0.ɵɵelementStart(3, "mat-label");
    i0.ɵɵtext(4, "Expression");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
export const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
export class CronGenComponent {
    constructor(fb) {
        this.fb = fb;
        this.selectOptions = this.getSelectOptions();
        this.localCron = '0 0 1/1 * *';
        /*
         * ControlValueAccessor
         */
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    get cron() {
        return this.localCron;
    }
    set cron(value) {
        this.localCron = value;
        this.onChange(value);
    }
    get isCronFlavorQuartz() {
        return this.options.cronFlavor === 'quartz';
    }
    get isCronFlavorStandard() {
        return this.options.cronFlavor === 'standard';
    }
    get yearDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '*' : '';
    }
    get weekDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    get monthDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    /* Update the cron output to that of the selected tab.
     * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
     * the value of the form that goes into focus. */
    onTabFocus(idx) {
        switch (idx) {
            case 0:
                this.minutesForm.setValue(this.minutesForm.value);
                break;
            case 1:
                this.hourlyForm.setValue(this.hourlyForm.value);
                break;
            case 2:
                this.dailyForm.setValue(this.dailyForm.value);
                break;
            case 3:
                this.weeklyForm.setValue(this.weeklyForm.value);
                break;
            case 4:
                this.monthlyForm.setValue(this.monthlyForm.value);
                break;
            case 5:
                this.yearlyForm.setValue(this.yearlyForm.value);
                break;
            case 6:
                this.advancedForm.setValue(this.advancedForm.value);
                break;
            default:
                throw (new Error('Invalid tab selected'));
        }
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = this.getDefaultState();
            this.handleModelChange(this.cron);
            const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
            this.cronForm = new FormControl('0 0 1/1 * *');
            this.minutesForm = this.fb.group({
                hours: [0],
                minutes: [1],
                seconds: [0]
            });
            this.minutesForm.valueChanges.subscribe(value => this.computeMinutesCron(value));
            this.hourlyForm = this.fb.group({
                hours: [1],
                minutes: [0],
                seconds: [0]
            });
            this.hourlyForm.valueChanges.subscribe(value => this.computeHourlyCron(value));
            this.dailyForm = this.fb.group({
                subTab: ['everyDays'],
                everyDays: this.fb.group({
                    days: [1],
                    hours: [this.getAmPmHour(1)],
                    minutes: [0],
                    seconds: [0],
                    hourType: [this.getHourType(0)]
                }),
                everyWeekDay: this.fb.group({
                    days: [0],
                    hours: [this.getAmPmHour(1)],
                    minutes: [0],
                    seconds: [0],
                    hourType: [this.getHourType(0)]
                })
            });
            this.dailyForm.valueChanges.subscribe(value => this.computeDailyCron(value));
            this.weeklyForm = this.fb.group({
                MON: [true],
                TUE: [false],
                WED: [false],
                THU: [false],
                FRI: [false],
                SAT: [false],
                SUN: [false],
                hours: [this.getAmPmHour(defaultHours)],
                minutes: [defaultMinutes],
                seconds: [defaultSeconds],
                hourType: [this.getHourType(defaultHours)]
            });
            this.weeklyForm.valueChanges.subscribe(next => this.computeWeeklyCron(next));
            this.monthlyForm = this.fb.group({
                subTab: ['specificDay'],
                specificDay: this.fb.group({
                    day: ['1'],
                    months: [1],
                    hours: [this.getAmPmHour(defaultHours)],
                    minutes: [defaultMinutes],
                    seconds: [defaultSeconds],
                    hourType: [this.getHourType(defaultHours)]
                }),
                specificWeekDay: this.fb.group({
                    monthWeek: ['#1'],
                    day: ['MON'],
                    months: [1],
                    hours: [this.getAmPmHour(defaultHours)],
                    minutes: [defaultMinutes],
                    seconds: [defaultSeconds],
                    hourType: [this.getHourType(defaultHours)]
                })
            });
            this.monthlyForm.valueChanges.subscribe(next => this.computeMonthlyCron(next));
            this.yearlyForm = this.fb.group({
                subTab: ['specificMonthDay'],
                specificMonthDay: this.fb.group({
                    month: [1],
                    day: ['1'],
                    hours: [this.getAmPmHour(defaultHours)],
                    minutes: [defaultMinutes],
                    seconds: [defaultSeconds],
                    hourType: [this.getHourType(defaultHours)]
                }),
                specificMonthWeek: this.fb.group({
                    monthWeek: ['#1'],
                    day: ['MON'],
                    month: [1],
                    hours: [this.getAmPmHour(defaultHours)],
                    minutes: [defaultMinutes],
                    seconds: [defaultSeconds],
                    hourType: [this.getHourType(defaultHours)]
                })
            });
            this.yearlyForm.valueChanges.subscribe(next => this.computeYearlyCron(next));
            this.advancedForm = this.fb.group({
                expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
            });
            this.advancedForm.controls.expression.valueChanges.subscribe(next => this.computeAdvancedExpression(next));
        });
    }
    computeMinutesCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} 0/${state.minutes} * 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeHourlyCron(state) {
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} 0/${state.hours} 1/1 * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeDailyCron(state) {
        switch (state.subTab) {
            case 'everyDays':
                this.cron = `${this.isCronFlavorQuartz ? state.everyDays.seconds : ''} ${state.everyDays.minutes} ${this.hourToCron(state.everyDays.hours, state.everyDays.hourType)} 1/${state.everyDays.days} * ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'everyWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.everyWeekDay.seconds : ''} ${state.everyWeekDay.minutes} ${this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType)} ${this.monthDayDefaultChar} * MON-FRI ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron daily subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeWeeklyCron(state) {
        const days = this.selectOptions.days
            .reduce((acc, day) => state[day] ? acc.concat([day]) : acc, [])
            .join(',');
        this.cron = `${this.isCronFlavorQuartz ? state.seconds : ''} ${state.minutes} ${this.hourToCron(state.hours, state.hourType)} ${this.monthDayDefaultChar} * ${days} ${this.yearDefaultChar}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeMonthlyCron(state) {
        switch (state.subTab) {
            case 'specificDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificDay.seconds : ''} ${state.specificDay.minutes} ${this.hourToCron(state.specificDay.hours, state.specificDay.hourType)} ${state.specificDay.day} 1/${state.specificDay.months} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificWeekDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificWeekDay.seconds : ''} ${state.specificWeekDay.minutes} ${this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType)} ${this.monthDayDefaultChar} 1/${state.specificWeekDay.months} ${state.specificWeekDay.day}${state.specificWeekDay.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron montly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeYearlyCron(state) {
        switch (state.subTab) {
            case 'specificMonthDay':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthDay.seconds : ''} ${state.specificMonthDay.minutes} ${this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType)} ${state.specificMonthDay.day} ${state.specificMonthDay.month} ${this.weekDayDefaultChar} ${this.yearDefaultChar}`.trim();
                break;
            case 'specificMonthWeek':
                this.cron = `${this.isCronFlavorQuartz ? state.specificMonthWeek.seconds : ''} ${state.specificMonthWeek.minutes} ${this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType)} ${this.monthDayDefaultChar} ${state.specificMonthWeek.month} ${state.specificMonthWeek.day}${state.specificMonthWeek.monthWeek} ${this.yearDefaultChar}`.trim();
                break;
            default:
                throw new Error('Invalid cron yearly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeAdvancedExpression(expression) {
        this.cron = expression;
        this.cronForm.setValue(this.cron);
    }
    dayDisplay(day) {
        return Days[day];
    }
    monthWeekDisplay(monthWeekNumber) {
        return MonthWeeks[monthWeekNumber];
    }
    monthDisplay(month) {
        return Months[month];
    }
    monthDayDisplay(month) {
        if (month === 'L') {
            return 'Last Day';
        }
        else if (month === 'LW') {
            return 'Last Weekday';
        }
        else if (month === '1W') {
            return 'First Weekday';
        }
        else {
            return `${month}${this.getOrdinalSuffix(month)}`;
        }
    }
    getAmPmHour(hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    }
    getHourType(hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
    }
    hourToCron(hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    }
    handleModelChange(cron) {
        if (this.isDirty) {
            this.isDirty = false;
            return;
        }
        else {
            this.isDirty = false;
        }
        if (!this.cronIsValid(cron)) {
            if (this.isCronFlavorQuartz) {
                throw new Error('Invalid cron expression, there must be 6 or 7 segments');
            }
            if (this.isCronFlavorStandard) {
                throw new Error('Invalid cron expression, there must be 5 segments');
            }
        }
        const origCron = cron;
        if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
            cron = `0 ${cron} *`;
        }
        const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] = cron.split(' ');
        if (cron.match(/\d+ 0\/\d+ \* 1\/1 \* [\?\*] \*/)) {
            this.activeTab = 'minutes';
            this.state.minutes.minutes = parseInt(minutes.substring(2), 10);
            this.state.minutes.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ 0\/\d+ 1\/1 \* [\?\*] \*/)) {
            this.activeTab = 'hourly';
            this.state.hourly.hours = parseInt(hours.substring(2), 10);
            this.state.hourly.minutes = parseInt(minutes, 10);
            this.state.hourly.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ 1\/\d+ \* [\?\*] \*/)) {
            this.activeTab = 'daily';
            this.state.daily.subTab = 'everyDays';
            this.state.daily.everyDays.days = parseInt(dayOfMonth.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyDays.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyDays.hourType = this.getHourType(parsedHours);
            this.state.daily.everyDays.minutes = parseInt(minutes, 10);
            this.state.daily.everyDays.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* MON-FRI \*/)) {
            this.activeTab = 'daily';
            this.state.daily.subTab = 'everyWeekDay';
            const parsedHours = parseInt(hours, 10);
            this.state.daily.everyWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.daily.everyWeekDay.hourType = this.getHourType(parsedHours);
            this.state.daily.everyWeekDay.minutes = parseInt(minutes, 10);
            this.state.daily.everyWeekDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/)) {
            this.activeTab = 'weekly';
            this.selectOptions.days.forEach(weekDay => this.state.weekly[weekDay] = false);
            dayOfWeek.split(',').forEach(weekDay => this.state.weekly[weekDay] = true);
            const parsedHours = parseInt(hours, 10);
            this.state.weekly.hours = this.getAmPmHour(parsedHours);
            this.state.weekly.hourType = this.getHourType(parsedHours);
            this.state.weekly.minutes = parseInt(minutes, 10);
            this.state.weekly.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ [\?\*] \*/)) {
            this.activeTab = 'monthly';
            this.state.monthly.subTab = 'specificDay';
            this.state.monthly.specificDay.day = dayOfMonth;
            this.state.monthly.specificDay.months = parseInt(month.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'monthly';
            this.state.monthly.subTab = 'specificWeekDay';
            this.state.monthly.specificWeekDay.monthWeek = monthWeek;
            this.state.monthly.specificWeekDay.day = day;
            this.state.monthly.specificWeekDay.months = parseInt(month.substring(2), 10);
            const parsedHours = parseInt(hours, 10);
            this.state.monthly.specificWeekDay.hours = this.getAmPmHour(parsedHours);
            this.state.monthly.specificWeekDay.hourType = this.getHourType(parsedHours);
            this.state.monthly.specificWeekDay.minutes = parseInt(minutes, 10);
            this.state.monthly.specificWeekDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ (\d+|L|LW|1W) \d+ [\?\*] \*/)) {
            this.activeTab = 'yearly';
            this.state.yearly.subTab = 'specificMonthDay';
            this.state.yearly.specificMonthDay.month = parseInt(month, 10);
            this.state.yearly.specificMonthDay.day = dayOfMonth;
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthDay.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthDay.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthDay.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthDay.seconds = parseInt(seconds, 10);
        }
        else if (cron.match(/\d+ \d+ \d+ [\?\*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/)) {
            const day = dayOfWeek.substr(0, 3);
            const monthWeek = dayOfWeek.substr(3);
            this.activeTab = 'yearly';
            this.state.yearly.subTab = 'specificMonthWeek';
            this.state.yearly.specificMonthWeek.monthWeek = monthWeek;
            this.state.yearly.specificMonthWeek.day = day;
            this.state.yearly.specificMonthWeek.month = parseInt(month, 10);
            const parsedHours = parseInt(hours, 10);
            this.state.yearly.specificMonthWeek.hours = this.getAmPmHour(parsedHours);
            this.state.yearly.specificMonthWeek.hourType = this.getHourType(parsedHours);
            this.state.yearly.specificMonthWeek.minutes = parseInt(minutes, 10);
            this.state.yearly.specificMonthWeek.seconds = parseInt(seconds, 10);
        }
        else {
            this.activeTab = 'advanced';
            this.state.advanced.expression = origCron;
        }
    }
    cronIsValid(cron) {
        if (cron) {
            const cronParts = cron.split(' ');
            return (this.isCronFlavorQuartz && (cronParts.length === 6
                || cronParts.length === 7)
                || (this.isCronFlavorStandard && cronParts.length === 5));
        }
        return false;
    }
    getDefaultState() {
        const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
        return {
            minutes: {
                minutes: 1,
                seconds: 0
            },
            hourly: {
                hours: 1,
                minutes: 0,
                seconds: 0
            },
            daily: {
                subTab: 'everyDays',
                everyDays: {
                    days: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                everyWeekDay: {
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            weekly: {
                MON: true,
                TUE: false,
                WED: false,
                THU: false,
                FRI: false,
                SAT: false,
                SUN: false,
                hours: this.getAmPmHour(defaultHours),
                minutes: defaultMinutes,
                seconds: defaultSeconds,
                hourType: this.getHourType(defaultHours)
            },
            monthly: {
                subTab: 'specificDay',
                specificDay: {
                    day: '1',
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificWeekDay: {
                    monthWeek: '#1',
                    day: 'MON',
                    months: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            yearly: {
                subTab: 'specificMonthDay',
                specificMonthDay: {
                    month: 1,
                    day: '1',
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                },
                specificMonthWeek: {
                    monthWeek: '#1',
                    day: 'MON',
                    month: 1,
                    hours: this.getAmPmHour(defaultHours),
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: this.getHourType(defaultHours)
                }
            },
            advanced: {
                expression: this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'
            }
        };
    }
    getOrdinalSuffix(value) {
        if (value.length > 1) {
            const secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === '1') {
                return 'th';
            }
        }
        const lastDigit = value.charAt(value.length - 1);
        switch (lastDigit) {
            case '1':
                return 'st';
            case '2':
                return 'nd';
            case '3':
                return 'rd';
            default:
                return 'th';
        }
    }
    getSelectOptions() {
        return {
            months: this.getRange(1, 12),
            monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
            days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            minutes: this.getRange(0, 59),
            fullMinutes: this.getRange(0, 59),
            seconds: this.getRange(0, 59),
            hours: this.getRange(1, 23),
            monthDays: this.getRange(1, 31),
            monthDaysWithLasts: ['1W', ...[...this.getRange(1, 31).map(String)], 'LW', 'L'],
            monthDaysWithOutLasts: [...[...this.getRange(1, 31).map(String)]],
            hourTypes: ['AM', 'PM']
        };
    }
    getRange(start, end) {
        const length = end - start + 1;
        return Array.apply(null, Array(length)).map((_, i) => i + start);
    }
    writeValue(obj) {
        this.cron = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
CronGenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [i0.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab"], [1, "cron-editor-tab-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDays", "checked", "checked", 1, "cron-editor-radio-button"], ["formGroupName", "everyDays"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDays", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 1, "cron-editor-radio-button"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab"], [3, "formGroup"], ["formControlName", "MON", 1, "checkbox-margin"], ["formControlName", "TUE", 1, "checkbox-margin"], ["formControlName", "WED", 1, "checkbox-margin"], ["formControlName", "THU", 1, "checkbox-margin"], ["formControlName", "FRI", 1, "checkbox-margin"], ["formControlName", "SAT", 1, "checkbox-margin"], ["formControlName", "SUN", 1, "checkbox-margin"], ["label", "Monthly", 1, "cron-editor-tab"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay"], ["formGroupName", "specificDay"], [4, "ngIf"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], ["name", "monthly-radio", "value", "specificWeekDay"], ["formGroupName", "specificWeekDay"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "day", 1, "month-days"], ["label", "Yearly", 1, "cron-editor-tab"], ["name", "yearly-radio", "value", "specificMonthDay"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formControlName", "day", 1, "week-days"], ["label", "Advanced", 1, "cron-editor-tab"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "mat-tab-group", 1);
        i0.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
        i0.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 4, "mat-tab", 2);
        i0.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 3, "mat-tab", 3);
        i0.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 17, 6, "mat-tab", 4);
        i0.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 22, 4, "mat-tab", 5);
        i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 38, 17, "mat-tab", 6);
        i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 35, 16, "mat-tab", 7);
        i0.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideMinutesTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideHourlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideDailyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideWeeklyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideMonthlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideYearlyTab);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.options.hideAdvancedTab);
    } }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, i4.TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5.MatRadioButton, i6.MatFormField, i1.FormGroupName, i6.MatLabel, i7.MatSelect, i3.NgForOf, i8.MatOption, i9.MatCheckbox, i3.NgClass, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{@include mat-elevation(1)}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-top:24px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-radio[_ngcontent-%COMP%]{display:inline-block;width:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-checkbox[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-input[_ngcontent-%COMP%], .cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .cron-editor-select[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .well-time-wrapper[_ngcontent-%COMP%]{padding-left:20px}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .inline-block[_ngcontent-%COMP%]{display:inline-block}.cron-editor-main[_ngcontent-%COMP%]   .cron-editor-container[_ngcontent-%COMP%]   .hour-types[_ngcontent-%COMP%]{width:70px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.cron-editor-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:15px 0}.cron-editor-radio-button[_ngcontent-%COMP%]{margin:5px}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.css'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { backgroundColor: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], cron: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL2xpYnMvbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyIsInNyYy9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBMEQsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRW5ILE9BQU8sRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUNqRCxPQUFPLEVBQXlDLFdBQVcsRUFBRSxXQUFXLEVBQWEsaUJBQWlCLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ0N4SCxrQ0FDRTtJQUFBLCtCQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUV6Qyx1Q0FLbUI7SUFDdkIsaUJBQU07SUFDUixpQkFBVTs7O0lBTkYsZUFBeUI7SUFBekIsOENBQXlCLCtDQUFBLG1CQUFBLHlFQUFBOzs7SUFTakMsbUNBQ0U7SUFBQSwrQkFDRTtJQUFBLGdDQUE4QjtJQUFBLHNCQUFNO0lBQUEsaUJBQU87SUFFM0MsdUNBR21CO0lBQ3JCLGlCQUFNO0lBQ1IsaUJBQVU7OztJQUxZLGVBQXdCO0lBQXhCLDZDQUF3QiwrQ0FBQSx5RUFBQTs7O0lBb0JsQyxzQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRmdELG1DQUFrQjtJQUM3RSxlQUNGO0lBREUsNENBQ0Y7OztJQWJaLG1DQUNFO0lBQUEsK0JBRUU7SUFBQSwyQ0FDRTtJQUFBLDRDQUVFO0lBQUEsZ0NBQThCO0lBQUEsc0JBQU07SUFBQSxpQkFBTztJQUUzQywwQ0FDRTtJQUFBLGlDQUFXO0lBQUEsc0JBQU07SUFBQSxpQkFBWTtJQUM3QixzQ0FDRTtJQUFBLDRGQUVhO0lBQ2YsaUJBQWE7SUFD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dCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDcm9uT3B0aW9uc30gZnJvbSAnLi9Dcm9uT3B0aW9ucyc7XHJcbmltcG9ydCB7RGF5cywgTW9udGhXZWVrcywgTW9udGhzfSBmcm9tICcuL2VudW1zJztcclxuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ1JPTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25HZW5Db21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlLFxyXG59O1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY3Jvbi1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jcm9uLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbQ1JPTl9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyb25HZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgQElucHV0KCkgcHVibGljIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xvcjogVGhlbWVQYWxldHRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogQ3Jvbk9wdGlvbnM7XHJcblxyXG4gIEBJbnB1dCgpIGdldCBjcm9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbENyb247XHJcbiAgfVxyXG5cclxuICBzZXQgY3Jvbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmxvY2FsQ3JvbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyB0aGUgbmFtZSBpcyBhbiBBbmd1bGFyIGNvbnZlbnRpb24sIEBJbnB1dCB2YXJpYWJsZSBuYW1lICsgXCJDaGFuZ2VcIiBzdWZmaXhcclxuICAvLyBAT3V0cHV0KCkgY3JvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHVibGljIGFjdGl2ZVRhYjogc3RyaW5nO1xyXG4gIHB1YmxpYyBzZWxlY3RPcHRpb25zID0gdGhpcy5nZXRTZWxlY3RPcHRpb25zKCk7XHJcbiAgcHVibGljIHN0YXRlOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbG9jYWxDcm9uID0gJzAgMCAxLzEgKiAqJztcclxuICBwcml2YXRlIGlzRGlydHk6IGJvb2xlYW47XHJcblxyXG4gIGNyb25Gb3JtOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgbWludXRlc0Zvcm06IEZvcm1Hcm91cDtcclxuICBob3VybHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgZGFpbHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgd2Vla2x5Rm9ybTogRm9ybUdyb3VwO1xyXG4gIG1vbnRobHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgeWVhcmx5Rm9ybTogRm9ybUdyb3VwO1xyXG4gIGFkdmFuY2VkRm9ybTogRm9ybUdyb3VwO1xyXG5cclxuXHJcbiAgZ2V0IGlzQ3JvbkZsYXZvclF1YXJ0eigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eic7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDcm9uRmxhdm9yU3RhbmRhcmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdzdGFuZGFyZCc7XHJcbiAgfVxyXG5cclxuICBnZXQgeWVhckRlZmF1bHRDaGFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JyA/ICcqJyA6ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdlZWtEYXlEZWZhdWx0Q2hhcigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9udGhEYXlEZWZhdWx0Q2hhcigpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuICB9XHJcblxyXG4gIC8qIFVwZGF0ZSB0aGUgY3JvbiBvdXRwdXQgdG8gdGhhdCBvZiB0aGUgc2VsZWN0ZWQgdGFiLlxyXG4gICAqIFRoZSBjcm9uIG91dHB1dCB2YWx1ZSBpcyB1cGRhdGVkIHdoZW5ldmVyIGEgZm9ybSBpcyB1cGRhdGVkLiBUbyBtYWtlIGl0IGNoYW5nZSBpbiByZXNwb25zZSB0byB0YWIgc2VsZWN0aW9uLCB3ZSBzaW1wbHkgcmVzZXRcclxuICAgKiB0aGUgdmFsdWUgb2YgdGhlIGZvcm0gdGhhdCBnb2VzIGludG8gZm9jdXMuICovXHJcbiAgcHVibGljIG9uVGFiRm9jdXMoaWR4OiBudW1iZXIpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGlkeCkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgdGhpcy5taW51dGVzRm9ybS5zZXRWYWx1ZSh0aGlzLm1pbnV0ZXNGb3JtLnZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIHRoaXMuaG91cmx5Rm9ybS5zZXRWYWx1ZSh0aGlzLmhvdXJseUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDI6XHJcbiAgICAgICAgdGhpcy5kYWlseUZvcm0uc2V0VmFsdWUodGhpcy5kYWlseUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM6XHJcbiAgICAgICAgdGhpcy53ZWVrbHlGb3JtLnNldFZhbHVlKHRoaXMud2Vla2x5Rm9ybS52YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDpcclxuICAgICAgICB0aGlzLm1vbnRobHlGb3JtLnNldFZhbHVlKHRoaXMubW9udGhseUZvcm0udmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDU6XHJcbiAgICAgICAgdGhpcy55ZWFybHlGb3JtLnNldFZhbHVlKHRoaXMueWVhcmx5Rm9ybS52YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNjpcclxuICAgICAgICB0aGlzLmFkdmFuY2VkRm9ybS5zZXRWYWx1ZSh0aGlzLmFkdmFuY2VkRm9ybS52YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cobmV3IEVycm9yKCdJbnZhbGlkIHRhYiBzZWxlY3RlZCcpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldERlZmF1bHRTdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlTW9kZWxDaGFuZ2UodGhpcy5jcm9uKTtcclxuXHJcbiAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcblxyXG4gICAgdGhpcy5jcm9uRm9ybSA9IG5ldyBGb3JtQ29udHJvbCgnMCAwIDEvMSAqIConKTtcclxuXHJcbiAgICB0aGlzLm1pbnV0ZXNGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIGhvdXJzOiBbMF0sXHJcbiAgICAgIG1pbnV0ZXM6IFsxXSxcclxuICAgICAgc2Vjb25kczogWzBdXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1pbnV0ZXNGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlTWludXRlc0Nyb24odmFsdWUpKTtcclxuXHJcbiAgICB0aGlzLmhvdXJseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgaG91cnM6IFsxXSxcclxuICAgICAgbWludXRlczogWzBdLFxyXG4gICAgICBzZWNvbmRzOiBbMF1cclxuICAgIH0pO1xyXG4gICAgdGhpcy5ob3VybHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlSG91cmx5Q3Jvbih2YWx1ZSkpO1xyXG5cclxuICAgIHRoaXMuZGFpbHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHN1YlRhYjogWydldmVyeURheXMnXSxcclxuICAgICAgZXZlcnlEYXlzOiB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICBkYXlzOiBbMV0sXHJcbiAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKDEpXSxcclxuICAgICAgICBtaW51dGVzOiBbMF0sXHJcbiAgICAgICAgc2Vjb25kczogWzBdLFxyXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZSgwKV1cclxuICAgICAgfSksXHJcbiAgICAgIGV2ZXJ5V2Vla0RheTogdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgZGF5czogWzBdLFxyXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cigxKV0sXHJcbiAgICAgICAgbWludXRlczogWzBdLFxyXG4gICAgICAgIHNlY29uZHM6IFswXSxcclxuICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoMCldXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGFpbHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWUgPT4gdGhpcy5jb21wdXRlRGFpbHlDcm9uKHZhbHVlKSk7XHJcblxyXG4gICAgdGhpcy53ZWVrbHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIE1PTjogW3RydWVdLFxyXG4gICAgICBUVUU6IFtmYWxzZV0sXHJcbiAgICAgIFdFRDogW2ZhbHNlXSxcclxuICAgICAgVEhVOiBbZmFsc2VdLFxyXG4gICAgICBGUkk6IFtmYWxzZV0sXHJcbiAgICAgIFNBVDogW2ZhbHNlXSxcclxuICAgICAgU1VOOiBbZmFsc2VdLFxyXG4gICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXHJcbiAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLndlZWtseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZVdlZWtseUNyb24obmV4dCkpO1xyXG5cclxuICAgIHRoaXMubW9udGhseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgc3ViVGFiOiBbJ3NwZWNpZmljRGF5J10sXHJcbiAgICAgIHNwZWNpZmljRGF5OiB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICBkYXk6IFsnMSddLFxyXG4gICAgICAgIG1vbnRoczogWzFdLFxyXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxyXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXHJcbiAgICAgIH0pLFxyXG4gICAgICBzcGVjaWZpY1dlZWtEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIG1vbnRoV2VlazogWycjMSddLFxyXG4gICAgICAgIGRheTogWydNT04nXSxcclxuICAgICAgICBtb250aHM6IFsxXSxcclxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcclxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxyXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxyXG4gICAgICB9KVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vbnRobHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVNb250aGx5Q3JvbihuZXh0KSk7XHJcblxyXG4gICAgdGhpcy55ZWFybHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgIHN1YlRhYjogWydzcGVjaWZpY01vbnRoRGF5J10sXHJcbiAgICAgIHNwZWNpZmljTW9udGhEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIG1vbnRoOiBbMV0sXHJcbiAgICAgICAgZGF5OiBbJzEnXSxcclxuICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcclxuICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxyXG4gICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXVxyXG4gICAgICB9KSxcclxuICAgICAgc3BlY2lmaWNNb250aFdlZWs6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgIG1vbnRoV2VlazogWycjMSddLFxyXG4gICAgICAgIGRheTogWydNT04nXSxcclxuICAgICAgICBtb250aDogWzFdLFxyXG4gICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxyXG4gICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIHRoaXMueWVhcmx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlWWVhcmx5Q3JvbihuZXh0KSk7XHJcblxyXG4gICAgdGhpcy5hZHZhbmNlZEZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgZXhwcmVzc2lvbjogW3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gJzAgMTUgMTAgTC0yICogPyAqJyA6ICcxNSAxMCAyICogKiddXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWR2YW5jZWRGb3JtLmNvbnRyb2xzLmV4cHJlc3Npb24udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZUFkdmFuY2VkRXhwcmVzc2lvbihuZXh0KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVNaW51dGVzQ3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gMC8ke3N0YXRlLm1pbnV0ZXN9ICogMS8xICogJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcHV0ZUhvdXJseUNyb24oc3RhdGU6IGFueSkge1xyXG4gICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zZWNvbmRzIDogJyd9ICR7c3RhdGUubWludXRlc30gMC8ke3N0YXRlLmhvdXJzfSAxLzEgKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlRGFpbHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XHJcbiAgICAgIGNhc2UgJ2V2ZXJ5RGF5cyc6XHJcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5ldmVyeURheXMuc2Vjb25kcyA6ICcnfSAke3N0YXRlLmV2ZXJ5RGF5cy5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeURheXMuaG91cnMsIHN0YXRlLmV2ZXJ5RGF5cy5ob3VyVHlwZSl9IDEvJHtzdGF0ZS5ldmVyeURheXMuZGF5c30gKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAke3RoaXMueWVhckRlZmF1bHRDaGFyfWAudHJpbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdldmVyeVdlZWtEYXknOlxyXG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuZXZlcnlXZWVrRGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5ldmVyeVdlZWtEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuZXZlcnlXZWVrRGF5LmhvdXJzLCBzdGF0ZS5ldmVyeVdlZWtEYXkuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiBNT04tRlJJICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gZGFpbHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlV2Vla2x5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICBjb25zdCBkYXlzID0gdGhpcy5zZWxlY3RPcHRpb25zLmRheXNcclxuICAgICAgLnJlZHVjZSgoYWNjLCBkYXkpID0+IHN0YXRlW2RheV0gPyBhY2MuY29uY2F0KFtkYXldKSA6IGFjYywgW10pXHJcbiAgICAgIC5qb2luKCcsJyk7XHJcbiAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ob3Vycywgc3RhdGUuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gKiAke2RheXN9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XHJcbiAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVNb250aGx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICBzd2l0Y2ggKHN0YXRlLnN1YlRhYikge1xyXG4gICAgICBjYXNlICdzcGVjaWZpY0RheSc6XHJcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY0RheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY0RheS5kYXl9IDEvJHtzdGF0ZS5zcGVjaWZpY0RheS5tb250aHN9ICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7dGhpcy55ZWFyRGVmYXVsdENoYXJ9YC50cmltKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3NwZWNpZmljV2Vla0RheSc6XHJcbiAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyBzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljV2Vla0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljV2Vla0RheS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAxLyR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoc30gJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuZGF5fSR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoV2Vla30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBtb250bHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlWWVhcmx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICBzd2l0Y2ggKHN0YXRlLnN1YlRhYikge1xyXG4gICAgICBjYXNlICdzcGVjaWZpY01vbnRoRGF5JzpcclxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/IHN0YXRlLnNwZWNpZmljTW9udGhEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3Vycywgc3RhdGUuc3BlY2lmaWNNb250aERheS5ob3VyVHlwZSl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5kYXl9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5tb250aH0gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnc3BlY2lmaWNNb250aFdlZWsnOlxyXG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ID8gc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRofSAke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLmRheX0ke3N0YXRlLnNwZWNpZmljTW9udGhXZWVrLm1vbnRoV2Vla30gJHt0aGlzLnllYXJEZWZhdWx0Q2hhcn1gLnRyaW0oKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiB5ZWFybHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlQWR2YW5jZWRFeHByZXNzaW9uKGV4cHJlc3Npb246IGFueSkge1xyXG4gICAgdGhpcy5jcm9uID0gZXhwcmVzc2lvbjtcclxuICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkYXlEaXNwbGF5KGRheTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBEYXlzW2RheV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW9udGhXZWVrRGlzcGxheShtb250aFdlZWtOdW1iZXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gTW9udGhXZWVrc1ttb250aFdlZWtOdW1iZXJdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vbnRoRGlzcGxheShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBNb250aHNbbW9udGhdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG1vbnRoRGF5RGlzcGxheShtb250aDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChtb250aCA9PT0gJ0wnKSB7XHJcbiAgICAgIHJldHVybiAnTGFzdCBEYXknO1xyXG4gICAgfSBlbHNlIGlmIChtb250aCA9PT0gJ0xXJykge1xyXG4gICAgICByZXR1cm4gJ0xhc3QgV2Vla2RheSc7XHJcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSAnMVcnKSB7XHJcbiAgICAgIHJldHVybiAnRmlyc3QgV2Vla2RheSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYCR7bW9udGh9JHt0aGlzLmdldE9yZGluYWxTdWZmaXgobW9udGgpfWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEFtUG1Ib3VyKGhvdXI6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lID8gaG91ciA6IChob3VyICsgMTEpICUgMTIgKyAxO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRIb3VyVHlwZShob3VyOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXNlMjRIb3VyVGltZSA/IHVuZGVmaW5lZCA6IChob3VyID49IDEyID8gJ1BNJyA6ICdBTScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBob3VyVG9Dcm9uKGhvdXI6IG51bWJlciwgaG91clR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lKSB7XHJcbiAgICAgIHJldHVybiBob3VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGhvdXJUeXBlID09PSAnQU0nID8gKGhvdXIgPT09IDEyID8gMCA6IGhvdXIpIDogKGhvdXIgPT09IDEyID8gMTIgOiBob3VyICsgMTIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNb2RlbENoYW5nZShjcm9uOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlzRGlydHkpIHtcclxuICAgICAgdGhpcy5pc0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXNEaXJ0eSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5jcm9uSXNWYWxpZChjcm9uKSkge1xyXG4gICAgICBpZiAodGhpcy5pc0Nyb25GbGF2b3JRdWFydHopIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiBleHByZXNzaW9uLCB0aGVyZSBtdXN0IGJlIDYgb3IgNyBzZWdtZW50cycpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNSBzZWdtZW50cycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3JpZ0Nyb246IHN0cmluZyA9IGNyb247XHJcbiAgICBpZiAoY3Jvbi5zcGxpdCgnICcpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XHJcbiAgICAgIGNyb24gPSBgMCAke2Nyb259ICpgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzZWNvbmRzLCBtaW51dGVzLCBob3VycywgZGF5T2ZNb250aCwgbW9udGgsIGRheU9mV2Vla10gPSBjcm9uLnNwbGl0KCcgJyk7XHJcblxyXG4gICAgaWYgKGNyb24ubWF0Y2goL1xcZCsgMFxcL1xcZCsgXFwqIDFcXC8xIFxcKiBbXFw/XFwqXSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdtaW51dGVzJztcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUubWludXRlcy5taW51dGVzID0gcGFyc2VJbnQobWludXRlcy5zdWJzdHJpbmcoMiksIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS5taW51dGVzLnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyAwXFwvXFxkKyAxXFwvMSBcXCogW1xcP1xcKl0gXFwqLykpIHtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnaG91cmx5JztcclxuXHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5LmhvdXJzID0gcGFyc2VJbnQoaG91cnMuc3Vic3RyaW5nKDIpLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuaG91cmx5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIDFcXC9cXGQrIFxcKiBbXFw/XFwqXSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LnN1YlRhYiA9ICdldmVyeURheXMnO1xyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5kYXlzID0gcGFyc2VJbnQoZGF5T2ZNb250aC5zdWJzdHJpbmcoMiksIDEwKTtcclxuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LmV2ZXJ5RGF5cy5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xyXG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXCogTU9OLUZSSSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XHJcblxyXG4gICAgICB0aGlzLnN0YXRlLmRhaWx5LnN1YlRhYiA9ICdldmVyeVdlZWtEYXknO1xyXG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUuZGFpbHkuZXZlcnlXZWVrRGF5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIFtcXD9cXCpdIFxcKiAoTU9OfFRVRXxXRUR8VEhVfEZSSXxTQVR8U1VOKSgsKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikpKiBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd3ZWVrbHknO1xyXG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbnMuZGF5cy5mb3JFYWNoKHdlZWtEYXkgPT4gdGhpcy5zdGF0ZS53ZWVrbHlbd2Vla0RheV0gPSBmYWxzZSk7XHJcbiAgICAgIGRheU9mV2Vlay5zcGxpdCgnLCcpLmZvckVhY2god2Vla0RheSA9PiB0aGlzLnN0YXRlLndlZWtseVt3ZWVrRGF5XSA9IHRydWUpO1xyXG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5LmhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUud2Vla2x5LnNlY29uZHMgPSBwYXJzZUludChzZWNvbmRzLCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKGNyb24ubWF0Y2goL1xcZCsgXFxkKyBcXGQrIChcXGQrfEx8TFd8MVcpIDFcXC9cXGQrIFtcXD9cXCpdIFxcKi8pKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21vbnRobHknO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3ViVGFiID0gJ3NwZWNpZmljRGF5JztcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmRheSA9IGRheU9mTW9udGg7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5tb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIDEwKTtcclxuICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY0RheS5taW51dGVzID0gcGFyc2VJbnQobWludXRlcywgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgW1xcP1xcKl0gMVxcL1xcZCsgKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoKCNbMS01XSl8TCkgXFwqLykpIHtcclxuICAgICAgY29uc3QgZGF5ID0gZGF5T2ZXZWVrLnN1YnN0cigwLCAzKTtcclxuICAgICAgY29uc3QgbW9udGhXZWVrID0gZGF5T2ZXZWVrLnN1YnN0cigzKTtcclxuICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbW9udGhseSc7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zdWJUYWIgPSAnc3BlY2lmaWNXZWVrRGF5JztcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5tb250aFdlZWsgPSBtb250aFdlZWs7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuZGF5ID0gZGF5O1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1vbnRocyA9IHBhcnNlSW50KG1vbnRoLnN1YnN0cmluZygyKSwgMTApO1xyXG4gICAgICBjb25zdCBwYXJzZWRIb3VycyA9IHBhcnNlSW50KGhvdXJzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS5tb250aGx5LnNwZWNpZmljV2Vla0RheS5ob3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLm1vbnRobHkuc3BlY2lmaWNXZWVrRGF5Lm1pbnV0ZXMgPSBwYXJzZUludChtaW51dGVzLCAxMCk7XHJcbiAgICAgIHRoaXMuc3RhdGUubW9udGhseS5zcGVjaWZpY1dlZWtEYXkuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuICAgIH0gZWxzZSBpZiAoY3Jvbi5tYXRjaCgvXFxkKyBcXGQrIFxcZCsgKFxcZCt8THxMV3wxVykgXFxkKyBbXFw/XFwqXSBcXCovKSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd5ZWFybHknO1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zdWJUYWIgPSAnc3BlY2lmaWNNb250aERheSc7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmRheSA9IGRheU9mTW9udGg7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5ob3VycyA9IHRoaXMuZ2V0QW1QbUhvdXIocGFyc2VkSG91cnMpO1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlID0gdGhpcy5nZXRIb3VyVHlwZShwYXJzZWRIb3Vycyk7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhEYXkubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aERheS5zZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgMTApO1xyXG4gICAgfSBlbHNlIGlmIChjcm9uLm1hdGNoKC9cXGQrIFxcZCsgXFxkKyBbXFw/XFwqXSBcXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi8pKSB7XHJcbiAgICAgIGNvbnN0IGRheSA9IGRheU9mV2Vlay5zdWJzdHIoMCwgMyk7XHJcbiAgICAgIGNvbnN0IG1vbnRoV2VlayA9IGRheU9mV2Vlay5zdWJzdHIoMyk7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ3llYXJseSc7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnN1YlRhYiA9ICdzcGVjaWZpY01vbnRoV2Vlayc7XHJcbiAgICAgIHRoaXMuc3RhdGUueWVhcmx5LnNwZWNpZmljTW9udGhXZWVrLm1vbnRoV2VlayA9IG1vbnRoV2VlaztcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuZGF5ID0gZGF5O1xyXG4gICAgICB0aGlzLnN0YXRlLnllYXJseS5zcGVjaWZpY01vbnRoV2Vlay5tb250aCA9IHBhcnNlSW50KG1vbnRoLCAxMCk7XHJcbiAgICAgIGNvbnN0IHBhcnNlZEhvdXJzID0gcGFyc2VJbnQoaG91cnMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91cnMgPSB0aGlzLmdldEFtUG1Ib3VyKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuaG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsubWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIDEwKTtcclxuICAgICAgdGhpcy5zdGF0ZS55ZWFybHkuc3BlY2lmaWNNb250aFdlZWsuc2Vjb25kcyA9IHBhcnNlSW50KHNlY29uZHMsIDEwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2FkdmFuY2VkJztcclxuICAgICAgdGhpcy5zdGF0ZS5hZHZhbmNlZC5leHByZXNzaW9uID0gb3JpZ0Nyb247XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyb25Jc1ZhbGlkKGNyb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGNyb24pIHtcclxuICAgICAgY29uc3QgY3JvblBhcnRzID0gY3Jvbi5zcGxpdCgnICcpO1xyXG4gICAgICByZXR1cm4gKHRoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmIChjcm9uUGFydHMubGVuZ3RoID09PSA2XHJcbiAgICAgICAgfHwgY3JvblBhcnRzLmxlbmd0aCA9PT0gNylcclxuICAgICAgICB8fCAodGhpcy5pc0Nyb25GbGF2b3JTdGFuZGFyZCAmJiBjcm9uUGFydHMubGVuZ3RoID09PSA1KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcblxyXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFN0YXRlKCkge1xyXG4gICAgY29uc3QgW2RlZmF1bHRIb3VycywgZGVmYXVsdE1pbnV0ZXMsIGRlZmF1bHRTZWNvbmRzXSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0VGltZS5zcGxpdCgnOicpLm1hcChOdW1iZXIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbnV0ZXM6IHtcclxuICAgICAgICBtaW51dGVzOiAxLFxyXG4gICAgICAgIHNlY29uZHM6IDBcclxuICAgICAgfSxcclxuICAgICAgaG91cmx5OiB7XHJcbiAgICAgICAgaG91cnM6IDEsXHJcbiAgICAgICAgbWludXRlczogMCxcclxuICAgICAgICBzZWNvbmRzOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhaWx5OiB7XHJcbiAgICAgICAgc3ViVGFiOiAnZXZlcnlEYXlzJyxcclxuICAgICAgICBldmVyeURheXM6IHtcclxuICAgICAgICAgIGRheXM6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9LFxyXG4gICAgICAgIGV2ZXJ5V2Vla0RheToge1xyXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB3ZWVrbHk6IHtcclxuICAgICAgICBNT046IHRydWUsXHJcbiAgICAgICAgVFVFOiBmYWxzZSxcclxuICAgICAgICBXRUQ6IGZhbHNlLFxyXG4gICAgICAgIFRIVTogZmFsc2UsXHJcbiAgICAgICAgRlJJOiBmYWxzZSxcclxuICAgICAgICBTQVQ6IGZhbHNlLFxyXG4gICAgICAgIFNVTjogZmFsc2UsXHJcbiAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vbnRobHk6IHtcclxuICAgICAgICBzdWJUYWI6ICdzcGVjaWZpY0RheScsXHJcbiAgICAgICAgc3BlY2lmaWNEYXk6IHtcclxuICAgICAgICAgIGRheTogJzEnLFxyXG4gICAgICAgICAgbW9udGhzOiAxLFxyXG4gICAgICAgICAgaG91cnM6IHRoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKSxcclxuICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxyXG4gICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICBob3VyVHlwZTogdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGVjaWZpY1dlZWtEYXk6IHtcclxuICAgICAgICAgIG1vbnRoV2VlazogJyMxJyxcclxuICAgICAgICAgIGRheTogJ01PTicsXHJcbiAgICAgICAgICBtb250aHM6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHllYXJseToge1xyXG4gICAgICAgIHN1YlRhYjogJ3NwZWNpZmljTW9udGhEYXknLFxyXG4gICAgICAgIHNwZWNpZmljTW9udGhEYXk6IHtcclxuICAgICAgICAgIG1vbnRoOiAxLFxyXG4gICAgICAgICAgZGF5OiAnMScsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB7XHJcbiAgICAgICAgICBtb250aFdlZWs6ICcjMScsXHJcbiAgICAgICAgICBkYXk6ICdNT04nLFxyXG4gICAgICAgICAgbW9udGg6IDEsXHJcbiAgICAgICAgICBob3VyczogdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpLFxyXG4gICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgIGhvdXJUeXBlOiB0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkdmFuY2VkOiB7XHJcbiAgICAgICAgZXhwcmVzc2lvbjogdGhpcy5pc0Nyb25GbGF2b3JRdWFydHogPyAnMCAxNSAxMCBMLTIgKiA/IConIDogJzE1IDEwIDIgKiAqJ1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRPcmRpbmFsU3VmZml4KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnN0IHNlY29uZFRvTGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDIpO1xyXG4gICAgICBpZiAoc2Vjb25kVG9MYXN0RGlnaXQgPT09ICcxJykge1xyXG4gICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFzdERpZ2l0ID0gdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgc3dpdGNoIChsYXN0RGlnaXQpIHtcclxuICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgcmV0dXJuICdzdCc7XHJcbiAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgIHJldHVybiAnbmQnO1xyXG4gICAgICBjYXNlICczJzpcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U2VsZWN0T3B0aW9ucygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoczogdGhpcy5nZXRSYW5nZSgxLCAxMiksXHJcbiAgICAgIG1vbnRoV2Vla3M6IFsnIzEnLCAnIzInLCAnIzMnLCAnIzQnLCAnIzUnLCAnTCddLFxyXG4gICAgICBkYXlzOiBbJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJywgJ1NVTiddLFxyXG4gICAgICBtaW51dGVzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcclxuICAgICAgZnVsbE1pbnV0ZXM6IHRoaXMuZ2V0UmFuZ2UoMCwgNTkpLFxyXG4gICAgICBzZWNvbmRzOiB0aGlzLmdldFJhbmdlKDAsIDU5KSxcclxuICAgICAgaG91cnM6IHRoaXMuZ2V0UmFuZ2UoMSwgMjMpLFxyXG4gICAgICBtb250aERheXM6IHRoaXMuZ2V0UmFuZ2UoMSwgMzEpLFxyXG4gICAgICBtb250aERheXNXaXRoTGFzdHM6IFsnMVcnLCAuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldLCAnTFcnLCAnTCddLFxyXG4gICAgICBtb250aERheXNXaXRoT3V0TGFzdHM6IFsuLi5bLi4udGhpcy5nZXRSYW5nZSgxLCAzMSkubWFwKFN0cmluZyldXSxcclxuICAgICAgaG91clR5cGVzOiBbJ0FNJywgJ1BNJ11cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFJhbmdlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogbnVtYmVyW10ge1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxO1xyXG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcCgoXywgaSkgPT4gaSArIHN0YXJ0KTtcclxuICB9XHJcblxyXG5cclxuICAvKlxyXG4gICAqIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgICovXHJcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7XHJcbiAgfTtcclxuICBvblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jcm9uID0gb2JqO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG59XHJcbiIsIjxzZWN0aW9uIGNsYXNzPVwiY3Jvbi1lZGl0b3ItbWFpblwiPlxyXG4gICAgPG1hdC10YWItZ3JvdXAgY2xhc3M9XCJjcm9uLWVkaXRvci1jb250YWluZXJcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJvblRhYkZvY3VzKCRldmVudClcIiBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIFtjb2xvcl09XCJjb2xvclwiPlxyXG5cclxuICAgICAgPCEtLSBNaW51dGUgLS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJNaW51dGVzXCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlTWludXRlc1RhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+RXZlcnkgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXJcclxuICAgICAgICAgICAgICBbZm9ybUdyb3VwXT1cIm1pbnV0ZXNGb3JtXCJcclxuICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgIFtoaWRlSG91cnNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LXRhYj5cclxuXHJcbiAgICAgIDwhLS0gSG91cmx5IC0tPlxyXG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiSG91cmx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlSG91cmx5VGFiXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZm9ybUdyb3VwXT1cImhvdXJseUZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC10YWI+XHJcblxyXG5cclxuICAgICAgPCEtLSBEYWlseS0tPlxyXG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiRGFpbHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVEYWlseVRhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwiZGFpbHlGb3JtXCI+XHJcblxyXG4gICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWdyb3VwXCIgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJzdWJUYWJcIiBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWJ1dHRvblwiIHZhbHVlPVwiZXZlcnlEYXlzXCIgY2hlY2tlZD1cImNoZWNrZWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj5FdmVyeSA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwiZXZlcnlEYXlzXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheShzKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwiZGF5c1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhEYXkgb2Ygc2VsZWN0T3B0aW9ucy5tb250aERheXNcIiBbdmFsdWVdPVwibW9udGhEYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5fX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICBhdFxyXG5cclxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgZm9ybUdyb3VwTmFtZT1cImV2ZXJ5RGF5c1wiXHJcbiAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuXHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJzdWJUYWJcIiBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWJ1dHRvblwiIHZhbHVlPVwiZXZlcnlXZWVrRGF5XCI+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuPldlZWsgRGF5IChNT04tRlJJKSBhdCA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyXHJcbiAgICAgICAgICAgICAgICBmb3JtR3JvdXBOYW1lPVwiZXZlcnlXZWVrRGF5XCJcclxuICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBXZWVrbHktLT5cclxuICAgICAgPG1hdC10YWIgIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJXZWVrbHlcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVXZWVrbHlUYWJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIj5cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPkV2ZXJ5IDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiPlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiY2hlY2tib3gtbWFyZ2luXCIgZm9ybUNvbnRyb2xOYW1lPVwiTU9OXCI+TW9uZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJUVUVcIj5UdWVzZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJXRURcIj5XZWRuZXNkYXk8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlRIVVwiPlRodXJzZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJGUklcIj5GcmlkYXk8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImNoZWNrYm94LW1hcmdpblwiIGZvcm1Db250cm9sTmFtZT1cIlNBVFwiPlNhdHVyZGF5PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggY2xhc3M9XCJjaGVja2JveC1tYXJnaW5cIiBmb3JtQ29udHJvbE5hbWU9XCJTVU5cIj5TdW5kYXk8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPmF0IHRpbWUgPC9zcGFuPlxyXG5cclxuICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zLnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHN8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBNb250aGx5LS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJNb250aGx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlTW9udGhseVRhYlwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtXCI+XHJcblxyXG5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcblxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiAgbmFtZT1cIm1vbnRobHktcmFkaW9cIiB2YWx1ZT1cInNwZWNpZmljRGF5XCIgPlxyXG5cclxuICAgICAgICAgICAgICA8IS0tIFNwZXNpZmljIGRheSAtLT5cclxuICAgICAgICAgICAgICA8c3BhbiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNEYXlcIj5cclxuXHJcbiAgICAgICAgICAgICAgICBPbiB0aGVcclxuXHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6J1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aExhc3RzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhMYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bW9udGhEYXlEaXNwbGF5KG1vbnRoRGF5c1dpdGhMYXN0KX19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAnc3RhbmRhcmQnXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGgtZGF5c1wiICBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoT3V0TGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhPdXRMYXN0c1wiIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIG9mIGV2ZXJ5XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRocy1zbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoc1wiIFtuZ0NsYXNzXT1cIm9wdGlvbnMuZm9ybVNlbGVjdENsYXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3ttb250aH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgYXQgdGltZVxyXG5cclxuICAgICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm0uY29udHJvbHMuc3BlY2lmaWNEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcblxyXG5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gIG5hbWU9XCJtb250aGx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY1dlZWtEYXlcIj5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLSBTcGVzaWZpYyBXZWVrIGRheSAtLT5cclxuICAgICAgICAgICAgICA8c3BhbiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNXZWVrRGF5XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgT24gdGhlXHJcblxyXG4gICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPldlZWs8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIiBbbmdDbGFzc109XCJvcHRpb25zLmZvcm1TZWxlY3RDbGFzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aFdlZWsgb2Ygc2VsZWN0T3B0aW9ucy5tb250aFdlZWtzXCIgW3ZhbHVlXT1cIm1vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3ttb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vlayl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgW25nQ2xhc3NdPVwib3B0aW9ucy5mb3JtU2VsZWN0Q2xhc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGF5IG9mIHNlbGVjdE9wdGlvbnMuZGF5c1wiIFt2YWx1ZV09XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7ZGF5RGlzcGxheShkYXkpfX1cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgb2YgZXZlcnlcclxuXHJcbiAgICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHMtc21hbGxcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt7bW9udGh9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICBhdCB0aW1lXHJcblxyXG4gICAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Zvcm1Hcm91cF09XCJtb250aGx5Rm9ybS5jb250cm9scy5zcGVjaWZpY1dlZWtEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zLmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LXRhYj5cclxuXHJcbiAgICAgIDwhLS0gWWVhcmx5LS0+XHJcbiAgICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgIGxhYmVsPVwiWWVhcmx5XCIgKm5nSWY9XCIhb3B0aW9ucy5oaWRlWWVhcmx5VGFiXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybVwiPlxyXG5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcblxyXG4gICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwieWVhcmx5LXJhZGlvXCIgdmFsdWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XHJcblxyXG4gICAgICAgICAgICAgIE9uIHRoZVxyXG5cclxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIiAqbmdJZj1cIm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eidcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aExhc3RzXCIgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhMYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ttb250aERheURpc3BsYXkobW9udGhEYXlzV2l0aExhc3QpfX1cclxuICAgICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aERheVwiICpuZ0lmPVwib3B0aW9ucy5jcm9uRmxhdm9yID09PSAnc3RhbmRhcmQnXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCIgPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGhEYXlzV2l0aE91dExhc3Qgb2Ygc2VsZWN0T3B0aW9ucy5tb250aERheXNXaXRoT3V0TGFzdHNcIiBbdmFsdWVdPVwibW9udGhEYXlzV2l0aE91dExhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgb2ZcclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPk1vbnRoPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoc1wiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoc1wiIFt2YWx1ZV09XCJtb250aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7bW9udGhEaXNwbGF5KG1vbnRoKX19XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICBhdCB0aW1lXHJcblxyXG4gICAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljTW9udGhEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnMudXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnMuaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInllYXJseS1yYWRpb1wiIHZhbHVlPVwic3BlY2lmaWNNb250aFdlZWtcIiBbbmdDbGFzc109XCJzdGF0ZS5mb3JtUmFkaW9DbGFzc1wiPlxyXG5cclxuICAgICAgICAgICAgICBPbiB0aGVcclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5XZWVrPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cImRheS1vcmRlci1pbi1tb250aFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoV2Vla1wiID5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoV2VlayBvZiBzZWxlY3RPcHRpb25zLm1vbnRoV2Vla3NcIiBbdmFsdWVdPVwibW9udGhXZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3ttb250aFdlZWtEaXNwbGF5KG1vbnRoV2Vlayl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgIGZvcm1Db250cm9sTmFtZT1cImRheVwiID5cclxuICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGRheSBvZiBzZWxlY3RPcHRpb25zLmRheXNcIiBbdmFsdWVdPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tkYXlEaXNwbGF5KGRheSl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgb2ZcclxuXHJcbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aHNcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e21vbnRoRGlzcGxheShtb250aCl9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgYXQgdGltZVxyXG5cclxuICAgICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybS5jb250cm9scy5zcGVjaWZpY01vbnRoV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG4gICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYXQtdGFiPlxyXG5cclxuICAgICAgPCEtLSBBZHZhbmNlZC0tPlxyXG4gICAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYlwiIGxhYmVsPVwiQWR2YW5jZWRcIiAqbmdJZj1cIiFvcHRpb25zLmhpZGVBZHZhbmNlZFRhYlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudFwiIFtmb3JtR3JvdXBdPVwiYWR2YW5jZWRGb3JtXCI+XHJcblxyXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICA8bWF0LWxhYmVsPkV4cHJlc3Npb248L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZHZhbmNlZC1jcm9uLWVkaXRvci1pbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImV4cHJlc3Npb25cIj5cclxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWF0LXRhYj5cclxuICAgIDwvbWF0LXRhYi1ncm91cD5cclxuPC9zZWN0aW9uPlxyXG4iXX0=