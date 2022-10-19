"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
const engineering_component_1 = require("./engineering/engineering.component");
const resume_component_1 = require("./resume/resume.component");
const workshops_component_1 = require("./workshops/workshops.component");
const home_component_1 = require("./home/home.component");
const http_1 = require("@angular/common/http");
const ngx_typed_js_1 = require("ngx-typed-js");
const download_file_service_1 = require("./download-file.service");
const psychologicalsafety_component_1 = require("./psychologicalsafety/psychologicalsafety.component");
const okrs_component_1 = require("./okrs/okrs.component");
const impactstorymapping_component_1 = require("./impactstorymapping/impactstorymapping.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_routing_module_1.RoutingComponents,
            app_component_1.AppComponent,
            engineering_component_1.EngineeringComponent,
            resume_component_1.ResumeComponent,
            workshops_component_1.WorkshopsComponent,
            home_component_1.HomeComponent,
            psychologicalsafety_component_1.PsychologicalsafetyComponent,
            okrs_component_1.OkrsComponent,
            impactstorymapping_component_1.ImpactstorymappingComponent
        ],
        imports: [
            http_1.HttpClientModule,
            ngx_typed_js_1.NgxTypedJsModule,
            angular_fontawesome_1.FontAwesomeModule,
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            angular_fontawesome_1.FontAwesomeModule,
        ],
        providers: [download_file_service_1.DownloadFileService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLGdFQUEwRDtBQUUxRCw2REFBMkU7QUFDM0UsbURBQStDO0FBQy9DLDBFQUFxRTtBQUNyRSwrRUFBMkU7QUFDM0UsZ0VBQTREO0FBQzVELHlFQUFxRTtBQUNyRSwwREFBc0Q7QUFDdEQsK0NBQXNEO0FBQ3RELCtDQUE4QztBQUM5QyxtRUFBNEQ7QUFDNUQsdUdBQW1HO0FBQ25HLDBEQUFzRDtBQUN0RCxvR0FBZ0c7QUEwQmhHLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7Q0FBSSxDQUFBO0FBQWIsU0FBUztJQXhCckIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osc0NBQWlCO1lBQ2pCLDRCQUFZO1lBQ1osNENBQW9CO1lBQ3BCLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDhCQUFhO1lBQ2IsNERBQTRCO1lBQzVCLDhCQUFhO1lBQ2IsMERBQTJCO1NBQzVCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1lBQ2hCLCtCQUFnQjtZQUNoQix1Q0FBaUI7WUFDakIsZ0NBQWE7WUFDYixxQ0FBZ0I7WUFDaEIsdUNBQWlCO1NBRWxCO1FBQ0QsU0FBUyxFQUFFLENBQUMsMkNBQW1CLENBQUM7UUFDaEMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlLCBSb3V0aW5nQ29tcG9uZW50cyB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb250QXdlc29tZU1vZHVsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9hbmd1bGFyLWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IEVuZ2luZWVyaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9lbmdpbmVlcmluZy9lbmdpbmVlcmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdW1lQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7Tmd4VHlwZWRKc01vZHVsZX0gZnJvbSBcIm5neC10eXBlZC1qc1wiO1xuaW1wb3J0IHtEb3dubG9hZEZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9kb3dubG9hZC1maWxlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBzeWNob2xvZ2ljYWxzYWZldHlDb21wb25lbnQgfSBmcm9tICcuL3BzeWNob2xvZ2ljYWxzYWZldHkvcHN5Y2hvbG9naWNhbHNhZmV0eS5jb21wb25lbnQnO1xuaW1wb3J0IHsgT2tyc0NvbXBvbmVudCB9IGZyb20gJy4vb2tycy9va3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbXBhY3RzdG9yeW1hcHBpbmdDb21wb25lbnQgfSBmcm9tICcuL2ltcGFjdHN0b3J5bWFwcGluZy9pbXBhY3RzdG9yeW1hcHBpbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUm91dGluZ0NvbXBvbmVudHMsXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEVuZ2luZWVyaW5nQ29tcG9uZW50LFxuICAgIFJlc3VtZUNvbXBvbmVudCxcbiAgICBXb3Jrc2hvcHNDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBQc3ljaG9sb2dpY2Fsc2FmZXR5Q29tcG9uZW50LFxuICAgIE9rcnNDb21wb25lbnQsXG4gICAgSW1wYWN0c3RvcnltYXBwaW5nQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5neFR5cGVkSnNNb2R1bGUsXG4gICAgRm9udEF3ZXNvbWVNb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIEZvbnRBd2Vzb21lTW9kdWxlLFxuXG4gIF0sXG4gIHByb3ZpZGVyczogW0Rvd25sb2FkRmlsZVNlcnZpY2VdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==