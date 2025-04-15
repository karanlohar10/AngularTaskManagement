import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    standalone: true,
    selector:"app-new-task",
    templateUrl:"./new-task.component.html",
    styleUrl:"./new-task.component.css",
    imports:[]
})
export class NewTaskComponent
{
    @Output() cancel = new EventEmitter();

    onCancel(){
        this.cancel.emit();
    }
}