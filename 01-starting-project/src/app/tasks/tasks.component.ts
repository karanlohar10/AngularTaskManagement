import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from "../dummy-tasks";
import { NewTask, Task } from "./task/task.model";
import { NewTaskComponent } from "./new-task/new-task.component";

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

    myTasks:Task[] = dummyTasks; 
    get selectedUserTasks(){
        return this.myTasks.filter((task) => task.userId === this.userId);
    }

    onCompleteTask(id: string){
        this.myTasks = this.myTasks.filter((task) => task.id !== id);
    }

    onStartAddTask(){
        this.isAddingTask = true;
    }

    onCancelNewTask(){
        this.isAddingTask = false;
    }

    onAddNewTask(newTask: NewTask){
        this.myTasks.unshift({
            id: new Date().getTime().toString(),
            userId: this.userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        });
        this.isAddingTask = false;
    }
} 