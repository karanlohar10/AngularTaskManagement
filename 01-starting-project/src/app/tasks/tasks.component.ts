import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTask, Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from "./tasks.service";

@Component({
    selector:'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    styleUrl: './tasks.component.css',
    templateUrl: './tasks.component.html'
})
export class TasksComponent
{
    @Input({required: true}) userName !:string;
    @Input({required: true}) userId !: string;
    isAddingTask : boolean = false;

    constructor(private tasksService: TasksService){}

    get selectedUserTasks(){
        return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string){
        this.tasksService.completeTask(id);
    }

    onStartAddTask(){
        this.isAddingTask = true;
    }

    onCloseNewTask(){
        this.isAddingTask = false;
    }
} 