import { Component, EventEmitter, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewTask } from "../task/task.model";

@Component({
    standalone: true,
    selector:"app-new-task",
    templateUrl:"./new-task.component.html",
    styleUrl:"./new-task.component.css",
    imports:[FormsModule]
})
export class NewTaskComponent
{
    @Output() cancel = new EventEmitter();
    @Output() add = new EventEmitter<NewTask>();
    enteredTitle : string = '';
    // enteredTitle = signal('');
    enteredSummary : string = '';
    enteredDueDate : string = '';

    onCancel(){
        this.cancel.emit();
    }

    onSubmit(){
        this.add.emit({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            dueDate: this.enteredDueDate
        });
    }
}