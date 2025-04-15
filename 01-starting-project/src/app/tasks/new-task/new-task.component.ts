import { Component, EventEmitter, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

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
    // enteredTitle : string = '';
    enteredTitle = signal('');

    onCancel(){
        this.cancel.emit();
    }
}