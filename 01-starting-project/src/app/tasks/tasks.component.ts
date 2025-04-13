import { Component, Input } from "@angular/core";

@Component({
    selector:'app-tasks',
    standalone: true,
    imports: [],
    styleUrl: './tasks.component.css',
    templateUrl: './tasks.component.html'
})
export class TasksComponent
{
    @Input({required: true}) userName !:string;
} 