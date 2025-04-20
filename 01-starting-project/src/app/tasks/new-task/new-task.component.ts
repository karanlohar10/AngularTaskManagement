import { Component, EventEmitter, inject, Input, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTask } from "../task/task.model";
import { TasksService } from "../tasks.service";

@Component({
    standalone: true,
    selector:"app-new-task",
    templateUrl:"./new-task.component.html",
    styleUrl:"./new-task.component.css",
    imports:[FormsModule]
})
export class NewTaskComponent
{
    @Input({required: true}) userId !: string;
    @Output() close = new EventEmitter();
    enteredTitle : string = '';
    // enteredTitle = signal('');
    enteredSummary : string = '';
    enteredDueDate : string = '';

    private tasksService: TasksService = inject(TasksService);

    onCancel(){
        this.close.emit();
    }

    onSubmit(){
        this.tasksService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            dueDate: this.enteredDueDate
        }, this.userId);
        this.close.emit();
    }
}