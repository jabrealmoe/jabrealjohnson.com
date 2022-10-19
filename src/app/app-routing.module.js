"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingComponents = exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const resume_component_1 = require("./resume/resume.component");
const engineering_component_1 = require("./engineering/engineering.component");
const workshops_component_1 = require("./workshops/workshops.component");
const home_component_1 = require("./home/home.component");
const routes = [
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'engineering', component: engineering_component_1.EngineeringComponent },
    { path: 'workshops', component: workshops_component_1.WorkshopsComponent },
    { path: '', component: home_component_1.HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.RoutingComponents = [home_component_1.HomeComponent, engineering_component_1.EngineeringComponent, resume_component_1.ResumeComponent, workshops_component_1.WorkshopsComponent];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyw0Q0FBdUQ7QUFDdkQsZ0VBQTBEO0FBQzFELCtFQUF5RTtBQUN6RSx5RUFBbUU7QUFDbkUsMERBQW9EO0FBR3BELE1BQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsd0NBQWtCLEVBQUM7SUFDbEQsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFDO0NBRXJDLENBQUM7QUFPRixJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFJLENBQUE7QUFBcEIsZ0JBQWdCO0lBTDVCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUVXLGdCQUFnQixDQUFJO0FBQXBCLDRDQUFnQjtBQUNoQixRQUFBLGlCQUFpQixHQUFHLENBQUMsOEJBQWEsRUFBRSw0Q0FBb0IsRUFBRSxrQ0FBZSxFQUFFLHdDQUFrQixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtSZXN1bWVDb21wb25lbnR9IGZyb20gJy4vcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQnO1xuaW1wb3J0IHtFbmdpbmVlcmluZ0NvbXBvbmVudH0gZnJvbSAnLi9lbmdpbmVlcmluZy9lbmdpbmVlcmluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtXb3Jrc2hvcHNDb21wb25lbnR9IGZyb20gJy4vd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQnO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7cGF0aDogJ3Jlc3VtZScsIGNvbXBvbmVudDogUmVzdW1lQ29tcG9uZW50fSxcbiAge3BhdGg6ICdlbmdpbmVlcmluZycsIGNvbXBvbmVudDogRW5naW5lZXJpbmdDb21wb25lbnR9LFxuICB7cGF0aDogJ3dvcmtzaG9wcycsIGNvbXBvbmVudDogV29ya3Nob3BzQ29tcG9uZW50fSxcbiAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnR9XG5cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuZXhwb3J0IGNvbnN0IFJvdXRpbmdDb21wb25lbnRzID0gW0hvbWVDb21wb25lbnQsIEVuZ2luZWVyaW5nQ29tcG9uZW50LCBSZXN1bWVDb21wb25lbnQsIFdvcmtzaG9wc0NvbXBvbmVudF1cbiJdfQ==