import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "../dummy-tasks";

@Component({
    selector:'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    styleUrl: './tasks.component.css',
    templateUrl: './tasks.component.html'
})
export class TasksComponent
{
    @Input({required: true}) userName !:string;
    @Input({required: true}) userId !: string;

    get selectedUserTasks(){
        return dummyTasks.filter((task) => task.userId === this.userId);
    }

} 